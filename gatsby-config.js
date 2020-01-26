const path = require('path')

const { homepage } = require('./package.json')

module.exports = {
  siteMetadata: {
    siteUrl: homepage,
  },
  plugins: [
    `gatsby-transformer-yaml`,
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
        path: path.join(__dirname, `src`, `posts`),
        name: `post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `music`),
        name: `music`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              withWebp: true,
              quality: 80,
              maxWidth: 1440,
              background: 'transparent',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`,
        ],
        // remarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        defaultQuality: 80,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          three$: path.resolve(__dirname, 'src/three-exports.js'),
        },
        extensions: [],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-lodash`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-153140699-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true, // recommended by Google
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     analyzerPort: 3000,
    //     production: true,
    //   },
    // },
  ],
}
