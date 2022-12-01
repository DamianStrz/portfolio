module.exports = {
  siteMetadata: {
    title: `Wypożyczalnia Domirent - narzędzia i sprzęt budowlany w Przysusze`,
    description: `Chcesz coś naprawić w domu, ale brakuje Ci narzędzi? Masz zlecenie budowlane, ale potrzebujesz sprzętu? Zadzwoń i wypożycz z Domirentu w Przysusze! `,
    author: `DS`,
    siteUrl: `https://domirent-wypozyczalnia.pl`,
    lang: `pl`,
    icon: `src/assets/domirent-logo.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: false,
        directives: {
          "style-src": "'self' 'unsafe-inline' fonts.googleapis.com",
          "font-src": "'self' data: fonts.gstatic.com",
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/data/products`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Domirent - Wypożyczalnia narzędzi`,
        description: `Wypożyczamy narzędzia i sprzęt budowalny na doby.`,
        short_name: `Domirent - Wypożyczalnia`,
        start_url: `https://domirent-wypozyczalnia.pl`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        lang: `pl`,
        icon: `src/assets/domirent-logo.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/icon-32x32.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Montserrat`,
            `Roboto`,
            `Raleway`,
            `source sans pro\:300,400,400i,700`
        ],

        display: 'swap'
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
