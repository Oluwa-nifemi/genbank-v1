module.exports = {
  siteMetadata: {
    title: `Genbank`,
    description: `Open US Bank accounts from Nigeria or South Africa`,
    author: `@oluwa-nifemi`,
    siteUrl: `https://genbank-v1.netlify.app/`, //TODO: Rename on deploy
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100
        }
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Genbank`,
        short_name: `Genbank`,
        start_url: `/`,
        background_color: `#0A2E34`,
        theme_color: `#1565D8`,
        icon: `src/assets/images/favicon.png`,
      },
    }
  ],
}
