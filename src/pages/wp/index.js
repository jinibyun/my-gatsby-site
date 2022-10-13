import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql , Link} from 'gatsby';

/*
Using GraphQL queries in page components uses a slightly different syntax from queries in building-block components. In page components, you use page queries.
*/

const WordPressBlog = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h4>WordPress Posts</h4>
      {data.allWpPost.edges.map(({ node }) => (
        <div>
          <Link to={`/wp/${node.slug}`}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

// when building, (not running) outside query is automatically run and get result, then the result will be passed into the component as a 'data' prop. (this is also automatical)
export const query = graphql`
query {
  allWpPost(sort: {fields: date}) {
    edges {
      node {
        title
        content
        date
        slug
        id
        excerpt
      }
    }
  }
}
`;

export const Head = () => <Seo title="Wordpress Blog Posts" />

export default WordPressBlog