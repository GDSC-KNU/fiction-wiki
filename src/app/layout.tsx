import { ReactNode } from "react";
import Top from "@components/layout/Top";
import Footer from "@components/layout/Footer";
import React from "react";

import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import * as gtag from "@libs/gtag";
import SWRProvider from "./swr-provider";
import RecoilProvider from "./recoil-provider";
import "./globals.css";
import { Metadata } from "next";
import config from "@/config/site";

import { Noto_Sans_KR } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  title: "소설위키",
  description:
    "국내외 소설들의 위키, 리뷰, 랭킹 정보를 제공합니다. 작품을 직접 검색하고 평가하세요.",
  twitter: {
    card: "summary_large_image",
    site: "@site",
  },
  applicationName: "소설위키",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://fictiondbs.com/",
    siteName: "소설위키",
    title: " 소설위키",
    images: [`/fdbs_logo.png`],
  },
  icons: {
    icon: `/favicon/favicon.ico`,
  },
};

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={NotoSansKR.className}>
      <body suppressHydrationWarning={true}>
        <div id="modal"></div>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="30cd8ea963377b6866389d39ec426e76543df5cd"
        />
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9616155322020486"
          crossOrigin="anonymous"
        />
        <Analytics />
        <RecoilProvider>
          <SWRProvider>
            <Top />
            <div className=" flex max-h-fit min-h-[100vh] flex-col items-center">
              <section className="  mt-[96px] w-full items-center  pb-[60px] md:mt-[48px]">
                {children}
              </section>
              <Footer />
            </div>
          </SWRProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
