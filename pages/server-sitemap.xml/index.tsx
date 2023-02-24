import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";
import client from "@libs/server/client";
// const GetPost = async () => {
//   const data = await fetch("https://fictiondbs.com/fictions", {
//     method: "GET",
//   });
//   const res = await data.json();
//   return res;
// };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fictions = await client.fiction.findMany({
    where: {},
    select: {
      id: true,
    },
  });

  const authors = await client.author.findMany({
    where: {},
    select: {
      name: true,
    },
  });

  const fictionSitemaps = fictions.map(({ id }) => ({
    loc: `${process.env.SITE_URL}/fictions/${id.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const authorSitemaps = authors.map(({ name }) => ({
    loc: `${process.env.SITE_URL}/authors/name/${name.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...fictionSitemaps, ...authorSitemaps];

  // fields.unshift({
  //   loc: `${process.env.SITE_URL}`,
  //   lastmod: new Date().toISOString(),
  // });

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
