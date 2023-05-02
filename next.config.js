/** @type {import('next').NextConfig} */

// const removeImports = require("next-remove-imports")();

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

let nextConfig = {
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
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;

// {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };
