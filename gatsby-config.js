module.exports = {
  siteMetadata: {
    siteUrl: 'http://guide.netlify.com',
    title: 'freeCodeCamp Guides'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    'gatsby-plugin-sharp'
  ]
};
