import client from "@libs/server/client";

import axios from "axios";

import { getToken } from "next-auth/jwt";

import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req: NextRequest) {
  // const {
  //   query: { id, page },
  //   // session: { user },
  //   body,
  // } = req;

  const body = await req.json();
  const searchParams = req.nextUrl.searchParams;
  // const { id, page } = searchParams.get();
  const id = searchParams.get("id");
  const page = searchParams.get("page");

  const comments = await client.comment.findMany({
    take: 7,
    skip: typeof page === "string" ? (+page - 1) * 7 : 0,
    where: {
      fiction: {
        id: +id!.toString(),
      },
    },
  });

  const commentsCount = await client.comment.count({
    where: {
      fiction: {
        id: +id!.toString(),
      },
    },
  });

  return NextResponse.json({ comments, commentsCount, ok: true });
}

export async function DELETE(req: NextRequest) {
  // const body = await req.json();
  // const { id, page } = searchParams;
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  const headersList = headers();

  const xDataHeader = headersList.get("x-data");

  if (!xDataHeader || typeof xDataHeader !== "string") return;

  const { userId, commentId } = JSON.parse(xDataHeader);

  // if (!commentId) return res.json({ ok: false });

  const entity = await client.userRationOnFiction.findFirst({
    where: {
      comment: {
        id: commentId,
      },
    },
    select: {
      id: true,
    },
  });

  if (entity) {
    await client.userRationOnFiction.delete({
      where: {
        id: entity!.id,
      },
    });

    // }
    // await client.comment.delete({
    //   where: {
    //     id: +commentId,
    //   },
    // });

    // revalidation
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/revalidate?secret=${process.env.REVALIDATION_TOKEN}&tag=fiction`,
        {
          id: id,
        }
      );
    } catch (error) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  }

  return NextResponse.json({ ok: false }, { status: 400 });
}

async function getUserToken(req: NextRequest) {
  const token = await getToken({ req, secret });
  if (!token) {
    throw new Error("Unauthorized");
  }
  return token;
}

export async function POST(req: NextRequest, { params }: any) {
  const { id } = params;
  const token = await getUserToken(req);
  const session = token;
  if (!id || !session) return NextResponse.json({ ok: false }, { status: 400 });

  const { comment } = await req.json();

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
          userId: session.user.id,
        },
      },
    },
    where: {
      fictionId: +id!.toString(),
    },
  });

  // userFictionStat 존재 X(최초)
  if (!alreadyExists) {
    // 1. UseFictionStat entity 생성
    Ration = await client.userFictionStat.create({
      data: {
        fiction: {
          connect: {
            id: +id,
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
            // originality: +UserFictionStat[0],
            // writing: +UserFictionStat[1],
            // character: +UserFictionStat[2],
            // verisimilitude: +UserFictionStat[3],
            // synopsisComposition: +UserFictionStat[4],
            // value: +UserFictionStat[5],
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
                    id: +id,
                  },
                },
              },
            },
          },
        },
        originality: 0,
        writing: 0,
        character: 0,
        verisimilitude: 0,
        synopsisComposition: 0,
        value: 0,
        total: 0,
      },
      include: {
        _count: {
          select: {
            userRationOnFictions: true,
          },
        },
      },
    });
  }
  // userFictionStat 존재
  else {
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
    // 유저가 처음 제출하는 경우 (userFictionState 존재)
    if (!userRated) {
      Ration = await client.userFictionStat.update({
        where: {
          id: alreadyExists.id,
        },
        data: {
          userRationOnFictions: {
            create: {
              userId: session.user.id,
              comment: {
                create: {
                  comment: comment,
                  createdById: session.user.id,
                  fictionId: +id,
                },
              },
            },
          },
        },
      });

      // userRationOnFiction entity 생성
      // const newRation = await client.userRationOnFiction.create({
      //   data: {
      //     userFictionStat: {
      //       connect: {
      //         id: alreadyExists.id,
      //       },
      //     },
      //     comment: {
      //       create: {
      //         comment: comment,
      //         createdBy: {
      //           connect: {
      //             id: session?.user?.id,
      //           },
      //         },
      //         fiction: {
      //           connect: {
      //             id: +id,
      //           },
      //         },
      //       },
      //     },
      //     user: {
      //       connect: {
      //         id: session.user.id,
      //       },
      //     },
      //   },
      // });
    }
    // 유저가 중복 제출하는 경우
    else {
      Ration = await client.userFictionStat.update({
        where: {
          id: alreadyExists.id,
        },
        data: {
          userRationOnFictions: {
            update: {
              where: {
                id: userRated.id,
              },
              data: {
                comment: {
                  create: {
                    comment: comment,
                    createdById: session.user.id,
                    fictionId: +id,
                  },
                },
              },
            },
          },
        },
      });
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
