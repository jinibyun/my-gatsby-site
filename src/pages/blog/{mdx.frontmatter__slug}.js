import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';

// Gatsby passes in the results from your page query into your page component as a data prop. The actual MDX content, ready to render, will be passed as a children prop to the page component.
const BlogPost = ({ data, children }) => {

// When you use Gatsby’s File System Route API, it "automatically" adds some props into the page template component for each page:

// Under the hood, Gatsby makes both of these values available to use as query variables in your page queries

//console.log(props);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost