module.exports = {
    siteMetadata: {
      title: `My Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      'gatsby-plugin-postcss',
    /*   {
        resolve: `gatsby-source-strapi`,
        options: {
          apiURL: `http://localhost:1337`,
          queryLimit: 1000, // Defaults to 100
          collectionTypes: [`os-trends`],
        },
      }, */
    ]
}