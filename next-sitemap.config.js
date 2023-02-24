/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    "/server-sitemap.xml",
    "/fictions/create",
    "/profile/edit",
    "/search",
    "/search/**",
    "/ranking",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/fictions/create", "/profile/edit", "/search", "/ranking"],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL}/server-sitemap.xml`, // <==== Add here
    ],
  },
};
