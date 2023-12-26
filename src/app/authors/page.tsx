import AuthorsPageWrapper from "@components/authors/AuthorsPageWrapper";

// interface AuthorResponse {
//   authors: Author[];
//   authorsCount: number;
// }

// interface AuthorResponse {
//   authors: Author[];
// }

// type FallbackData = AuthorResponse[][];

export default async function Authors() {
  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/authors?page=1`
  ).then((res) => res.json());

  const reduced = [[response]];

  return (
    <>
      <AuthorsPageWrapper fallbackData={reduced} />
    </>
  );
}
