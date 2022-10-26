import Head from "next/head";

const HeadMeta = ({ title, description, url }: any) => {
  return (
    <Head>
      <title>{title || "FDBS"}</title>
      <meta
        name="og:description"
        content={description || "웹소설 DB 제공 서비스"}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />\
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "FDBS"} />
      <meta
        property="og:url"
        content={url || "https://fdbs-proto.vercel.app/"}
      />
      <meta property="og:image" content={`%public%/fdb_logo.png`} />
      <meta property="og:article:author" content="article.author" />
    </Head>
  );
};

export default HeadMeta;
