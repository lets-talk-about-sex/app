/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const test = require('gatsby-source-prismic-graphql');
const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
console.log(test)
const { linkResolver } = require('./src/utils/linkResolver');
registerLinkResolver(linkResolver);