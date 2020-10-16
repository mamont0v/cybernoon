import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
text-decoration: none;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to = {node.fields.slug}>
            <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
          </BlogLink>
        </div>
      ))
    }
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link k to="/page-2/">Go to page 2</Link> <br />

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)


export const query = graphql`
query {
  allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
    totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`