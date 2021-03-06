require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Gatsby Drupal Starter`,
    description: `This project pulls data from a Drupal site running on http://nginx. The Drupal site should be installed with the Umami demo profile and the JSON:API module.`,
    author: `@benjifisher`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://drupal.lgd.lndo.site/',
        // Using the JSON:API module, the base URL for REST queries is
        // /jsonapi.
        apiBase: 'jsonapi',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-drupal-umami`,
        short_name: `drupal-umami`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
