const siteConfig = {
  name: "FDBS",
  // description:
  //   "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "https://fictiondbs.com",
  // ogImage: "https://tx.shadcn.com/og.jpg",
  // links: {
  //   twitter: "https://twitter.com/shadcn",
  // //   github: "https://github.com/shadcn/taxonomy",
  // },
  revalidateFrequency: {
    authors: 60 * 60 * 24 * 7,
  },
};

export default siteConfig;
