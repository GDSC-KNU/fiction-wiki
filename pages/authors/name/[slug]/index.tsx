import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import client from "@libs/server/client";
import type { Fiction, Author } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";
import FictionList from "@components/fictionList";
import HeadMeta from "@components/headMeata";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { URL } from "@constants/url";

interface AuthorWithFictions extends Author {
  fictions: Fiction[];
}

interface AuthorResponse {
  author: AuthorWithFictions;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const AuthorDetail: NextPage<AuthorResponse> = ({ author }) => {
  // const { user, isLoading } = useUser();

  return (
    <div className=" mx-auto min-h-[213px] px-2">
      {/* <HeadMeta
        title={author?.name}
        description={author?.description}
        url={`https://fictiondbs.com${URL.AUTHOR_DETAIL}/${author?.name}`}
      /> */}
      <NextSeo
        title={author?.name}
        description={
          author?.description ||
          `작가 ${author?.name}의 페이지 입니다. 작품 목록, SNS 피드, 최신 소식을 확인하세요.`
        }
        canonical={`${URL.DOMAIN}${URL.AUTHOR_DETAIL}/${author?.name}`}
        openGraph={{
          url: `${URL.DOMAIN}${URL.AUTHOR_DETAIL}/${author?.name}`,
        }}
      />
      <div className=" mb-4 border bg-[#F5F5F5]">
        <div className=" flex ">
          <Image
            className=" rounded-full py-5 pl-3 pr-5"
            src="/anoynymous_user.png"
            width={142}
            height={160}
            alt={author.name}
          />
          <div className=" flex flex-col justify-center">
            <h1 className=" mb-2 text-xl font-bold">{author?.name}</h1>
            <p>{`${author?.rawName}${
              author?.relatedName === null ? "" : `, ` + author?.relatedName
            }`}</p>
            <div className=" flex">
              <dt>국적</dt>
              <dd className=" ml-3">{author?.nationality}</dd>
            </div>
            <div className=" flex">
              <dt>SNS</dt>
              <dd className=" ml-3">{author?.sns || "업데이트 예정"}</dd>
            </div>
          </div>
        </div>
        <div className=" mb-4 ml-3 pb-2 text-sm"> {author?.description}</div>
      </div>
      <div className=" mb-4  grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-12">
          <div className=" mt-5"></div>
          <h2 className=" text-xl font-bold">작품 목록</h2>
          <FictionList
            data={{ fictions: author?.fictions }}
            type={"fictions_list"}
            pagination={false}
          />
        </div>
      </div>
      <div className=" mb-4  grid grid-cols-12 bg-white">
        <div className=" col-span-12 lg:col-span-12">
          <div className="mt-5 text-xl font-bold">SNS</div>
        </div>
      </div>
    </div>
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
  const { slug } = ctx.params as IParams;
  if (!slug) {
    return {
      props: {},
    };
  }
  const author = await client.author.findUnique({
    where: {
      name: slug || "",
    },
    include: {
      fictions: {
        include: {
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
          author: true,
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
      },
    },
  });

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    props: {
      author: JSON.parse(JSON.stringify(author)),
    },
  };
};

export default AuthorDetail;
