import * as React from 'react';
import Layout from '../../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';

// Gatsby passes in the results from your page query into your page component as a data prop. The actual MDX content, ready to render, will be passed as a children prop to the page component.
const BlogPost = ({ data, children }) => {

  // getImage is a helper function that takes in a File node or an ImageSharp node and returns the gatsbyImageData object for that node. You can use it to keep your code a little cleaner and easier to read
  // Without the getImage helper function, you’d have to type out data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData (which is longer, but gives you back the same data).
  const image = getImage(data.mdx.frontmatter.hero_image);


// When you use Gatsby’s File System Route API, it "automatically" adds some props into the page template component for each page:

// Under the hood, Gatsby makes both of these values available to use as query variables in your page queries

//console.log(props);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost