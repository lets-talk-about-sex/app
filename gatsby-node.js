/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      const articleTemplate = path.resolve(`src/template/article/article-template.js`)
      // Query for markdown nodes to use in creating pages.
      resolve(
        graphql(
            `
            query {
              prismic {
                allArticles{
                  edges{
                    node
                    { 
                      _meta{
                        uid
                        tags
                      }
                      
                      title
                      article_img
                      synonyms
                      intro_text
                      small_card{
                        link_to_article{
                          ... on PRISMIC_Article{
                            title
                            article_img
                          }
                        }
                      }
                      link{
                        ... on PRISMIC_Article{
                          title
                          article_img
                        }
                      }
                                    body {
                        ... on PRISMIC_ArticleBodyContent___heading {
                          type
                          primary {
                            subheading
                            text
                          }
                        }
<<<<<<< HEAD
=======
                        ... on PRISMIC_ArticleBodyContent{
                          type
<<<<<<< HEAD
=======
                         
>>>>>>> 3148e28ea4ad0e2afa07103a21d1869dee276f39
                        }
>>>>>>> f6aad304ece93a926e53b64c83c87f7ca5f172c2
                       ... on PRISMIC_ArticleBodyRepeat{
                          type
                          primary{
                            repeat{
                              ... on PRISMIC_Did_you_know{
                                didyouknow 
                              }
                           		... on PRISMIC_Facts{
                                fact
                              }
                            }
                          }
                        }
                        ... on PRISMIC_ArticleBodyMedia {
                          type
                          primary {
                            media {
                                    __typename
                              ... on PRISMIC__ImageLink {
                                name
                                url
                                height
                                width
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          console.log('#############################');
          console.log("creatpages", result)
          console.log('#############################');
          if (result.errors) {
            reject(result.errors)
          }
       
          // Create pages for each markdown file.
          result.data.prismic.allArticles.edges.forEach(({ node }) => {
            createPage({
              path: node._meta.uid,
              component: articleTemplate,
              // In your blog post template's graphql query, you can use path
              // as a GraphQL variable to query for data from the markdown file.
              context: {
                node
              },
            })
          })
        })
      )
      const aboutTemplate = path.resolve(`src/pages/about.js`)
      createPage({
        path: "about",
        component: aboutTemplate,
      })
    })
  }