import { useState } from "react";
import axios from "axios";

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object | unknown;
}
type UseMutationResult<T> = [
  (data: any, method: string) => void,
  UseMutationState<T>
];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  async function mutation(data: any, method: string) {
    setState((prev) => ({ ...prev, loading: true }));

    // await fetch(url, {
    //   method: method?.toString() || "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json().catch(() => {}))
    //   .then((data) => setState((prev) => ({ ...prev, data })))
    //   .catch((error) => setState((prev) => ({ ...prev, error })))
    //   .finally(() => setState((prev) => ({ ...prev, loading: false })));

    setState((prev) => ({ ...prev, loading: true }));
    try {
      const response = await axios({
        method: method?.toString() || "POST",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      });
      setState((prev) => ({ ...prev, data: response.data }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: error }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }
  return [mutation, { ...state }];
}
