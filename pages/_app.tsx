import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "@components/top";
import Footer from "@components/footer";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { RecoilRoot } from "recoil";
import { Session } from "next-auth";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <SWRConfig
          value={{
            fetcher: (url: string) =>
              fetch(url).then((response) => response.json()),
          }}
        >
          <div className=" min-w-[300px]  max-h-fit flex flex-col items-center min-h-[100vh] relative">
            <Top />
            <section className=" mt-10 mx-3 flex-column items-center pb-[60px] w-full max-w-[1300px] px-3">
              <Component {...pageProps} />
            </section>
            <Footer />
          </div>
        </SWRConfig>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
