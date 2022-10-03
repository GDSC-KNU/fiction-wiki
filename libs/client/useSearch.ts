import useSWR from "swr";
import { useRecoilState } from "recoil";
import { pageAtom } from "../../atoms";

export default function useSearch(search: string | undefined) {
  const [page, setPage] = useRecoilState(pageAtom);
  const { data, error, mutate } = useSWR(
    search ? `/api/search/${search}?page=${page}` : null
  );
  return { result: data, isLoading: !error && !data, isError: error, mutate };
}
