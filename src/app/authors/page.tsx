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
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  const reduced = [[data]];

  return (
    <>
      <AuthorsPageWrapper fallbackData={reduced} />
    </>
  );
}
