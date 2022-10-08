/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports")();

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   reactRoot: true,
  //   /*  runtime: "nodejs",
  //   serverComponents: true, */
  // },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "imagedelivery.net",
    ],
  },
};

// module.exports = nextConfig;

module.exports = removeImports(nextConfig);

// module.exports = (phase, { nextConfig }) => {
//   return removeImports({
//     ...nextConfig,
//   });
// };
