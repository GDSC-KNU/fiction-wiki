import client from "@libs/server/client";
import { Author } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";
import FictionList from "src/components/fictionList";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";

// interface AuthorWithFictions extends Author {
//   fictions: Fiction[];
// }

interface AuthorResponse {
  authors: Author[];
  authorsCount: number;
}

// interface Params extends ParsedUrlQuery {
//   page: string;
// }

interface IParams extends ParsedUrlQuery {
  page: string;
}

const AuthorPage: NextPage<AuthorResponse> = ({ authors, authorsCount }) => {
  // const [authorPageIndex, setAuthorPageIndex] = useRecoilState(authorPageAtom);
  // const router = useRouter();

  // useEffect(() => {
  //   router.push(`/authors/${authorPageIndex}`);
  // }, [authorPageIndex]);

  return (
    <div className="">
      <FictionList
        data={authors}
        type="authors_list"
        authorsCount={authorsCount}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { page } = ctx.params as IParams;
  if (!page) {
    return {
      props: {},
    };
  }

  const authors = await client.author.findMany({
    take: 18,
    skip: (+page - 1) * 18,
    include: {
      fictions: true,
    },
  });

  const authorsCount = await client.author.count({});

  return {
    props: {
      authors: JSON.parse(JSON.stringify(authors)),
      authorsCount: JSON.parse(JSON.stringify(authorsCount)),
    },
  };
};

export default AuthorPage;
