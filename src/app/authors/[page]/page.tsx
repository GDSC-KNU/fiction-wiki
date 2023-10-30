import { Author } from "@prisma/client";
import FictionList from "@components/FictionList";

interface AuthorResponse {
  authors: Author[];
  authorsCount: number;
}

export default async function Authors({
  params,
}: {
  params: { page: string };
}) {
  const { page } = params;

  const response: AuthorResponse = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/authors/${page}`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 14,
      },
    }
  ).then((res) => res.json());

  const { authors, authorsCount } = response;

  return (
    <div className="">
      {/* <NextSeo
        title={`작가 목록`}
        description={"웹소설 작가들을 검색하세요."}
        canonical={`https://fictiondbs.com/authors/${page}`}
        openGraph={{
          url: `https://fictiondbs.com/authors/${page}`,
        }}
      /> */}
      {response && (
        <FictionList
          data={authors}
          type="authors_list"
          authorsCount={authorsCount}
        />
      )}
    </div>
  );
}
