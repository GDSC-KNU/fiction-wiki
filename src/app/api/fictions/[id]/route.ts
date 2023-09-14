import client from "@libs/server/client";

import axios from "axios";

import { Prisma } from "@prisma/client";

import deepDiff from "deep-diff";
import { diffChars } from "diff";
import { NextRequest, NextResponse } from "next/server";

import { getToken, decode } from "next-auth/jwt";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import remarkToc from "remark-toc";

const secret = process.env.NEXTAUTH_SECRET;

/// PUT
const preprocessData = (data: any, isRevert: boolean) => {
  let {
    title,
    originalTitle,
    relatedTitle,
    author,
    originalAuthor,
    relatedAuthor,
    nationality,
    genre,
    startDate,
    endDate,
    date = [],
    categories,
    currentState,
    status,
    synopsis,
    characters,
    keywords,
    mcKeywords,
    subKeywords,
    consKeywords,
    original,
    platforms,
    image,
    volume,
    type,
    mediaMix,
    isTranslated,
    introduction,
    setup,
    nickname,
  } = data;

  function handleInput(input: Array<string> | string) {
    if (Array.isArray(input)) {
      return input.length === 0 ? undefined : input.join(",");
    } else if (typeof input === "string") {
      return input;
    } else {
      return undefined;
    }
  }

  relatedTitle = handleInput(relatedTitle);
  relatedAuthor = handleInput(relatedAuthor);

  if (isRevert) {
    // 문서 복구 편집
    categories = categories.map((item: any) => item.category.name);
    date[0] = new Date(startDate);
    date[1] = new Date(endDate);
    originalAuthor = author.rawName;
    author = author.name;
  } else {
    // 문서 일반 편집
    categories = categories.map((item: any) => item.value);
    date[0] = new Date(date[0]);
    date[1] = new Date(date[1]);
    platforms = platforms
      .map((item: any) => item.value)
      .filter((item: string) => item !== "")
      .join(",");
    mediaMix = mediaMix
      .map((item: any) => item.value)
      .filter((item: string) => item !== "")
      .join(",");
  }

  const categoriesMany = categories.map((item: string) => ({
    category: {
      connectOrCreate: {
        where: { name: item },
        create: { name: item },
      },
    },
  }));

  const processKeywords = (
    keywordsArray: any[],
    isOfMC = false,
    isOfHeroine = false,
    isOfCons = false
  ) => {
    if (isRevert) {
      keywordsArray = (
        keywordsArray?.filter((item: any) => item !== "") || []
      ).map((item: any) => item.keyword.name);
    }

    return (keywordsArray?.filter((item: any) => item !== "") || []).map(
      (item: string) => ({
        keyword: {
          connectOrCreate: {
            where: { name: item },
            create: {
              name: item,
              isOfMC,
              isOfHeroine,
              isOfCons,
            },
          },
        },
      })
    );
  };

  const KeywordMany = processKeywords(keywords);
  const mcKeywordMany = processKeywords(mcKeywords, true);
  const subKeywordMany = processKeywords(subKeywords, false, true);
  const consKeywordMany = processKeywords(consKeywords, false, false, true);

  return {
    title,
    originalTitle,
    relatedTitle,
    author,
    originalAuthor,
    relatedAuthor,
    nationality,
    genre,
    date,
    categories,
    currentState,
    status,
    synopsis,
    characters,
    keywords,
    mcKeywords,
    subKeywords,
    consKeywords,
    original,
    platforms,
    image,
    volume,
    type,
    mediaMix,
    isTranslated,
    introduction,
    setup,
    nickname,
    categoriesMany,
    KeywordMany,
    mcKeywordMany,
    subKeywordMany,
    consKeywordMany,
  };
};

