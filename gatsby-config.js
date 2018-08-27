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
      resolve: '@freecodecamp/gatsby-source-filesystem',
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
    'fcc-create-nav-data',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-55446531-6'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'freeCodeCamp Guide',
        /* eslint-disable camelcase */
        short_name: 'fCC Guide',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#006400',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'static/square_puck.png'
      }
    },
    'gatsby-plugin-sitemap'
  ]
};
