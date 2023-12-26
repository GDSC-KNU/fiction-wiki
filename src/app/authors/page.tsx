import { Author } from "@prisma/client";

import AuthorsPageWrapper from "@components/authors/authorsPageWrapper";

// interface AuthorResponse {
//   authors: Author[];
//   authorsCount: number;
// }

interface AuthorResponse {
  authors: Author[];
}

type FallbackData = AuthorResponse[][];

export default async function Authors() {
  const response: FallbackData = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/authors?page=1`
  ).then((res) => res.json());

  const reduced = [[response]];

  return (
    <>
      <AuthorsPageWrapper fallbackData={reduced} />
    </>
  );
}
