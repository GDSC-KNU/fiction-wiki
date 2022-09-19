import FictionList from "@components/FictionList";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { pageAtom } from "pages/atoms";
import useSWR from "swr";

const TitleSearch: NextPage = () => {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useRecoilState(pageAtom);

  const { data, error, mutate } = useSWR(
    router?.query?.search
      ? `/api/search/title/${router?.query?.search}?page=${pageIndex}`
      : null
  );

  return (
    <section className="  w-[100vw] max-w-[1300px] min-h-[213px]">
      <div className=" bg-slate-100 mb-7 pl-6 py-4">
        <h5 className=" font-bold">제목: {router.query.search}</h5>
      </div>

      <FictionList data={data} type={"fictions_list"} />
    </section>
  );
};

export default TitleSearch;
