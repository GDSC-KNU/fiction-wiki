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
  let commentation;

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
            comment: {
              create: {
                comment: comment,
                createdBy: {
                  connect: {
                    id: session?.user?.id,
                  },
                },
                fiction: {
                  connect: {
                    id: +id!.toString(),
                  },
                },
              },
            },
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
    // 유저가 처음 제출하는 경우
    if (!userRated) {
      Ration = await client.userFictionStat.update({
        where: {
          id: alreadyExists.id,
        },
        data: {
          userRationOnFictions: {
            create: {
              userId: session?.user?.id || "1",
              originality: +UserFictionStat[0],
              writing: +UserFictionStat[1],
              character: +UserFictionStat[2],
              verisimilitude: +UserFictionStat[3],
              synopsisComposition: +UserFictionStat[4],
              value: +UserFictionStat[5],
              comment: {
                create: {
                  comment: comment,
                  createdBy: {
                    connect: {
                      id: session?.user?.id,
                    },
                  },
                  fiction: {
                    connect: {
                      id: +id!.toString(),
                    },
                  },
                },
              },
            },
          },
          originality: fixFloat(
            (+alreadyExists.originality *
              alreadyExists._count.userRationOnFictions +
              +UserFictionStat[0]) /
              (+alreadyExists._count.userRationOnFictions + 1)
          ),
          writing: fixFloat(
            (+alreadyExists.originality *
              alreadyExists._count.userRationOnFictions +
              +UserFictionStat[1]) /
              (+alreadyExists._count.userRationOnFictions + 1)
          ),
          character: fixFloat(
            (+alreadyExists.originality *
              alreadyExists._count.userRationOnFictions +
              +UserFictionStat[2]) /
              (+alreadyExists._count.userRationOnFictions + 1)
          ),
          verisimilitude: fixFloat(
            (+alreadyExists.originality *
              alreadyExists._count.userRationOnFictions +
              +UserFictionStat[3]) /
              (+alreadyExists._count.userRationOnFictions + 1)
          ),
          synopsisComposition: fixFloat(
            (+alreadyExists.originality *
              alreadyExists._count.userRationOnFictions +
              +UserFictionStat[4]) /
              (+alreadyExists._count.userRationOnFictions + 1)
          ),
          value: fixFloat(
            (+alreadyExists.originality *
              alreadyExists._count.userRationOnFictions +
              +UserFictionStat[5]) /
              (+alreadyExists._count.userRationOnFictions + 1)
          ),
          total: fixFloat(
            ((alreadyExists.total || 0) *
              alreadyExists._count.userRationOnFictions +
              (+UserFictionStat[0] +
                +UserFictionStat[1] +
                +UserFictionStat[2] +
                +UserFictionStat[3] +
                +UserFictionStat[4] +
                +UserFictionStat[5]) /
                6) /
              (alreadyExists._count.userRationOnFictions + 1)
          ),
        },
      });
    }
    // 유저가 중복 제출하는 경우
    else {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  }

  //  On-Demand revalidation
  // await revalidator(id, "comment");

  // revalidatePath("/fictions/[id]");
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
