"use client";

import { Author } from "@prisma/client";
import AuthorsList from "@components/authors/AuthorsList";

import useSWRInfinite from "swr/infinite";

import { useEffect, useRef } from "react";

import ClipLoader from "react-spinners/ClipLoader";

interface AuthorResponse {
  authors: Author[];
  authorsCount: number;
}

const getKey = (pageIndex: number, previousPageData: AuthorResponse) => {
  if (previousPageData && !previousPageData.authors.length) return null;
  return `${process.env.NEXT_PUBLIC_HOST}/api/authors?page=${pageIndex + 1}`;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AuthorsDisplayer({
  fallbackData,
}: {
  fallbackData: any[];
}) {
  const { data, error, isLoading, isValidating, mutate, size, setSize } =
    useSWRInfinite(getKey, fetcher, {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      focusThrottleInterval: 5000,
      // suspense: true,
      // fallbackData: fallbackData,
    });

  const hasMoreData =
    data && data[data?.length - 1]?.["authors"]?.length === 12;

  const observer = useRef<IntersectionObserver>();
  const lastElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isValidating) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0].isIntersecting;
      if (isIntersecting && hasMoreData) {
        setSize(size + 1);
      }
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => observer.current?.disconnect();
  }, [setSize, size, isValidating]);

  if (!data)
    return (
      <ClipLoader
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      ></ClipLoader>
    );

  return (
    <>
      <AuthorsList data={data} />
      <div ref={lastElementRef} />
      {hasMoreData && isValidating && (
        <div className="flex justify-center p-6">
          <ClipLoader
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          ></ClipLoader>
        </div>
      )}
    </>
  );
}
