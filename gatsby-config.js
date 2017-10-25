module.exports = {
  siteMetadata: {
    siteUrl: 'https://guide.freecodecamp.org',
    title: 'freeCodeCamp Guide'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8
      }
    },
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
        plugins: [
          'gatsby-remark-fcc-forum-emoji',
          'gatsby-remark-smartypants',
          'gatsby-remark-prismjs'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-55446531-6'
      }
    },
    'gatsby-plugin-sitemap'
  ]
};
