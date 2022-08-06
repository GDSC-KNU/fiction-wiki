import { Fiction } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { getSession } from "next-auth/react";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;
  const session = await getSession({ req });
  // console.log(session?.user?.id);
  const fiction = await client.fiction.findUnique({
    where: {
      id: +id!.toString(),
    },
    include: {
      fictionStat: true,
      userFictionStat: {
        include: {
          _count: {
            select: {
              users: true,
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
            },
          },
        },
      },
    },
  });

  const arr: any[] = [];
  fiction?.keywords.map((item) => arr.push(item.keyword?.name));
  const keywordSame = arr.map((word) => ({
    keywords: {
      some: {
        keyword: {
          name: {
            equals: word,
          },
        },
      },
    },
  }));

  const arr2: any[] = [];
  const similarFictions = await client.fiction.findMany({
    where: {
      OR: keywordSame,
      AND: {
        id: {
          not: fiction?.id,
        },
      },
    },
  });

  similarFictions.map((item) => arr2.push([item.id, item.title]));
  //   console.log(arr2);

  // console.log(similarFictions);
  const isLiked = Boolean(
    await client.fav.findFirst({
      where: {
        fictionId: fiction?.id,
        userId: session?.user?.id,
      },
      select: {
        id: true,
      },
    })
  );

  const ration = await client.userFictionStat.findFirst({
    where: {
      fictionId: fiction?.id,
    },
    select: {
      originality: true,
      writing: true,
      character: true,
      verisimilitude: true,
      synopsisComposition: true,
      value: true,
    },
  });

  const userRation = await client.userRationOnFiction.findFirst({
    where: {
      userId: session?.user?.id,
    },
  });

  res.json({ ok: true, fiction, isLiked, ration, userRation, similarFictions });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
