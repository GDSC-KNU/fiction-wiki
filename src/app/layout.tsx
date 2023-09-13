"use client";

import { ReactNode } from "react";
import Top from "@components/layout/top";
import Footer from "@components/layout/footer";
import React, { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
// import { SWRConfig } from "swr";
// import { RecoilRoot } from "recoil";
// import { Session } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import * as gtag from "@libs/gtag";
import SWRProvider from "./swr-provider";
import RecoilProvider from "./recoil-provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FDBS | 웹소설위키",
  description:
    "국내외 웹소설에 관련한 다양한 정보를 제공합니다. 작품을 직접 평가하고 검색하세요.",
  twitter: {
    card: "summary_large_image",
    site: "@site",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://fictiondbs.com/",
    siteName: "FDBS",
    title: " FDBS | 웹소설위키",
    images: [`/fdbs_logo.png`],
  },
  icons: {
    icon: `/favicon/favicon.ico`,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
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
        <SessionProvider>
          <RecoilProvider>
            <SWRProvider>
              <div className=" relative  flex max-h-fit min-h-[100vh] flex-col items-center bg-white">
                <Top />
                <section className="  mt-[80px] w-full items-center  pb-[60px] md:mt-[48px]">
                  {children}
                </section>
                <Footer />
              </div>
            </SWRProvider>
          </RecoilProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
