import FictionList from "@components/fictionList";
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
    `${process.env.NEXTAUTH_URL}/api/authors/name/${slug}`
  ).then((res) => res.json());

  if (!author)
    return {
      title: "FDBS | 소설위키",
      description: "소설위키 FDBS 입니다.",
      openGraph: {},
    };

  return {
    title: `${author.name} | FDBS`,
    description: author.description
      ? author.description?.slice(0, 150)
      : `${author.name} 작가의 작품 목록, SNS 등의 상세정보를 확인하세요.`,
    keywords: `${author.name}, ${author.rawName}, ${author.relatedName}`,
    openGraph: {
      title: `${author.name} | FDBS`,
      description: author.description
        ? author.description?.slice(0, 150)
        : `${author.name} 작가의 작품 목록, SNS 등의 상세정보를 확인하세요.`,
      locale: "ko_KR",
      url: `https://fictiondbs.com/authors/name/${author.name}`,
      siteName: "FDBS",
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
    `${process.env.NEXT_PUBLIC_HOST}/api/authors/name/${slug}`
  ).then((res) => res.json());

  return (
    <div className=" mx-auto min-h-[213px] px-2">
      {/* <NextSeo
        title={author?.name}
        description={
          author?.description ||
          `작가 ${author?.name}의 페이지 입니다. 작품 목록, SNS 피드, 최신 소식을 확인하세요.`
        }
        canonical={`${URL.DOMAIN}${URL.AUTHOR_DETAIL}/${author?.name}`}
        openGraph={{
          url: `${URL.DOMAIN}${URL.AUTHOR_DETAIL}/${author?.name}`,
        }}
      /> */}
      <div className=" mb-4 border bg-[#F5F5F5]">
        <div className=" flex ">
          <Image
            className=" rounded-full py-5 pl-3 pr-5"
            src="/anoynymous_user.png"
            width={142}
            height={160}
            alt={author.name}
          />
          <div className=" flex flex-col justify-center">
            <h1 className=" mb-2 text-xl font-bold">{author?.name}</h1>
            <p>{`${author?.rawName}${
              author?.relatedName === null ? "" : `, ` + author?.relatedName
            }`}</p>
            <div className=" flex">
              <dt>국적</dt>
              <dd className=" ml-3">{author?.nationality}</dd>
            </div>
            <div className=" flex">
              <dt>SNS</dt>
              <dd className=" ml-3">{author?.sns || "업데이트 예정"}</dd>
            </div>
          </div>
        </div>
        <div className=" mb-4 ml-3 pb-2 text-sm"> {author?.description}</div>
      </div>
      <div className=" mb-4  grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-12">
          <div className=" mt-5"></div>
          <h2 className=" text-xl font-bold">작품 목록</h2>
          {author && author?.fictions && (
            <FictionList
              data={author?.fictions}
              type={"fictions_list"}
              pagination={false}
            />
          )}
        </div>
      </div>
      <div className=" mb-4  grid grid-cols-12 bg-white">
        <div className=" col-span-12 lg:col-span-12">
          <div className="mt-5 text-xl font-bold">SNS</div>
        </div>
      </div>
    </div>
  );
}
