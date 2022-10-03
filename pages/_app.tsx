import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "@components/top";
import Footer from "@components/footer";
import { SessionProvider, useSession } from "next-auth/react";
import { SWRConfig } from "swr";
import { RecoilRoot } from "recoil";
import { Session } from "next-auth";

// const { data: session } = useSession();

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(url).then((response) => response.json()),
        }}
      >
        <RecoilRoot>
          <div className=" min-w-[300px]  max-h-fit flex flex-col items-center min-h-[100vh] relative">
            <Top />
            <section className=" mt-10 mx-3 flex-column items-center pb-[60px]">
              <Component {...pageProps} />
            </section>
            <Footer />
          </div>
        </RecoilRoot>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
