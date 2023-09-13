"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser(url = "/api/users/me") {
  const { data, error } = useSWR(typeof window === "undefined" ? null : url);

  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      // router.replace("/enter");
    }
  }, [data, router]);

  //   return router.replace("/enter");

  return {
    user: data?.profile,
    isAdmin: data?.isAdmin,
    isLoading: !data && !error,
    error: error,
  };
}
