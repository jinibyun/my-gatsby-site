import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby';

/*
Using GraphQL queries in page components uses a slightly different syntax from queries in building-block components. In page components, you use page queries.
*/

// TODO: why starage file name is showing from blog folder??
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
            </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

// when building, (not running) outside query is automatically run and get result, then the result will be passed into the component as a 'data' prop. (this is also automatical)
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
          id
        }
      }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage