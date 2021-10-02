module.exports = {
  siteMetadata: {
    title: `Genbank`,
    description: `Open US Bank accounts from Nigeria or South Africa`,
    author: `@oluwa-nifemi`,
    siteUrl: `https://genbank.us/`, //TODO: Rename on deploy
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-PXW63FZLLE"
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      }
    },
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
