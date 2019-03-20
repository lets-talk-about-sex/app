const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-source-prismic-graphql-preview-page-js": hot(preferDefault(require("/Users/ragnhildurrosgudmundsdottir/Desktop/lets_talk/app/node_modules/gatsby-source-prismic-graphql/PreviewPage.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ragnhildurrosgudmundsdottir/Desktop/lets_talk/app/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/ragnhildurrosgudmundsdottir/Desktop/lets_talk/app/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/ragnhildurrosgudmundsdottir/Desktop/lets_talk/app/src/pages/about.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/ragnhildurrosgudmundsdottir/Desktop/lets_talk/app/src/pages/index.tsx")))
}

