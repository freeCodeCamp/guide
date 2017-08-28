module.exports = {
  siteMetadata: {
    siteUrl: 'http://guide.netlify.com',
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
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp'
  ]
};
