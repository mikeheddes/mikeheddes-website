const path = require('path')

module.exports = {
  siteMetadata: {
    homepage: `https://mikeheddes.nl`,
    defaultTheme: 'day',
  },
  mapping: {
    'MarkdownRemark.frontmatter.authors': `AuthorYaml`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `assets`),
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `content`, `articles`),
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `content`, `music`),
        name: `music`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        commonmark: true,
        footnotes: true,
        pedantic: true,
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `autolink-header`,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`,
        ],
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}
