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
                allArticles(first:100){
                  totalCount
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
              				hot
                      small_card{
                        link_to_article{
                          ... on PRISMIC_Article{
                            title
                            article_img
                            _meta{
                              uid
                            }
                            link{
                              _linkType
                            }
                          }
                        }
                      }
                      link{
                        ... on PRISMIC_Article{
                          title
                          article_img
                          _meta {
                            uid
                          }
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
                        ... on PRISMIC_ArticleBodySubtitle{
                          type
                          primary{
                            subtitle
                          }
                        }
                        ... on PRISMIC_ArticleBodyLinks{
                          type
                          primary{
                            title1
                        		link3 {
                              ... on PRISMIC__ExternalLink{
                                url
                              }
                            }
                          }
                        }             
												... on PRISMIC_ArticleBodyVideo{
                          type
                          primary{
                          	link2
                          }
                        }
                        ... on PRISMIC_ArticleBodyContent{
                          type
                          primary{
                            content
                          }
                        }
                       ... on PRISMIC_ArticleBodyRepeat{
                          type
                          primary{
                            repeat{
                              __typename
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
          console.log("creatpages", result.data.prismic.allArticles.totalCount)
          console.log('#############################');
          if (result.errors) {
            reject(result.errors)
          }
          
          // Create pages for each markdown file.
          result.data.prismic.allArticles.edges.forEach(({ node }) => {
            console.log(node._meta.uid)
            createPage({
              path: node._meta.uid,
              component: articleTemplate,
              // In your blog post template's graphql query, you can use path
              // as a GraphQL variable to query for data from the markdown file.
              context: {
                node,
                limit: 100
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