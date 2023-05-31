import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "src/components/top";
import Footer from "src/components/footer";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { RecoilRoot } from "recoil";
import { Session } from "next-auth";
import * as gtag from "@libs/gtag";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "../seo.config";
import HeadMeta from "src/components/headMeata";
import { Analytics } from "@vercel/analytics/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <SWRConfig
          value={{
            fetcher: (url: string) =>
              fetch(url).then((response) => response.json()),
          }}
        >
          <HeadMeta isMain={true} />
          <DefaultSeo {...SEO} />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <div className=" relative  flex max-h-fit min-h-[100vh] flex-col items-center bg-white">
            <Top />
            <section className="  mt-[80px] w-full max-w-[1300px] items-center pb-[60px]  md:mt-[48px]">
              <Component {...pageProps} />
              <Analytics />
            </section>
            <Footer />
          </div>
        </SWRConfig>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
