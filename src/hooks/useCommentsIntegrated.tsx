"use client";

import useSWR from "swr";

import { useParams } from "next/navigation";
import useUser from "@libs/client/useUser";
import { FictionResponse } from "@/type/fiction";

export default function useFiction({
  fallbackData,
}: {
  fallbackData?: FictionResponse;
}) {
  const params = useParams();
  const { user } = useUser();
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

  const integratedComments = fictionData?.fiction?.comments?.map(
    (comment: any) => ({
      ...comment,
      canDelete: user?.id === comment?.createdById,
    })
  );

  return {
    comments: integratedComments || [],
    mutate,
    isValidating,
    error,
  };
}
