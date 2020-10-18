import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout/layout';


export default ({
  data // this prop will be injected by the GraphQL query below.
}) => {
  const post = data.markdownRemark; // data.markdownRemark holds your post data
  
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
          
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
        description
      }
    }
  }
`