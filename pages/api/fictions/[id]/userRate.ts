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
      userRationOnFictions: {
        where: {
          userId: +user!.id.toString(),
        },
      },
    },
    where: {
      fictionId: +id!.toString(),
    },
  });

  //console.log(alreadyExists);

  //  let {id, fictionId, originality, verisimilitude, synopsisComposition, character, writing,value,users[],count }= alreadyExists;
  // let sum: Array<number> = [];
  let Ration;
  if (!alreadyExists) {
    Ration = await client.userFictionStat.create({
      data: {
        fiction: {
          connect: {
            id: +id!.toString(),
          },
        },
        users: {
          connect: {
            id: +user!.id.toString(),
          },
        },
        userRationOnFictions: {
          create: {
            userId: +user!.id.toString(),
            originality: +UserFictionStat[0],
            writing: +UserFictionStat[1],
            character: +UserFictionStat[2],
            verisimilitude: +UserFictionStat[3],
            synopsisComposition: +UserFictionStat[4],
            value: +UserFictionStat[5],
            comment: "",
          },
        },
        originality: +UserFictionStat[0],
        writing: +UserFictionStat[1],
        character: +UserFictionStat[2],
        verisimilitude: +UserFictionStat[3],
        synopsisComposition: +UserFictionStat[4],
        value: +UserFictionStat[5],
      },
      include: {
        _count: {
          select: {
            users: true,
          },
        },
      },
    });
  } else {
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
          userRationOnFictions: {
            update: {
              where: {
                id: alreadyExists.userRationOnFictions[0].id,
              },
              data: {
                originality: +UserFictionStat[0],
                writing: +UserFictionStat[1],
                character: +UserFictionStat[2],
                verisimilitude: +UserFictionStat[3],
                synopsisComposition: +UserFictionStat[4],
                value: +UserFictionStat[5],
              },
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
          userRationOnFictions: {
            update: {
              where: {
                id: alreadyExists.userRationOnFictions[0].id,
              },
              data: {
                originality: +UserFictionStat[0],
                writing: +UserFictionStat[1],
                character: +UserFictionStat[2],
                verisimilitude: +UserFictionStat[3],
                synopsisComposition: +UserFictionStat[4],
                value: +UserFictionStat[5],
              },
            },
          },
          originality:
            alreadyExists?.originality -
            alreadyExists.userRationOnFictions[0].originality +
            +UserFictionStat[0],
          writing:
            alreadyExists.writing -
            alreadyExists.userRationOnFictions[0].writing +
            +UserFictionStat[1],
          character:
            alreadyExists.character -
            alreadyExists.userRationOnFictions[0].character +
            +UserFictionStat[2],
          verisimilitude:
            alreadyExists.verisimilitude -
            alreadyExists.userRationOnFictions[0].verisimilitude +
            +UserFictionStat[3],
          synopsisComposition:
            alreadyExists.synopsisComposition -
            alreadyExists.userRationOnFictions[0].synopsisComposition +
            +UserFictionStat[4],
          value:
            alreadyExists.value -
            alreadyExists.userRationOnFictions[0].value +
            +UserFictionStat[5],
        },
      });
    }
  }

  // console.log(Ration);

  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
