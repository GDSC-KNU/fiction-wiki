import { FictionProvider } from "@/context/fictionContext";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import remarkToc from "remark-toc";
import client from "@libs/server/client";
import { ReactNode } from "react";
import { Fiction } from "@prisma/client";

import WikiNavBar from "@components/fiction/wikiNavBar";
import type { Metadata, ResolvingMetadata } from "next";

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
  const { id: fictionIdStr } = params;
  const fictionId = parseInt(fictionIdStr, 10);

  const fiction: any = await fetchFiction(fictionId)!;
  if (!fiction) return <div>loading</div>;

  const similarFictions: any = await fetchSimilarFictions(
    fiction.keywords,
    +fictionIdStr
  );

  const mbtis = await groupByMBTI(fictionId);

  let setup = await remark()
    .use(html)
    .use(remarkToc)
    .use(remarkGfm)
    .process(fiction?.setup || "");

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
    <FictionProvider initialData={{ fiction, mbtis, setup, similarFictions }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredReviewData),
        }}
      />
      <div className=" block lg:flex">
        <div className="static left-0 lg:fixed lg:h-screen lg:w-24 lg:py-10 ">
          <WikiNavBar />
        </div>
        {children}
      </div>
    </FictionProvider>
  );
}

async function fetchFiction<FictionWithMore>(fictionId: number | string) {
  return await client.fiction.findUnique({
    where: {
      id: +fictionId ?? 1,
    },
    include: {
      fictionStat: true,

      userFictionStat: {
        include: {
          userRationOnFictions: true,
          _count: {
            select: {
              userRationOnFictions: true,
            },
          },
        },
      },
      keywords: {
        include: {
          keyword: {
            select: {
              name: true,
              isOfHeroine: true,
              isOfMC: true,
              isOfCons: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      author: true,
      comments: {
        include: {
          createdBy: {
            select: {
              nickname: true,
            },
          },
        },
      },
    },
  });
}

async function fetchSimilarFictions(
  keywords: any,
  fictionId: number
): Promise<Partial<Fiction>[]> {
  const keywordConditions = keywords.map((keyword: any) => ({
    keywords: {
      some: {
        keyword: {
          name: {
            equals: keyword.name,
          },
        },
      },
    },
  }));

  return await client.fiction.findMany({
    where: {
      OR: keywordConditions,
      AND: {
        id: {
          not: fictionId,
        },
      },
    },
    select: {
      id: true,
      title: true,
    },
  });
}

async function groupByMBTI(fictionId: number) {
  return await client.$queryRaw`
      SELECT User.mbti,
      CAST(SUM(UserRationOnFiction.originality
      + UserRationOnFiction.synopsisComposition +
      UserRationOnFiction.value +
      UserRationOnFiction.writing +
      UserRationOnFiction.character +
      UserRationOnFiction.verisimilitude)
      / (COUNT(*)*6)
      AS CHAR(32)) AS avg,
      CAST(COUNT(*) AS CHAR(32)) AS cnt
      FROM UserRationOnFiction
      JOIN User ON UserRationOnFiction.userId = User.id
      JOIN UserFictionStat ON UserRationOnFiction.userFictionStatId = UserFictionStat.id
      WHERE UserFictionStat.fictionId = ${fictionId}
      GROUP by User.mbti
      `;
}

export const revalidate = 60 * 60 * 24 * 30;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const fiction = await fetchFiction(id);

  if (!fiction)
    return {
      title: "FDBS | 소설위키",
      description: fiction,
      openGraph: {},
    };

  return {
    title: `${fiction.title} | FDBS`,
    description: fiction.setup.slice(6, 150),
    keywords: `${fiction.title}, ${fiction.author?.name}, ${fiction.originalTitle}, ${fiction.relatedTitle}`,
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
