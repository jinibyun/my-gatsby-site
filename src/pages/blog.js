import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby';

/*
Using GraphQL queries in page components uses a slightly different syntax from queries in building-block components. In page components, you use page queries.
*/

// TODO: why starage file name is showing from blog folder??
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

// when building, (not running) outside query is automatically run and get result, then the result will be passed into the component as a 'data' prop. (this is also automatical)
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
    site {
        siteMetadata {
          title
        }
    }
  }
`;

export const Head = ({ data }) => (
    <>
      <title>{data.site.siteMetadata.title}</title>
    </>
  )

export default BlogPage