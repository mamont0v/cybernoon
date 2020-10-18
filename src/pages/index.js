import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"


import Layout from "../components/layout/layout"
import Image from "../components/image/image"
import SEO from "../components/seo/seo"
import BannerMain from "../components/banner-on-main-page/bannerMain.component"


const BlogLink = styled(Link)`
text-decoration: none;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BannerMain/>
    <h1>Все новости</h1>
    <h4>Постов всего - {data.allMarkdownRemark.totalCount}</h4>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to = {node.fields.slug}>
            <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
          </BlogLink>
        </div>
      ))
    }
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
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`