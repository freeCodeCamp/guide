module.exports = {
  siteMetadata: {
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
    'gatsby-plugin-sharp'
  ]
};
