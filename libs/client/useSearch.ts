import useSWR from "swr";

export default function useSearch(search: string | undefined) {
  const { data, error, mutate } = useSWR(
    search ? `/api/search/${search}` : null
  );
  return { result: data, isLoading: !error && !data, isError: error, mutate };
}
