import useSWR from "swr";
import { useRecoilState } from "recoil";
import { fictionPageAtom } from "../../atoms";

export default function useSearch(search: string | undefined) {
  const [page, setPage] = useRecoilState(fictionPageAtom);
  const { data, error, mutate } = useSWR(
    search
      ? typeof window === "undefined"
        ? null
        : `/api/search/${search}?page=${page}`
      : null
  );
  return { result: data, isLoading: !error && !data, isError: error, mutate };
}
