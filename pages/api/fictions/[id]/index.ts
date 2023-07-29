import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
// import revalidator from "@libs/server/revalidator";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let {
    query: { id },
    // session: { user },
  } = req;

  // const session = await getSession({ req });

  // const fiction = await client.fiction.findUnique({
  //   where: {
  //     id: +id!.toString(),
  //   },
  //   include: {
  //     fictionStat: true,
  //     userFictionStat: {
  //       include: {
  //         _count: {
  //           select: {
  //             userRationOnFictions: true,
  //           },
  //         },
  //       },
  //     },
  //     keywords: {
  //       include: {
  //         keyword: {
  //           select: {
  //             name: true,
  //             isOfHeroine: true,
  //             isOfMC: true,
  //             isOfCons: true,
  //           },
  //         },
  //       },
  //     },
  //     categories: {
  //       include: {
  //         category: true,
  //       },
  //     },
  //     author: true,
  //   },
  // });

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
    // const arr: any[] = [];
    // fiction?.keywords.map((item) => arr.push(item.keyword?.name));
    // const keywordSame = arr.map((word) => ({
    //   keywords: {
    //     some: {
    //       keyword: {
    //         name: {
    //           equals: word,
    //         },
    //       },
    //     },
    //   },
    // }));

    // const arr2: any[] = [];
    // const similarFictions = await client.fiction.findMany({
    //   where: {
    //     OR: keywordSame,
    //     AND: {
    //       id: {
    //         not: fiction?.id,
    //       },
    //     },
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //   },
    // });

    // similarFictions.map((item) => arr2.push([item.id, item.title]));

    // const isLiked = Boolean(
    //   await client.fav.findFirst({
    //     where: {
    //       fictionId: fiction?.id,
    //       userId: session?.user?.id,
    //     },
    //     select: {
    //       id: true,
    //     },
    //   })
    // );
    // const isLiked = false;

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
      query: { id },
      body: {
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
      },
    } = req;

    // 전처리
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
          where: {
            name: item,
          },
          create: {
            name: item,
          },
        },
      },
    }));

    keywords = keywords?.filter((item: any) => item !== "");
    const KeywordMany =
      (keywords &&
        keywords.map((item: string) => ({
          keyword: {
            connectOrCreate: {
              where: {
                name: item,
              },
              create: {
                name: item,
              },
            },
          },
        }))) ||
      [];

    mcKeywords = mcKeywords?.filter((item: any) => item !== "");
    const mcKeywordMany =
      (mcKeywords &&
        mcKeywords.map((item: string) => ({
          keyword: {
            connectOrCreate: {
              where: {
                name: item,
              },
              create: {
                name: item,
                isOfMC: true,
              },
            },
          },
        }))) ||
      [];

    subKeywords = subKeywords?.filter((item: any) => item !== "");
    const subKeywordMany =
      (subKeywords &&
        subKeywords.map((item: string) => ({
          keyword: {
            connectOrCreate: {
              where: {
                name: item,
              },
              create: {
                name: item,
                isOfHeroine: true,
              },
            },
          },
        }))) ||
      [];

    consKeywords = consKeywords?.filter((item: any) => item !== "");
    const consKeywordMany =
      (consKeywords &&
        consKeywords.map((item: string) => ({
          keyword: {
            connectOrCreate: {
              where: {
                name: item,
              },
              create: {
                name: item,
                isOfCons: true,
              },
            },
          },
        }))) ||
      [];

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
        // categories: {
        //   deleteMany: {
        //     fictionId: +id!.toString(),
        //   },
        //   create: {
        //     category: {
        //       connectOrCreate: {
        //         where: {
        //           name: genre,
        //         },
        //         create: {
        //           name: genre,
        //         },
        //       },
        //     },
        //   },
        // },
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
        // fictionStat: {
        //   update: {
        //     originality: +originality,
        //     writing: +writing,
        //     character: +character,
        //     verisimilitude: +verisimilitude,
        //     synopsisComposition: +synopsisComposition,
        //     value: +value,
        //   },
        // },
      },
    });

    // history 생성

    const latestFictionHistory = await client.fictionHistory.findFirst({
      where: {
        fictionId: +id!.toString(),
      },
      orderBy: { updatedAt: "desc" },
    });

    // console.log(latestFictionHistory?.data);
    // console.log(" ");
    // console.log(fiction);
    if (
      JSON.stringify(latestFictionHistory?.data) !== JSON.stringify(fiction)
    ) {
      await client.fictionHistory.create({
        data: {
          fictionId: fiction.id,
          data: fiction,
          editedById: session.user.id,
        },
      });
    }

    //  On-Demand revalidation
    // revalidator(id, "edit");
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

    res.json({ ok: true, fiction });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    handler,
  })
);
