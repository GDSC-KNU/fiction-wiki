import { Author } from "@prisma/client";
import FictionList from "@/components/fictionList";

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
    `${process.env.NEXTAUTH_URL}/api/authors/${page}`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 14,
      },
    }
  ).then((res) => res.json());

  const { authors, authorsCount } = response;

  if (!response) return <div>...loading</div>;

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
      <FictionList
        data={authors}
        type="authors_list"
        authorsCount={authorsCount}
      />
    </div>
  );
}
