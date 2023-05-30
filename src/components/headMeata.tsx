import Head from "next/head";

const HeadMeta = ({ title, description, url, img, isMain }: any) => {
  return (
    <Head>
      {/* <title>
        {title
          ? title + " - 웹소설정보 - FDBS"
          : "FDBS: 웹소설 정보 데이터베이스"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "국내외 웹소설에 관련한 다양한 정보를 제공합니다. 작품을 직접 평가하고 검색하세요"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />\
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? title + " - FDBS" : "FDBS"} />
      <meta
        name="og:description"
        content={
          description ||
          "국내외 웹소설에 관련한 다양한 정보를 제공합니다. 작품을 직접 평가하고 검색하세요"
        }
      />
      <meta property="og:url" content={url || "https://fictiondbs.com"} />
      <meta property="og:image" content={img || `%public%/fdb_logo.png`} /> */}
      {/* <meta property="og:article:author" content="article.author" /> */}
      {isMain ? (
        <>
          <link rel="shortcut icon" href="/favicon/android-icon-72x72.png" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff"></meta>
          {/* 네이버 검색엔진 등록 */}
          <meta
            name="naver-site-verification"
            content="30cd8ea963377b6866389d39ec426e76543df5cd"
          />
        </>
      ) : null}
    </Head>
  );
};

export default HeadMeta;
