import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import client from "@libs/server/client";
import { Author } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";
import FictionList from "@components/fictionList";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { authorPageAtom } from "../../atoms";
import { useRouter } from "next/router";

// interface AuthorWithFictions extends Author {
//   fictions: Fiction[];
// }

interface AuthorResponse {
  authors: Author[];
  authorsCount: number;
}

// interface Params extends ParsedUrlQuery {
//   page: string;
// }

interface IParams extends ParsedUrlQuery {
  page: string;
}

const AuthorPage: NextPage<AuthorResponse> = ({ authors, authorsCount }) => {
  const [pageIndex, setPageIndex] = useRecoilState(authorPageAtom);
  const router = useRouter();

  useEffect(() => {
    router.push(`/authors/${pageIndex}`);
  }, [pageIndex]);

  return (
    <div className=" mt-12">
      <FictionList
        data={authors}
        type={"authors_list"}
        authorsCount={authorsCount}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { page } = ctx.params as IParams;
  if (!page) {
    return {
      props: {},
    };
  }

  const authors = await client.author.findMany({
    take: 18,
    skip: (+page - 1) * 18,
    include: {
      fictions: true,
    },
  });

  const authorsCount = await client.author.count({});

  return {
    props: {
      authors: JSON.parse(JSON.stringify(authors)),
      authorsCount: JSON.parse(JSON.stringify(authorsCount)),
    },
  };
};

export default AuthorPage;
