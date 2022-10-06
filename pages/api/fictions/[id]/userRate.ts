import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { getSession } from "next-auth/react";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  //평균점수 - 소수점2자리 숫자로 변환
  const fixFloat = function (n: number) {
    let m = Number((Math.abs(n) * 100).toPrecision(15));
    return Math.round(m) / (100 * Math.sign(n));
  };

  const {
    query: { id },
    // session: { user },
    body: { UserFictionStat },
  } = req;
  const session = await getSession({ req });
  if (!session) {
    res.json({ ok: false });
    return;
  } else {
    let Ration;
    // console.log(session?.user?.email);
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
            userId: session?.user?.id,
          },
        },
      },
      where: {
        fictionId: +id!.toString(),
      },
    });

    // console.log(alreadyExists);
    // console.log(UserFictionStat);

    /// DB에 userFictionStat이 존재하지 않는 최초의 유저 제출.
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
              id: session?.user!.id,
            },
          },
          userRationOnFictions: {
            create: {
              userId: session!.user!.id,
              originality: +UserFictionStat[0],
              writing: +UserFictionStat[1],
              character: +UserFictionStat[2],
              verisimilitude: +UserFictionStat[3],
              synopsisComposition: +UserFictionStat[4],
              value: +UserFictionStat[5],
              // comment: comment.toString() || "",
            },
          },
          originality: +UserFictionStat[0],
          writing: +UserFictionStat[1],
          character: +UserFictionStat[2],
          verisimilitude: +UserFictionStat[3],
          synopsisComposition: +UserFictionStat[4],
          value: +UserFictionStat[5],
          total: fixFloat(
            (+UserFictionStat[0] +
              +UserFictionStat[1] +
              +UserFictionStat[2] +
              +UserFictionStat[3] +
              +UserFictionStat[4] +
              +UserFictionStat[5]) /
              6
          ),
        },
        include: {
          _count: {
            select: {
              users: true,
            },
          },
        },
      });

      // commentation = await client.comment.create({
      //   data: {
      //     comment: comment,
      //     createdBy: {
      //       connect: {
      //         id: session?.user?.id,
      //       },
      //     },
      //     fiction: {
      //       connect: {
      //         id: +id!.toString(),
      //       },
      //     },
      //   },
      // });
    } else {
      //유저의 id로 userRationOnFiction entity 탐색.
      const userRated = await client.userRationOnFiction.findFirst({
        where: {
          userId: session?.user?.id,
          userFictionStat: {
            fiction: {
              id: +id!.toString(),
            },
          },
        },
      });
      // if (userRated) console.log(userRated);
      // 유저가 처음 제출하는 경우
      if (!userRated) {
        // console.log(alreadyExists.userRationOnFictions);
        Ration = await client.userFictionStat.update({
          where: {
            id: alreadyExists.id,
          },
          data: {
            users: {
              connect: {
                id: session?.user?.id,
              },
            },
            userRationOnFictions: {
              create: {
                userId: session!.user!.id,
                originality: +UserFictionStat[0],
                writing: +UserFictionStat[1],
                character: +UserFictionStat[2],
                verisimilitude: +UserFictionStat[3],
                synopsisComposition: +UserFictionStat[4],
                value: +UserFictionStat[5],
                // comment: comment.toString() || "",
              },
              // update: {
              //   where: {
              //     id: alreadyExists.userRationOnFictions[0].id,
              //   },
              //   data: {
              //     originality: +UserFictionStat[0],
              //     writing: +UserFictionStat[1],
              //     character: +UserFictionStat[2],
              //     verisimilitude: +UserFictionStat[3],
              //     synopsisComposition: +UserFictionStat[4],
              //     value: +UserFictionStat[5],
              //   },
              // },
            },
            originality: fixFloat(
              (+alreadyExists.originality * alreadyExists._count.users +
                +UserFictionStat[0]) /
                (+alreadyExists._count.users + 1)
            ),
            writing: fixFloat(
              (+alreadyExists.originality * alreadyExists._count.users +
                +UserFictionStat[1]) /
                (+alreadyExists._count.users + 1)
            ),
            character: fixFloat(
              (+alreadyExists.originality * alreadyExists._count.users +
                +UserFictionStat[2]) /
                (+alreadyExists._count.users + 1)
            ),
            verisimilitude: fixFloat(
              (+alreadyExists.originality * alreadyExists._count.users +
                +UserFictionStat[3]) /
                (+alreadyExists._count.users + 1)
            ),
            synopsisComposition: fixFloat(
              (+alreadyExists.originality * alreadyExists._count.users +
                +UserFictionStat[4]) /
                (+alreadyExists._count.users + 1)
            ),
            value: fixFloat(
              (+alreadyExists.originality * alreadyExists._count.users +
                +UserFictionStat[5]) /
                (+alreadyExists._count.users + 1)
            ),
            total: fixFloat(
              ((alreadyExists.total || 0) * alreadyExists._count.users +
                (+UserFictionStat[0] +
                  +UserFictionStat[1] +
                  +UserFictionStat[2] +
                  +UserFictionStat[3] +
                  +UserFictionStat[4] +
                  +UserFictionStat[5]) /
                  6) /
                (alreadyExists._count.users + 1)
            ),
          },
        });

        // commentation = await client.comment.create({
        //   data: {
        //     comment: comment,
        //     createdBy: {
        //       connect: {
        //         id: session?.user?.id,
        //       },
        //     },
        //     fiction: {
        //       connect: {
        //         id: +id!.toString(),
        //       },
        //     },
        //   },
        // });
      }
      // 유저가 중복 제출하는 경우
      else {
        res.json({ ok: false });
        return;
        // Ration = await client.userFictionStat.update({
        //   where: {
        //     id: alreadyExists.id,
        //   },
        //   data: {
        //     users: {
        //       connect: {
        //         id: session?.user?.id,
        //       },
        //     },
        //     userRationOnFictions: {
        //       update: {
        //         where: {
        //           id: alreadyExists.userRationOnFictions[0].id,
        //         },
        //         data: {
        //           originality: +UserFictionStat[0],
        //           writing: +UserFictionStat[1],
        //           character: +UserFictionStat[2],
        //           verisimilitude: +UserFictionStat[3],
        //           synopsisComposition: +UserFictionStat[4],
        //           value: +UserFictionStat[5],
        //         },
        //       },
        //     },
        //     originality:
        //       alreadyExists?.originality -
        //       alreadyExists.userRationOnFictions[0].originality +
        //       +UserFictionStat[0],
        //     writing:
        //       alreadyExists.writing -
        //       alreadyExists.userRationOnFictions[0].writing +
        //       +UserFictionStat[1],
        //     character:
        //       alreadyExists.character -
        //       alreadyExists.userRationOnFictions[0].character +
        //       +UserFictionStat[2],
        //     verisimilitude:
        //       alreadyExists.verisimilitude -
        //       alreadyExists.userRationOnFictions[0].verisimilitude +
        //       +UserFictionStat[3],
        //     synopsisComposition:
        //       alreadyExists.synopsisComposition -
        //       alreadyExists.userRationOnFictions[0].synopsisComposition +
        //       +UserFictionStat[4],
        //     value:
        //       alreadyExists.value -
        //       alreadyExists.userRationOnFictions[0].value +
        //       +UserFictionStat[5],
        //   },
        // });
      }
    }

    // console.log(Ration);

    res.json({ ok: true, Ration });
  }
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
