/** @type {import('next').NextConfig} */

// const removeImports = require("next-remove-imports")();

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   reactRoot: true,
  //   /*  runtime: "nodejs",
  //   serverComponents: true, */
  //   reactMode: "concurrent",
  // },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "imagedelivery.net",
    ],
  },
  // i18n: {
  //   locales: ["ko"],
  //   defaultLocale: "ko",
  // },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};

module.exports = nextConfig;