const createHistoryLog = async (
  prevFiction: any,
  updatedFiction: any,
  fictionId: number,
  userId: number
) => {
  const totalCharactersChanged = countCharactersChanged(
    prevFiction,
    updatedFiction
  );
  const latestFictionHistory = await client.fictionHistory.findFirst({
    where: { fictionId },
    orderBy: { updatedAt: "desc" },
  });

  if (
    JSON.stringify(latestFictionHistory?.data) !==
    JSON.stringify(updatedFiction)
  ) {
    const differences = deepDiff(prevFiction, updatedFiction);
    const jsonCompatibleLog = toJSONCompatible(differences);

    await client.fictionHistory.create({
      data: {
        fictionId,
        data: toJSONCompatible(prevFiction) as Prisma.JsonObject,
        log: {
          changeLog: jsonCompatibleLog,
          charactersChanged: totalCharactersChanged,
        },
        editedById: userId.toString(),
      },
    });
  }
};

function countCharactersChanged(prevFiction: any, updatedFiction: any): number {
  const prevFictionString = prevFiction;
  const updatedFictionString = updatedFiction;

  const characterDifferences = diffChars(
    prevFictionString,
    updatedFictionString
  );

  let charsAdded = 0;
  let charsRemoved = 0;

  characterDifferences.forEach((part) => {
    if (part.added) {
      charsAdded += part.value.length;
    }
    if (part.removed) {
      charsRemoved += part.value.length;
    }
  });

  return charsAdded - +charsRemoved;
}

