import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
// import revalidator from "@libs/server/revalidator";
import axios from "axios";

const preprocessData = (data: any) => {
  let {
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
  } = data;

  relatedTitle =
    Array.isArray(relatedTitle) && relatedTitle.length === 0
      ? undefined
      : relatedTitle.join(",");
  relatedAuthor =
    Array.isArray(relatedAuthor) && relatedAuthor.length === 0
      ? undefined
      : relatedAuthor.join(",");

  platforms = platforms.map((platform: any) => platform.value).join(",");
  mediaMix = mediaMix.map((item: any) => item.value).join(",");
  categories = categories.map((item: any) => item.value);

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

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let {
    query: { id, Rid },
  } = req;

  if (req.method === "GET") {
    const fiction = await client.fiction.findUnique({
      where: {
        id: +id!.toString(),
      },
    });

    const history = await client.fictionHistory.findUnique({
      where: {
        id: +Rid!.toString(),
      },
      include: {
        editedBy: {
          select: {
            image: true,
            email: true,
            nickname: true,
          },
        },
      },
    });

    return res.json({
      ok: true,
      fiction,
      history,
    });
  } else if (req.method === "PUT") {
    try {
      // Find the specified history revision
      const responseData = await client.fictionHistory.findUnique({
        where: {
          id: +Rid!.toString(),
        },
      });

      if (!responseData) {
        return res.status(404).json({ ok: false, error: "Revision not found" });
      }

      const history = responseData?.data;

      const {
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
        status: [
          originality,
          writing,
          character,
          verisimilitude,
          synopsisComposition,
          value,
        ],
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
      } = preprocessData(history);

      // Update the fiction with the data from the specified history revision
      await client.fiction.update({
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
          startDate: new Date(date[0]),
          endDate: new Date(date[1]),
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

      return res.json({ ok: true, message: "Fiction reverted successfully" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ ok: false, error: "Failed to revert fiction" });
    }
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    handler,
  })
);
