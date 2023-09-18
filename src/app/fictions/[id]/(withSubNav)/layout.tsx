import { FictionProvider } from "@/context/fictionContext";

import { ReactNode } from "react";

import WikiNavBar from "@components/fiction/wikiNavBar";
import type { Metadata, ResolvingMetadata } from "next";
import config from "@/config/site";

interface FictionLayoutProps {
  children: ReactNode;
  params: {
    id: string;
  };
}

export default async function FictionLayout({
  children,
  params,
}: FictionLayoutProps) {
  const { id } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions/${id}`,
    // { cache: "no-store" }
    {
      next: {
        revalidate: 60 * 60 * 24 * 1,
      },
    }
  ).then((res) => res.json());

  const { fiction, mbtis, setup, similarFictions } = await response;

  const structuredReviewData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: fiction?.title,
    image: fiction?.image,
    description: fiction?.setup.slice(6, 150) + "...",
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
  };

  return (
    // <FictionProvider
    //   initialData={{
    //     fiction: JSON.parse(JSON.stringify(fiction)),
    //     mbtis: JSON.parse(JSON.stringify(mbtis)),
    //     setup: JSON.parse(JSON.stringify(setup)),
    //     similarFictions: JSON.parse(JSON.stringify(similarFictions)),
    //   }}
    // >

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.parse(JSON.stringify(structuredReviewData)),
        }}
      />
      <div className=" block lg:flex">
        <div className="static left-0 lg:fixed lg:h-screen lg:w-24 lg:py-10 ">
          <WikiNavBar />
        </div>
        {children}
      </div>
    </>
  );
}

// export const revalidate = 60 * 60 * 24 * 30;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions/${id}`,
    {
      next: {
        tags: ["fiction"],
      },
    }
  ).then((res) => res.json());

  const { fiction } = response;

  if (!fiction)
    return {
      metadataBase: new URL(config.url),
      title: "FDBS | 소설위키",
      description: fiction,
      openGraph: {},
    };

  return {
    metadataBase: new URL(config.url),
    title: {
      default: `${fiction.title}`,
      template: `%s | FDBS`,
    },
    description: fiction.setup.slice(6, 150) || "줄거리 업데이트 예정입니다.",
    keywords: `${fiction.title}, ${fiction.author?.name}, ${fiction.originalTitle}, ${fiction?.relatedTitle}`,
    openGraph: {
      type: "website",

      title: `${fiction.title} | FDBS`,
      description: fiction.setup.slice(6, 150),
      locale: "ko_KR",
      url: `https://fictiondbs.com/fictions/${id}`,
      images: [`${fiction.image}`],
    },
    twitter: {
      title: `${fiction.title} | FDBS`,
      description: fiction.setup.slice(6, 150),
      images: [`${fiction.image}`],
      site: "@fdbs",
      creator: "@fdbs",
      card: "summary_large_image",
    },
  };
}
