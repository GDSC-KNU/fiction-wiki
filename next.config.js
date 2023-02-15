/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports")();

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
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
};

module.exports = removeImports(nextConfig);
