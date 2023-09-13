"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";

const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