//// GET
async function getFiction(id: number) {
  return await client.fiction.findUnique({
    where: { id },
    include: {
      fictionStat: true,
      userFictionStat: {
        include: {
          userRationOnFictions: true,
          _count: {
            select: {
              userRationOnFictions: true,
            },
          },
        },
      },
      keywords: {
        include: {
          keyword: {
            select: {
              name: true,
              isOfHeroine: true,
              isOfMC: true,
              isOfCons: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      author: true,
      comments: {
        include: {
          createdBy: {
            select: {
              nickname: true,
            },
          },
        },
      },
    },
  });
}

async function getMBTIs(id: number) {
  return await client.$queryRaw`
  SELECT User.mbti,
  CAST(SUM(UserRationOnFiction.originality
 + UserRationOnFiction.synopsisComposition +
  UserRationOnFiction.value +
  UserRationOnFiction.writing +
  UserRationOnFiction.character +
   UserRationOnFiction.verisimilitude)
  / (COUNT(*)*6)
 AS CHAR(32)) AS avg,
  CAST(COUNT(*) AS CHAR(32)) AS cnt
 FROM UserRationOnFiction
  JOIN User ON UserRationOnFiction.userId = User.id
  JOIN UserFictionStat ON UserRationOnFiction.userFictionStatId = UserFictionStat.id
  WHERE UserFictionStat.fictionId = ${id}
   GROUP by User.mbti
 `;
}

async function getSimilarFictions(keywords: string[], fictionId: number) {
  const keywordSame = keywords.map((word) => ({
    keywords: {
      some: {
        keyword: { name: { equals: word } },
      },
    },
  }));

  return await client.fiction.findMany({
    where: {
      OR: keywordSame,
      AND: { id: { not: fictionId } },
    },
    select: { id: true, title: true },
  });
}

async function processMarkdown(markdown: string) {
  const setup = await remark()
    .use(html)
    .use(remarkToc)
    .use(remarkGfm)
    .process(markdown || "");

  return setup.value;
}

function toJSONCompatible(obj: any): any {
  if (obj instanceof Date) {
    return obj.toISOString();
  } else if (Array.isArray(obj)) {
    return obj.map(toJSONCompatible);
  } else if (obj && typeof obj === "object") {
    const newObj: { [key: string]: any } = {};
    for (const key in obj) {
      newObj[key] = toJSONCompatible(obj[key]);
    }
    return newObj;
  } else {
    return obj;
  }
}

////
export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  if (!id) return NextResponse.json({ ok: false }, { status: 502 });

  const numId = Number(id);

  // Fetch all data
  let fiction = (await getFiction(numId)) as any;
  fiction.startDate = fiction?.startDate?.toISOString() || "";
  fiction.endDate = fiction?.endDate?.toISOString() || "";
  const mbtis = await getMBTIs(numId);

  const mdHtml = await processMarkdown(fiction?.setup || "");

  const keywordNames = ((fiction as any)?.keywords || []).map(
    (item: any) => item?.keyword?.name
  );
  const similarFictions = await getSimilarFictions(keywordNames, numId);

  return NextResponse.json({
    ok: true,
    fiction: JSON.parse(JSON.stringify(fiction)),
    similarFictions: JSON.parse(JSON.stringify(similarFictions)),
    mbtis: JSON.parse(JSON.stringify(mbtis)),
    setup: String(mdHtml),
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string; Rid: string } }
) {
  // const session = await getServerSession(req, res, authOptions);

  const token = await getToken({ req, secret });

  if (!token)
    return NextResponse.json(
      { ok: false, message: "please login" },
      { status: 500 }
    );

  let { body } = req;

  const { id, Rid } = params;

  const inputData = Rid
    ? (
        await client.fictionHistory.findUnique({
          where: {
            id: +Rid.toString(),
          },
        })
      )?.data
    : body;

  const isRevert = Rid ? true : false;

  // destructuting for update

  const {
    title,
    originalTitle,
    relatedTitle,
    author,
    originalAuthor,
    relatedAuthor,
    nationality,
    date,
    categories,
    currentState,
    synopsis,
    characters,
    keywords,
    mcKeywords,
    subKeywords,
    consKeywords,
    original,
    platforms,
    image,
    volume,
    type,
    mediaMix,
    isTranslated,
    introduction,
    setup,
    nickname,
    KeywordMany,
    mcKeywordMany,
    subKeywordMany,
    consKeywordMany,
    categoriesMany,
  } = preprocessData(inputData, isRevert);

  // current(previous) fiction Data
  const prevFiction = await client.fiction.findUnique({
    where: {
      id: +id!.toString(),
    },
    include: {
      keywords: {
        select: {
          keyword: {
            select: {
              name: true,
              id: true,
              isOfHeroine: true,
              isOfMC: true,
              isOfCons: true,
            },
          },
        },
      },
      categories: {
        select: {
          category: true,
        },
      },
      author: true,
    },
  });

  // updating fiction
  const fiction = await client.fiction.update({
    where: {
      id: +id!.toString(),
    },
    data: {
      title,
      originalTitle,
      relatedTitle,
      author: {
        connectOrCreate: {
          where: {
            name: author,
          },
          create: {
            name: author?.toString(),
            relatedName: relatedAuthor?.toString(),
            rawName: originalAuthor?.toString(),
          },
        },
      },
      relatedAuthor,
      nationality,
      startDate: date[0],
      endDate: date[1],
      original,
      platforms,
      image,
      synopsis,
      characters,
      currentState,
      volume: +volume?.toString(),
      type,
      isTranslated,
      introduction,
      mediaMix,
      setup,
      categories: {
        deleteMany: {
          fictionId: +id!.toString(),
        },
        create: [...categoriesMany],
      },
      keywords: {
        deleteMany: {
          fictionId: +id!.toString(),
        },
        create: [
          ...subKeywordMany,
          ...mcKeywordMany,
          ...KeywordMany,
          ...consKeywordMany,
        ],
      },
    },
  });

  // updated fiction Data
  const updatedFiction = await client.fiction.findUnique({
    where: {
      id: +id!.toString(),
    },
    include: {
      keywords: {
        select: {
          keyword: {
            select: {
              name: true,
              id: true,
              isOfHeroine: true,
              isOfMC: true,
              isOfCons: true,
            },
          },
        },
      },
      categories: {
        select: {
          category: true,
        },
      },
      author: true,
    },
  });

  await createHistoryLog(prevFiction, updatedFiction, +id!, +token.user.id);

  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/revalidate?secret=${process.env.REVALIDATION_TOKEN}`,
      {
        id: +id!.toString(),
        type: "edit",
      }
    );
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
