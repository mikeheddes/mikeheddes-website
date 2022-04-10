const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    // `gatsby-remark-prismjs`,
    // `gatsby-remark-katex`,
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
