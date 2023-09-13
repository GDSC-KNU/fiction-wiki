import { NextRequest, NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";
// import { TranslationServiceClient } from "@google-cloud/translate";
import { Redis } from "@upstash/redis";
import client from "@libs/server/client";

import { getToken } from "next-auth/jwt";
import { papagoCustomTranslate } from "@helper/translation/papagoTranslate";
import extractor from "@helper/translation/extractor";
import { pinyin } from "pinyin-pro";
import axios from "axios";
import uploadGlossaries from "@/hooks/uploadGlossaries";

type ResponseData = {
  subTitle: string;
  nextUrl?: string;
  prevUrl?: string;
  originalTextArray: string[];
  translatedTextArray: string[];
};

const redisConfig = {
  url:
    process.env.UPSTASH_REDIS_REST_URL ??
    "https://apn1-sacred-manatee-34786.upstash.io",
  token:
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    "AYfiACQgMWQxNjcyY2QtZWM4MS00NzQxLTgyZGItZGY1MjYwNDEwZGExOWJmODI1MWQzNGRlNDUyMDkzODM2NmE3NGQxZThiMmM=",
};

const redis = new Redis(redisConfig);

const secret = process.env.NEXTAUTH_SECRET;

async function getUserToken(req: NextRequest) {
  const token = await getToken({ req, secret });
  if (!token) {
    throw new Error("Unauthorized");
  }
  return token;
}

async function getUserInfo(token: any) {
  const userProfile = await client.user.findUnique({
    where: { id: token.user.id },
    select: {
      id: true,
      clientID: true,
      clientKey: true,
      naverAccessKey: true,
      naverSecretKey: true,
    },
  });
  return userProfile;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body) return NextResponse.json({ ok: false }, { status: 400 });

  const token = await getUserToken(req);

  const userInfo = await getUserInfo(token);
  if (!userInfo)
    return NextResponse.json(
      { ok: false, message: "No user info" },
      { status: 400 }
    );

  const {
    id: userId,
    clientID,
    clientKey,
    naverAccessKey,
    naverSecretKey,
  } = userInfo;
  if (!userId || !clientID || !clientKey)
    return NextResponse.json(
      { ok: false, message: "clientID와 clinetKey를 입력해주세요." },
      { status: 400 }
    );
  const { prompt } = body;

  // find papagoClientId and clientKey by nextSessionID
  // const userProfile = await client.user.findUnique({
  //   // where: { id: userId?.toString() || req?.session?.user?.id },
  //   where: { id: id },
  //   select: {
  //     clientID: true,
  //     clientKey: true,
  //   },
  // });

  if (!clientID || !clientKey || !naverAccessKey || !naverSecretKey) {
    redis.del(prompt);
    return NextResponse.json({
      ok: false,
    });
  }

  try {
    if (!prompt || prompt === "") {
      return NextResponse.json({
        ok: false,
      });
    }

    let baseUrl = "";

    // 텍스트 파싱, 번역, db등록 및 데이터 반환하는 Main 함수
    const terminator = async () => {
      const {
        subTitle,
        nextUrl,
        prevUrl,
        originalTextArray,
        id,
        glossaryUrl,
        originalTitle,
      } = await extractor({ prompt, clientID, clientKey });

      //원문배열
      originalTextArray.push(subTitle);

      //작품 GlossaryKey 가져오기 / getGlossaryKey of the fiction
      let glossaryKey: string | undefined | null = undefined;

      const existingGlossarykey = await client.fav.findFirst({
        where: {
          userId: userId,
          fictionId: +id!.toString(),
        },
      });

      if (existingGlossarykey) {
        glossaryKey = existingGlossarykey.glossaryKey;
      } else {
        const glossaries = await client.glossary.findMany({
          where: {
            fiction: {
              id: +id!.toString(),
            },
          },
        });

        // Glossary CSV로 변환후 업로드
        const { upload }: any = uploadGlossaries({
          originalTitle,
          naverAccessKey,
          naverSecretKey,
          id,
          userId,
        });

        glossaryKey = await upload(glossaries);
      }

      // 본문 - CustomTranslator로 번역 with glossary
      const translatedTextArray = await Promise.all(
        originalTextArray.map((item) =>
          papagoCustomTranslate({
            input: item,
            clientID,
            clientKey,
            glossaryKey,
          })
        )
      );

      const pinyinTextArray = await Promise.all(
        originalTextArray.map((item) => pinyin(item))
      );

      return {
        originalTextArray,
        translatedTextArray,
        subTitle,
        nextUrl,
        prevUrl,
        pinyinTextArray,
        id,
        originalTitle,
      };
    };

    // let cache: any = await redis.get(prompt);

    // if (cache) {
    //   const {
    //     subTitle,
    //     nextUrl,
    //     prevUrl,
    //     originalTextArray,
    //     translatedTextArray,
    //     pinyinTextArray,
    //     id,
    //     originalTitle,
    //   } = await cache;
    //   // console.log("cached  ver");
    //   redis.del(prompt);
    //   return NextResponse.json({
    //     subTitle,
    //     nextUrl,
    //     prevUrl,
    //     originalTextArray,
    //     translatedTextArray,
    //     pinyinTextArray,
    //     id,
    //     originalTitle,
    //   });
    // } else {

    const {
      subTitle,
      nextUrl,
      prevUrl,
      originalTextArray,
      translatedTextArray,
      pinyinTextArray,
      id,
      originalTitle,
    } = await terminator();

    // redis.set(
    //   prompt,
    //   JSON.stringify({
    //     subTitle,
    //     prevUrl,
    //     nextUrl,
    //     originalTextArray,
    //     translatedTextArray,
    //     pinyinTextArray,
    //     id,
    //     originalTitle,
    //   }),
    //   { ex: 360000 }
    // );

    // const rawTitle = originalTextArray[0]

    return NextResponse.json({
      subTitle,
      nextUrl,
      prevUrl,
      originalTextArray,
      translatedTextArray,
      pinyinTextArray,
      id,
      originalTitle,
    });

    // }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      subTitle: "",
      nextUrl: "",
      prevUrl: "",
      originalTextArray: [""],
      translatedTextArray: [""],
      pinyinTextArray: [""],
      id: "",
      originalTitle: "",
    });
  }
}
