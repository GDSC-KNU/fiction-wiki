import FictionList from "@components/FictionList";
import { Metadata, ResolvingMetadata } from "next";
import { Author, Fiction } from "@prisma/client";

import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface AuthorWithMore extends Author {
  fictions: Fiction[];
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const { author }: { author: AuthorWithMore } = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/authors/name/${slug}`
  ).then((res) => res.json());

  if (!author)
    return {
      title: "소설위키",
      description: "소설위키 입니다.",
      openGraph: {},
    };

  return {
    title: {
      template: "%s | 소설위키",
      default: `${author.name}  | 소설위키`,
    },
    description: author.description
      ? author.description?.slice(0, 150)
      : `${author.name} 작가의 작품 목록, SNS 등의 상세정보를 확인하세요.`,
    keywords: `${author.name}, ${author.rawName}, ${author.relatedName}`,
    openGraph: {
      title: `${author.name} | 소설위키`,
      description: author.description
        ? author.description?.slice(0, 150)
        : `${author.name} 작가의 작품 목록, SNS 등의 상세정보를 확인하세요.`,
      locale: "ko_KR",
      url: `https://fictiondbs.com/authors/name/${author.name}`,
      siteName: "소설위키",
      images: author.fictions.map((fiction: Fiction) => fiction.image),
    },
    twitter: {
      site: "@site",
      card: "summary_large_image",
    },
  };
}

export default async function AuthorDetail({ params }: any) {
  // const { user, isLoading } = useUser();
  const { slug } = params;

  const { author }: any = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/authors/name/${slug}`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  ).then((res) => res.json());

  return (
    <article className=" ">
      <header className=" mx-[-16px] mb-4 border bg-[#F5F5F5] p-3">
        <div className="flex">
          <Image
            className=" rounded-full py-5 pl-3 pr-5"
            src="/anonymous_user.png"
            width={142}
            height={160}
            alt={author.name}
          />
          <div className="flex flex-col justify-center">
            <h1 className="mb-2 text-xl font-bold">{author?.name}</h1>
            <p>{`${author?.rawName}${
              author?.relatedName ? `, ${author?.relatedName}` : ""
            }`}</p>
            <dl className="flex">
              <dt className="">국적</dt>
              <dd className="ml-3 line-clamp-1">{author?.nationality}</dd>
            </dl>
            <dl className="flex">
              <dt className="">SNS</dt>
              <dd className="ml-3 line-clamp-1">
                {author?.sns || "업데이트 예정"}
              </dd>
            </dl>
          </div>
        </div>
        <p className="px-3 text-sm">{author?.description}</p>
      </header>
      <section className="min-h-[213px] p-3">
        <div className="mb-4 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-12">
            <h2 className="text-xl font-bold">작품 목록</h2>
            {author && author?.fictions && (
              <FictionList
                data={author?.fictions}
                type={"fictions_list"}
                pagination={false}
              />
            )}
          </div>
        </div>
        <section className="mb-4 grid grid-cols-12 bg-white">
          <div className="col-span-12 lg:col-span-12">
            <h2 className="mt-5 text-xl font-bold">SNS</h2>
            {/* Include SNS related content here */}
          </div>
        </section>
      </section>
    </article>
  );
}
