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

  // console.log(author);

  return (
    <div className="  max-w-[1000px] min-h-[213px] mx-auto mt-20">
      <HeadMeta
        title={author?.name}
        description={author?.description}
        url={`https://fictiondbs.com/authors/name/${author?.name}`}
      />
      <div className=" bg-white mb-4">
        <div className=" py-4 flex">
          <Image
            src="/anoynymous_user.png"
            width={142}
            height={160}
            alt={author.name}
          />
          <div className=" flex flex-col justify-center">
            <h5 className=" font-bold">{author?.name}</h5>
            <p>{author?.relatedName}</p>
            <p>{`국적 - ` + author?.nationality}</p>
            <p>{`SNS - ` + (author?.sns || "업데이트 예정")}</p>
          </div>
        </div>
        <div className=" ml-4 pb-2 text-sm"> {author?.description}</div>
      </div>
      <div className=" bg-white  grid grid-cols-12  pl-3 mb-4">
        <div className=" col-span-0 lg:col-span-1 "></div>
        <div className=" col-span-12 lg:col-span-10">
          <div className="mt-5 font-bold text-xl">작품 목록</div>
          <FictionList data={author} type={"fictions_list"} isHidden={true} />
        </div>
        <div className=" col-span-0 lg:col-span-1 "></div>
      </div>
      <div className=" bg-white  grid grid-cols-12 pl-3 mb-4">
        <div className=" col-span-0 lg:col-span-1 "></div>
        <div className=" col-span-12 lg:col-span-10">
          <div className="mt-5 font-bold text-xl">SNS</div>
        </div>
        <div className=" col-span-0 lg:col-span-1 "> </div>
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
                  users: true,
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
