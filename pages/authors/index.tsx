import { Author } from "@prisma/client";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import client from "@libs/server/client";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authorPageAtom } from "../../atoms";
import FictionList from "@components/fictionList";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface AuthorResponse {
  authors: Author[];
  authorsCount: number;
}

// interface IParams extends ParsedUrlQuery {
//   page: string;
// }

const Author: NextPage<AuthorResponse> = ({ authors, authorsCount }) => {
  const [authorPageIndex, setAuthorPageIndex] = useRecoilState(authorPageAtom);
  let router = useRouter();
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(authorPageIndex);

  useEffect(() => {
    setAuthorPageIndex(authorPageIndex);
    router.push(`/authors/${authorPageIndex}`);
  }, [authorPageIndex]);

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

// export const getStaticProps: GetStaticProps = async (
//   ctx: GetStaticPropsContext
// ) => {

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  // const { page } = ctx.params as IParams;
  // if (!page) {
  //   return {
  //     props: {},
  //   };
  // }
  // console.log(page);

  const authors = await client.author.findMany({
    take: 18,
    skip: 0,
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

// export async function getStaticProps() {
//     const authors = await client.author.findUnique({
//     where: { name: ctx.params.slug?.toString() },
//     include: {
//       fictions: true,
//     },
//   });
// }

export default Author;
