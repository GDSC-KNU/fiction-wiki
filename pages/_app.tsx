import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "@components/Top";
import Footer from "@components/Footer";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
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
