import { createContext, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import useSWR from "swr";
import { remark } from "remark";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import html from "remark-html";

import UserRate from "@components/userRate";
import FictionRadarChart from "@components/fiction/fictionRadarChart";
import StarRating from "@components/starRating";
import StructuredData from "@components/structuredData";
import MbtiBarChart from "@components/mbtiBarChart";

import { FictionProvider } from "@src/context/fictionContext";

import client from "@libs/server/client";
import Comments from "@components/comments";
import useUser from "@libs/client/useUser";
import urlToString from "@helper/urlToString";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type {
  Fiction,
  FictionStat,
  Keyword,
  Author,
  Category,
} from "@prisma/client";
import Layout from "@components/layout/layout";
import FictionLayout from "@components/layout/FictionLayout";
import type { NextPageWithLayout } from "pages/_app";
import { ReactElement } from "react-markdown/lib/react-markdown";
import Keywords from "@components/fiction/keywords";
import SimilarFictions from "@components/fiction/similarFictions";
import InfoBox from "@components/fiction/InfoBox";

interface FictionDetailResponse {
  fiction: FictionWithMore;
  similarFictions: Fiction[];
  mbtis: any;
  setup: any;
}

interface FictionWithMore extends Fiction {
  keywords: [
    {
      keyword: Keyword;
    }
  ];
  fictionStat: FictionStat;
  userFictionStat: {
    originality: number;
    writing: number;
    verisimilitude: number;
    value: number;
    synopsisComposition: number;
    character: number;
    total: number;
    _count: {
      userRationOnFictions: number;
    };
  };
  author: Author;
  categories: [
    {
      category: Category;
    }
  ];
  comments: Comment[];
}

const FictionDetail: NextPageWithLayout<FictionDetailResponse> = ({
  fiction,
  similarFictions,
  mbtis,
  setup,
}) => {
  const synopsisRef = useRef<null | HTMLDivElement>(null);
  const { isAdmin } = useUser();

  return (
    <FictionProvider initialData={{ fiction, mbtis, setup, similarFictions }}>
      <div className=" grid grid-cols-10 px-2">
        <StructuredData data={fiction} />
        <NextSeo
          title={`${fiction?.title}`}
          // !! SEO는 Setup이 아닌 fiction.sysnopsis에 의존 (2023.05.30)
          description={fiction?.synopsis}
          canonical={`https://fictiondbs.com/fictions/${fiction?.id}`}
          openGraph={{
            url: `https://fictiondbs.com/fictions/${fiction?.id}`,
          }}
        />
        {isAdmin ? (
          <div className=" col-span-10 mt-2 flex justify-start">
            <Link
              className=" mx-1 rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-1 hover:cursor-pointer"
              passHref
              href={`/fictions/${fiction?.id}/edit`}
            >
              EDIT
            </Link>
            <Link
              className=" ml-1 rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-1 hover:cursor-pointer"
              passHref
              href={`/fictions/${fiction?.id}/delete`}
            >
              DELETE
            </Link>
          </div>
        ) : null}
        <div className=" col-span-10 flex-col justify-between">
          <h1 className=" pt-2 text-3xl font-semibold">{fiction?.title}</h1>
          <div className=" mb-2 flex">
            <p className="  text-sm text-gray-500">{fiction?.originalTitle}</p>
            <p className="  ml-2 text-sm text-gray-500">
              {`(${new Date(fiction?.startDate).getFullYear()})`}
            </p>
          </div>
        </div>
        <div id="main-container" className=" col-span-10 lg:col-span-7">
          <InfoBox synopsisRef={synopsisRef} />
          <div className=" mb-3 grid grid-cols-5 "></div>
          <div className="rounded-md bg-white ">
            <div className=" mb-3">
              <div ref={synopsisRef}></div>
            </div>
            <div
              className=" prose prose-slate max-w-full prose-h2:w-full prose-h2:pb-2 prose-table:text-xs prose-img:float-right prose-img:my-0"
              dangerouslySetInnerHTML={{ __html: setup }}
            ></div>
          </div>
          <div className=" row-span-3 flex flex-col">
            <Comments />
          </div>
          <div className=" mt-12">
            <SimilarFictions />
          </div>
        </div>
        <div
          id="side-container"
          className=" col-span-10 mt-3 lg:col-span-3 lg:mt-0 lg:pl-3"
        >
          <div className=" col-span-5 sm:col-span-2">
            <div className=" h-full w-full rounded-md bg-[#F4F4F4]">
              <FictionRadarChart />
              <UserRate />
            </div>
          </div>
          <Keywords />
          <MbtiBarChart />
        </div>
      </div>
    </FictionProvider>
  );
};

// per-page layout
FictionDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <FictionLayout>{page}</FictionLayout>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const fictionId = ctx?.params?.id;
  if (!fictionId) {
    return {
      props: {},
    };
  }

  const fiction = await client.fiction.findUnique({
    where: {
      id: +fictionId ?? 1,
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
        include: {
          keyword: {
            select: {
              name: true,
              isOfHeroine: true,
              isOfMC: true,
              isOfCons: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      author: true,
      comments: {
        include: {
          createdBy: {
            select: {
              nickname: true,
            },
          },
        },
      },
    },
  });

  const mdHtml = await remark()
    .use(html)
    .use(remarkToc)
    .use(remarkGfm)
    .process(fiction?.setup || "");

  const arr: any[] = [];
  fiction?.keywords.map((item) => arr.push(item?.keyword?.name));
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
    select: {
      id: true,
      title: true,
      // setup: true,
    },
  });

  similarFictions.map((item) => arr2.push([item.id, item.title]));

  const isLiked = false;

  const groupedByMBTI = await client.$queryRaw`
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
  WHERE UserFictionStat.fictionId = ${fictionId}
  GROUP by User.mbti
  `;

  const mbtis = groupedByMBTI;

  return {
    props: {
      fiction: JSON.parse(JSON.stringify(fiction)),
      similarFictions: JSON.parse(JSON.stringify(similarFictions)),
      isLiked,
      mbtis: JSON.parse(JSON.stringify(mbtis)),
      setup: mdHtml.toString(),
    },
    revalidate: 60 * 60 * 24 * 30,
  };
};

export default FictionDetail;
