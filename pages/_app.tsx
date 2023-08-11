import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "@components/layout/top";
import Footer from "@components/layout/footer";
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
import Layout from "src/components/layout/Layout";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
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

  const getLayout = Component.getLayout ?? ((page) => page);

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
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          {/* <Analytics /> */}
        </SWRConfig>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
