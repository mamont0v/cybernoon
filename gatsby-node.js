/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode}) //...getNode, basePath: `pages`})
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    
    return await graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    id
                    fields {
                        slug
                         
                    }
                }
            }
        }
    }`).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blogTemplate.js`),
                context: {
                     // additional data can be passed via context
                    slug: node.fields.slug,
                }
            })
        })
    })
}