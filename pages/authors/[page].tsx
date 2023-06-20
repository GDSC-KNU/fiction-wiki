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
import { NextSeo } from "next-seo";

// interface AuthorWithFictions extends Author {
//   fictions: Fiction[];
// }

interface AuthorResponse {
  authors: Author[];
  authorsCount: number;
  page: number;
}

// interface Params extends ParsedUrlQuery {
//   page: string;
// }

interface IParams extends ParsedUrlQuery {
  page: string;
}

const AuthorPage: NextPage<AuthorResponse> = ({
  authors,
  authorsCount,
  page,
}) => {
  // const [authorPageIndex, setAuthorPageIndex] = useRecoilState(authorPageAtom);
  // const router = useRouter();

  // useEffect(() => {
  //   router.push(`/authors/${authorPageIndex}`);
  // }, [authorPageIndex]);

  return (
    <div className="">
      <NextSeo
        title={`작가 목록`}
        description={"웹소설 작가들을 검색하세요."}
        canonical={`https://fictiondbs.com/authors/${page}`}
        openGraph={{
          url: `https://fictiondbs.com/authors/${page}`,
        }}
      />
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
      fictions: {
        include: {
          userFictionStat: true,
        },
      },
    },
  });

  const authorsCount = await client.author.count({});

  return {
    props: {
      authors: JSON.parse(JSON.stringify(authors)),
      authorsCount: JSON.parse(JSON.stringify(authorsCount)),
      page: page,
    },
  };
};

export default AuthorPage;
