const path = require('path');
const { linkResolver } = require('./src/utils/linkResolver');

module.exports = {
  pathPrefix: "/app",

  siteMetadata: {
    title: 'Ueno Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-ueno',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Let's talk about sex",
        short_name: "Let's talk",
        start_url: '/',
        background_color: '#FC4255',
        theme_color: '#FC4255',
        display: 'standalone',
        icon: 'src/assets/images/SexFavIcons/AppLogo-192.png',
        icons: [
          {
            src: `/AppLogo-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/AppLogo-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/AppLogo-256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/AppLogo-180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/AppLogo-144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/AppLogo-96.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/AppLogo-72.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
        ], 
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'kynfraedsla-www',
        // 'ueno-starter-kit-universally-test', 
        linkResolver,
        previews: false, // (optional, default: false)
      }
    },
  ],
}
