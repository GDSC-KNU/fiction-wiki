import useSWR from "swr";

import { useParams } from "next/navigation";
import { FictionResponse, FictionWithMore } from "@/type/fiction";

export default function useFiction({
  fallbackData,
}: {
  fallbackData?: FictionResponse;
}) {
  const params = useParams();
  const { id: fictionId } = params;

  const {
    data: fictionData,
    isValidating,
    mutate,
    error,
  } = useSWR(`${process.env.NEXT_PUBLIC_HOST}/api/fictions/${fictionId}`, {
    suspense: true,
    fallbackData: fallbackData,
  });

  return {
    fictionResponse: fictionData as FictionResponse,
    mutate,
    isValidating,
    error,
  };
}
