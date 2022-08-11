import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  // const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      // router.replace("/enter");
    }
  }, [data, router]);

  //   return router.replace("/enter");

  return { user: data?.profile, isLoading: !data && !error };
}
