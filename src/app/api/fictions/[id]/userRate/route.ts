import client from "@libs/server/client";
import axios from "axios";
import { getToken } from "next-auth/jwt";
// import revalidator from "@libs/server/revalidator";

import { revalidatePath } from "next/cache";

import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

const fixFloat = function (n: number) {
  let m = Number((Math.abs(n) * 100).toPrecision(15));
  return Math.round(m) / (100 * Math.sign(n));
};

async function getUserToken(req: NextRequest) {
  const token = await getToken({ req, secret });
  if (!token) {
    throw new Error("Unauthorized");
  }
  return token;
}

export async function POST(req: NextRequest, { params }: any) {
  const { id } = params;
  if (!id) return NextResponse.json({ ok: false }, { status: 400 });

  const { UserFictionStat, comment } = await req.json();

  const token = await getUserToken(req);
  const session = token;

  let Ration;

  const alreadyExists = await client.userFictionStat.findFirst({
    include: {
      _count: {
        select: {
          userRationOnFictions: true,
        },
      },
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

  /// DB에 userFictionStat이 존재하지 않는 최초의 유저 제출.
  if (!alreadyExists) {
    Ration = await client.userFictionStat.create({
      data: {
        fiction: {
          connect: {
            id: +id!.toString(),
          },
        },
        // users: {
        //   connect: {
        //     id: session?.user!.id,
        //   },
        // },
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
            // comment: {
            //   create: {
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
            // },
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
            userRationOnFictions: true,
          },
        },
      },
    });
  } else {
    // 유저의 id로 userRationOnFiction entity 탐색.
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

    const prevUserRatings = userRated
      ? [
          userRated.originality,
          userRated.writing,
          userRated.character,
          userRated.verisimilitude,
          userRated.synopsisComposition,
          userRated.value,
        ]
      : new Array(6).fill(0);

    const currentRatings = [
      alreadyExists.originality,
      alreadyExists.writing,
      alreadyExists.character,
      alreadyExists.verisimilitude,
      alreadyExists.synopsisComposition,
      alreadyExists.value,
    ];

    const updatedRatings = UserFictionStat.map(
      (newRating: string, index: number) => {
        const total =
          alreadyExists._count.userRationOnFictions * currentRatings[index] -
          prevUserRatings[index] +
          +newRating;

        const updatedCount = !userRated
          ? +alreadyExists._count.userRationOnFictions + 1
          : userRated?.originality === null
          ? +alreadyExists._count.userRationOnFictions + 1
          : +alreadyExists._count.userRationOnFictions;

        return fixFloat(total / updatedCount);
      }
    );

    // 유저가 처음 제출하는 경우
    if (!userRated) {
      // userFictionStat 업데이트
      Ration = await client.userFictionStat.update({
        where: {
          id: alreadyExists.id,
        },
        data: {
          userRationOnFictions: {
            create: {
              userId: session.user.id,
              originality: +UserFictionStat[0],
              writing: +UserFictionStat[1],
              character: +UserFictionStat[2],
              verisimilitude: +UserFictionStat[3],
              synopsisComposition: +UserFictionStat[4],
              value: +UserFictionStat[5],
            },
          },
          originality: updatedRatings[0],
          writing: updatedRatings[1],
          character: updatedRatings[2],
          verisimilitude: updatedRatings[3],
          synopsisComposition: updatedRatings[4],
          value: updatedRatings[5],
          total: fixFloat(
            updatedRatings.reduce((acc: number, cur: number) => acc + cur, 0) /
              updatedRatings.length
          ),
        },
      });

      // }
      // 유저가 중복 제출하는 경우
      // else {
      //   return NextResponse.json({ ok: false }, { status: 400 });
    } else {
      Ration = await client.userFictionStat.update({
        where: {
          id: alreadyExists.id,
        },
        data: {
          userRationOnFictions: {
            update: {
              where: { id: userRated.id },
              data: {
                userId: session.user.id,
                originality: +UserFictionStat[0],
                writing: +UserFictionStat[1],
                character: +UserFictionStat[2],
                verisimilitude: +UserFictionStat[3],
                synopsisComposition: +UserFictionStat[4],
                value: +UserFictionStat[5],
              },
            },
          },
          originality: updatedRatings[0],
          writing: updatedRatings[1],
          character: updatedRatings[2],
          verisimilitude: updatedRatings[3],
          synopsisComposition: updatedRatings[4],
          value: updatedRatings[5],
          total: fixFloat(
            updatedRatings.reduce((acc: number, cur: number) => acc + cur, 0) /
              updatedRatings.length
          ),
        },
      });
    }
  }

  //  On-Demand revalidation
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/revalidate?secret=${process.env.REVALIDATION_TOKEN}&tag=fiction`,
      {
        id: +id!.toString(),
      }
    );
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true, Ration });
}
