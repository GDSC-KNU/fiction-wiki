import { Fiction, prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: { UserFictionStat },
  } = req;

  const alreadyExists = await client.userFictionStat.findFirst({
    include: {
      _count: {
        select: {
          users: true,
        },
      },
      users: true,
    },
    where: {
      fictionId: +id.toString(),
    },
  });

  //  let {id, fictionId, originality, verisimilitude, synopsisComposition, character, writing,value,users[],count }= alreadyExists;
  // let sum: Array<number> = [];
  let Ration;
  if (!alreadyExists) {
    Ration = await client.userFictionStat.create({
      data: {
        fiction: {
          connect: {
            id: +id.toString(),
          },
        },
        users: {
          connect: {
            id: +user!.id.toString(),
          },
        },
        originality: +UserFictionStat[0],
        writing: +UserFictionStat[1],
        character: +UserFictionStat[2],
        verisimilitude: +UserFictionStat[3],
        synopsisComposition: +UserFictionStat[4],
        value: +UserFictionStat[5],
      },
    });
    console.log(Ration);
  } else {
    // let sum: Array<number> = [];
    // let prev = [
    //   Number(alreadyExists?.originality),
    //   Number(alreadyExists?.writing),
    //   Number(alreadyExists?.character),
    //   Number(alreadyExists?.verisimilitude),
    //   Number(alreadyExists?.synopsisComposition),
    //   Number(alreadyExists?.value),
    // ];

    // UserFictionStat.map((stat: any, index: number) => {
    //   let eachSum =
    //     (prev[index] * alreadyExists!._count?.users + +stat) /
    //     (+alreadyExists!._count?.users + 1);
    //   sum.push(+eachSum.toFixed(3));
    // });

    let temp: Array<any> = [];
    alreadyExists.users.map((user) => {
      temp.push(user.id);
    });
    if (!temp?.includes(user?.id)) {
      Ration = await client.userFictionStat.update({
        where: {
          id: +alreadyExists.id.toString(),
        },
        data: {
          users: {
            connect: {
              id: +user!.id.toString(),
            },
          },
          originality: alreadyExists?.originality + +UserFictionStat[0],
          writing: alreadyExists.writing + +UserFictionStat[1],
          character: alreadyExists.character + +UserFictionStat[2],
          verisimilitude: alreadyExists.verisimilitude + +UserFictionStat[3],
          synopsisComposition:
            alreadyExists.synopsisComposition + +UserFictionStat[4],
          value: alreadyExists.value + +UserFictionStat[5],
        },
      });
    } else {
      console.log("You already rated");
    }
  }

  // console.log(userFictionStat);
  console.log(Ration);
  // console.log(UserFictionStat);
  // console.log(user);
  res.json({ ok: true, Ration });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
