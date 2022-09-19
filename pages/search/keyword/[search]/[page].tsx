import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import client from "@libs/server/client";
import { Fiction } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";
import FictionList from "@components/FictionList";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pageAtom } from "pages/atoms";
import { useRouter } from "next/router";

interface IParams extends ParsedUrlQuery {
  page: string;
}

interface dataResponse {
  fictions: [Fiction];
  fictionsCount: number;
}

const SearchKeywordPage: NextPage<dataResponse> = (data) => {
  let router = useRouter();
  const [pageIndex, setPageIndex] = useRecoilState(pageAtom);

  const { search } = router.query;

  useEffect(() => {
    router.push(`/search/keyword/${search}/${pageIndex}`);
  }, [pageIndex]);

  return (
    <section className="  w-[100vw] max-w-[1300px] min-h-[213px] ">
      <div className=" bg-slate-100 mb-7 pl-6 py-4">
        <h5 className=" font-bold">키워드: {router.query.search}</h5>
      </div>
      <div className=" mx-3">
        <FictionList
          className=" "
          data={data}
          type={"fictions_list"}
          count={data.fictionsCount}
        />
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { page, search } = ctx.params as IParams;
  if (!page || !search) {
    return {
      props: {},
    };
  }

  const fictions = await client.fiction.findMany({
    take: 18,
    skip: (+page - 1) * 18,
    where: {
      keywords: {
        some: {
          keyword: {
            name: search as string,
          },
        },
      },
    },
    include: {
      _count: {
        select: {
          favs: true,
        },
      },
      author: true,
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
          keyword: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  const fictionsCount = await client.fiction.count({
    where: {
      keywords: {
        some: {
          keyword: {
            name: search as string,
          },
        },
      },
    },
  });

  return {
    props: {
      fictions: JSON.parse(JSON.stringify(fictions)),
      fictionsCount: JSON.parse(JSON.stringify(fictionsCount)),
    },
  };
};

export default SearchKeywordPage;
