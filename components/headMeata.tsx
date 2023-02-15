import Head from "next/head";

const HeadMeta = ({ title, description, url }: any) => {
  return (
    <Head>
      <title>{title ? title + " - FDBS" : "FDBS: 웹소설 랭킹, 검색"}</title>
      <meta
        name="description"
        content={
          description ||
          "국내외 웹소설에 관련한 다양한 정보를 제공합니다. 작품을 직접 레이팅하고 검색하세요"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />\
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "FDBS"} />
      <meta
        name="og:description"
        content={
          description ||
          "국내외 웹소설에 관련한 다양한 정보를 제공합니다. 작품을 직접 레이팅하고 검색하세요"
        }
      />
      <meta property="og:url" content={url || "https://fictiondbs.com"} />
      <meta property="og:image" content={`%public%/fdb_logo.png`} />
      {/* <meta property="og:article:author" content="article.author" /> */}
    </Head>
  );
};

export default HeadMeta;
