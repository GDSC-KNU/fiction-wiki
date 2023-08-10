import Head from "next/head";

export default function StructuredData({ data: fiction }: any) {
  const structuedReviewData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Book",
    name: fiction?.title,
    image: fiction?.image,
    description: fiction?.synopsis.slice(0, 145) + "...",
    genre: fiction?.categories?.[0]?.category?.name,
    keywords: fiction?.keywords.reduce(
      (acc: any, cur: any) => acc + cur.keyword.name + ",",
      ""
    ),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: +fiction?.userFictionStat?.total || 0,
      reviewCount: +fiction?.userFictionStat?.userRationOnFictions?.length || 0,
      bestRating: "5",
      worstRating: "0",
    },
    author: {
      "@type": "Person",
      name: fiction?.author?.name,
    },
    url: `${process.env.NEXT_PUBLIC_HOST}/${fiction?.id}`,
    workExample: [
      {
        "@type": "Book",
        "@id": `${process.env.NEXT_PUBLIC_HOST}/${fiction?.id}`,
        isbn: "",
        bookEdition: "",
        bookFormat: "https://schema.org/EBook",
      },
    ],
  });
  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuedReviewData }}
      />
    </Head>
  );
}
