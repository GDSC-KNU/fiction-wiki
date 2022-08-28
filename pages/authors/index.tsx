import useUser from "@libs/client/useUser";
import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
} from "@prisma/client";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { title } from "process";
import useSWR from "swr";
import client from "@libs/server/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import authorDetail from "./[slug]";

interface AuthorResponse {
  authors: Author[];
}

const Author: NextPage<AuthorResponse> = ({ authors }) => {
  // const { user, isLoading } = useUser();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(authors);

  return (
    <div className=" mt-10">
      {/* <div className=" bg-white px-2 pt-2 pb-1 border-[0.5px] border-[#BBBBBB] rounded-md blue ">
        <form>
          <table className=" leading-7">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>국가</th>
                <td className=" leading-[1.8rem] flex flex-wrap"></td>
              </tr>
              <tr>
                <th>장르</th>
                <td className=" leading-[1.8rem] flex flex-wrap"></td>
              </tr>
              <tr>
                <th className=" min-w-[50px]">키워드</th>
                <td className=" leading-[1.8rem] flex flex-wrap"></td>
              </tr>
              <tr>
                <th>정렬</th>
                <td className=" leading-[1.8rem] flex flex-wrap"></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className=" w-full flex justify-end">
        <button className=" hover:border-gray-400 hover:bg-gray-200 bg-white border-[0.5px] border-[#BBBBBB] rounded-md mt-2 p-1">
          새로고침
        </button>
      </div> */}
      <div className=" flex justify-center">
        <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-1 py-2 ">
          {authors?.map((author, i) => (
            <Link key={author.id} href={`/authors/${author.name}`}>
              <li className=" relative flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                <Image
                  className=" "
                  src="/anoynymous_user.png"
                  width={142}
                  height={160}
                />
                <div className=" ml-1 absolute bottom-[17.2rem] z-10"></div>
                <div className=" flex-col px-2 pb-2">
                  <div className=" flex justify-between"></div>
                  <div className=" font-bold">{author.name}</div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const authors = await client.author.findMany({
    include: {
      fictions: true,
    },
  });

  return {
    props: {
      authors: JSON.parse(JSON.stringify(authors)),
    },
  };
}

// export async function getStaticProps() {
//     const authors = await client.author.findUnique({
//     where: { name: ctx.params.slug?.toString() },
//     include: {
//       fictions: true,
//     },
//   });
// }

export default Author;
