module.exports = {
  siteMetadata: {
    siteUrl: 'http://guide.freecodecamp.org',
    title: 'freeCodeCamp Guides'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-smartypants', 'gatsby-remark-prismjs']
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-55446531-6'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp'
  ]
};
