import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
// import revalidator from "@libs/server/revalidator";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { Prisma } from "@prisma/client";

import deepDiff from "deep-diff";
import { diffChars } from "diff";

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
  const prevFictionString = JSON.stringify(prevFiction);
  const updatedFictionString = JSON.stringify(updatedFiction);

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

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let {
    query: { id },
    // session: { user },
  } = req;

  if (req.method === "GET") {
    const fiction = await client.fiction.findUnique({
      where: {
        id: +id!.toString(),
      },
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
        comments: {
          include: {
            createdBy: {
              select: {
                nickname: true,
              },
            },
          },
        },
        author: true,
      },
    });

    const mbtis = await client.$queryRaw`
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
    WHERE UserFictionStat.fictionId = ${+id!.toString()}
    GROUP by User.mbti
    `;

    // const mbtis = JSON.stringify(groupedByMBTI);

    return res.json({
      ok: true,
      fiction,
      // similarFictions,
      // isLiked,
      mbtis,
    });
  }
  if (req.method === "PUT") {
    const session = await getServerSession(req, res, authOptions);

    let {
      query: { id, Rid },
      body,
    } = req;

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

    await createHistoryLog(prevFiction, updatedFiction, +id!, session.user.id);

    // Revalidate (if necessary)
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/revalidate?secret=${process.env.REVALIDATION_TOKEN}`,
        {
          id: +id!.toString(),
          type: "edit",
        }
      );
    } catch (error) {
      console.log(error);
    }

    res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    handler,
  })
);

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
