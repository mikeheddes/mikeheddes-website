const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    // `gatsby-remark-prismjs`,
    // `gatsby-remark-katex`,
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
