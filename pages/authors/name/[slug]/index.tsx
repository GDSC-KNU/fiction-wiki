import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import client from "@libs/server/client";
import type { Fiction, Author } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";
import FictionList from "src/components/fictionList";
import HeadMeta from "src/components/headMeata";
import Image from "next/image";
import { NextSeo } from "next-seo";

interface AuthorWithFictions extends Author {
  fictions: Fiction[];
}

interface AuthorResponse {
  author: AuthorWithFictions;
}

// type Props = {
//   authors: Author[];
// };

// interface Params extends ParsedUrlQuery {
//   slug: string;
// }

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const AuthorDetail: NextPage<AuthorResponse> = ({ author }) => {
  // const { user, isLoading } = useUser();

  return (
    <div className="   mx-auto min-h-[213px] ">
      {/* <HeadMeta
        title={author?.name}
        description={author?.description}
        url={`https://fictiondbs.com/authors/name/${author?.name}`}
      /> */}
      <NextSeo
        title={author?.name}
        description={author?.description || "작가에 대한 설명입니다."}
        canonical={`https://fictiondbs.com/authors/name/${author?.name}`}
        openGraph={{
          url: `https://fictiondbs.com/authors/name/${author?.name}`,
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
            <h5 className=" mb-2 text-xl font-bold">{author?.name}</h5>
            <p>{`${author?.rawName}${
              author?.relatedName === null ? "" : `, ` + author?.relatedName
            }`}</p>
            <p>{`국적 - ` + author?.nationality}</p>
            <p>{`SNS - ` + (author?.sns || "업데이트 예정")}</p>
          </div>
        </div>
        <div className=" mb-4 ml-3 pb-2 text-sm"> {author?.description}</div>
      </div>
      <div className=" mb-4  grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-12">
          <div className="mt-5 text-xl font-bold">작품 목록</div>
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
