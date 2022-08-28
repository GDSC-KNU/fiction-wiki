import useUser from "@libs/client/useUser";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Link from "next/link";
import useSWR from "swr";
import client from "@libs/server/client";
import {
  Fiction,
  FictionStat,
  Keyword,
  UserFictionStat,
  UserRationOnFiction,
  KeywordsOnFictions,
  Author,
} from "@prisma/client";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

interface AuthorWithFictions extends Author {
  fictions: Fiction[];
}

interface AuthorResponse {
  author: AuthorWithFictions;
}

type Props = {
  authors: Author[];
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const authorDetail: NextPage<AuthorResponse> = ({ author }) => {
  // const { user, isLoading } = useUser();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log(author);

  return (
    <section className="  w-[100vw] max-w-[1300px] min-h-[213px]">
      <div className=" bg-slate-400 mb-7 pl-6 py-4">
        <h5 className=" font-bold">작가 정보</h5>
        <div className=" ">
          {/* <img src={session?.user?.image}></img> */}
          {/* <Image src={session?.user?.image || "/"} width={64} height={64} /> */}
          <p>{`작가 - ` + author?.name}</p>
          <p>{author?.relatedName}</p>
          <p>{`국적 - ` + author?.nationality}</p>
          <p>{`SNS - ` + (author?.sns || "없음")}</p>
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className=" col-span-0 lg:col-span-1 "></div>
        <div className=" col-span-12 lg:col-span-10">
          <div className="mt-5 font-bold text-xl">작품 List</div>
          <ul className=" flex-col ">
            {author?.fictions?.map((fiction, i) => (
              <Link key={fiction.id} href={`/fictions/${fiction.id}`}>
                <li className=" relative flex h-[186px] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                  <div className=" absolute">
                    <Image
                      src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction.image}/list1`}
                      width={140}
                      height={186}
                    />
                  </div>
                  <div className=" flex-col pl-[9.4rem] pr-2 py-2 h-44">
                    <div className=" text-xs text-gray-400">
                      {fiction.genre}
                    </div>
                    <div className=" font-bold">{fiction.title}</div>
                    <div className=" text-xs">
                      {fiction.currentState || "500화 완결"}
                    </div>
                    <div className=" overflow-hidden text-xs">
                      {fiction.nationality}
                    </div>
                    <div className=" text-xs mt-2">
                      {fiction.synopsis.slice(1, 300) + "..."}{" "}
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className=" col-span-0 lg:col-span-1 "></div>
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
      fictions: true,
    },
  });

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    props: {
      author: JSON.parse(JSON.stringify(author)),
    },
  };
};

export default authorDetail;
