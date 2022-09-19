import FictionList from "@components/FictionList";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pageAtom, searchPageAtom } from "pages/atoms";

const SearchKeyword: NextPage = (fictions, fictionsCount) => {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useRecoilState(pageAtom);
  const [searchPageIndex, setSearchPageIndex] = useRecoilState(searchPageAtom);

  const { search } = router.query;

  useEffect(() => {
    router.push(`/search/keyword/${search}/${pageIndex}`);
  }, [searchPageIndex]);

  return (
    <section className="  w-[100vw] max-w-[1300px] min-h-[213px] mx-10">
      <div className=" bg-slate-100 mb-7 pl-6 py-4">
        <h5 className=" font-bold">키워드: {router.query.search}</h5>
      </div>
      <div className=" mx-3">
        <FictionList
          className=" "
          data={fictions}
          type={"fictions_list"}
          count={fictionsCount}
        />
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx?.params?.search) {
    return {
      props: {},
    };
  }

  const fictions = await client?.fiction.findMany({
    take: 18,
    where: {
      keywords: {
        some: {
          keyword: {
            name: ctx?.params?.search.toString(),
          },
        },
      },
    },
    include: {
      _count: {
        select: {
          favs: true,
        },
      },
      author: true,
      userFictionStat: {
        include: {
          _count: {
            select: {
              users: true,
            },
          },
        },
      },
      keywords: {
        include: {
          keyword: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  const fictionsCount = await client?.fiction.count({
    where: {
      keywords: {
        some: {
          keyword: {
            name: ctx?.params?.search.toString(),
          },
        },
      },
    },
  });

  return {
    props: {
      fictions: JSON.parse(JSON.stringify(fictions)),
      fictionsCount: JSON.parse(JSON.stringify(fictionsCount)),
    },
  };
};

export default SearchKeyword;
