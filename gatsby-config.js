module.exports = {
    siteMetadata: {
      title: `My Gatsby Site`,
        siteUrl: `https://mystifying-austin-110ff9.netlify.app`,
        description:"a new gatsby site by alexei",
        author:"Alexei",
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-transformer-sharp`,
        options: {
          // The option defaults to true
          checkSupportedExtensions: false,
        },
      },
      'gatsby-plugin-postcss',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `static`,
          path: `${__dirname}/src/static`,
        },
      },
      {
        resolve: `gatsby-source-strapi`,
        options: {
          apiURL: `https://websiteserver-ds7cf.ondigitalocean.app`,
          queryLimit: 1000, // Defaults to 100
          collectionTypes: [`os-trends`,`post`],
        },
      },
    ]
}