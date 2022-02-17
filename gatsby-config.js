require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const globalPlugins = [
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/assets/gaap-logo.svg`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-postcss`,
  `gatsby-transformer-inline-svg`,
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-external-links`,
          options: {
            rel: `noopener noreferrer`,
          },
        },
        `gatsby-remark-table-of-contents`,
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            elements: [`h2`],
            maintainCase: false,
            icon: false,
          },
        },
      ],
    },
  },
  `gatsby-plugin-typescript`,
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
      },
      emitPluginDocuments: {
        'src/__generated__/gatsby-plugin-documents.graphql': true,
      },
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  {
    resolve: `gatsby-source-microcms`,
    options: {
      apiKey: process.env.MICROCMS_API_KEY,
      serviceId: 'gaap',
      apis: [
        {
          endpoint: 'test',
          format: 'object'
        }
      ]
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `balsamiq sans\:400i,700i,700`, // you can also specify font weights and styles
      ],
      display: 'swap',
    },
  },
  {
    resolve: `gatsby-plugin-gatsby-cloud`,
  },
]

const productionPlugins = [
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: ['UA-198042353-1'],
      pluginConfig: {
        head: true,
      },
    },
  },
]

const plugins = isProd
  ? [...globalPlugins, ...productionPlugins]
  : globalPlugins

module.exports = {
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `GaaP`,
    description: `Nishimuraの技術ブログ。開発する上で役に立ったこと、注意したいこと、やってみたことを投稿します。`,
    author: `Nishimura`,
    siteUrl: `https://gaap.gatsbyjs.io`,
  },
  plugins,
}
