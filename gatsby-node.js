const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: {fields: [date]}) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "MM-DD-YYYY")
            author {
              node{
                name
              }
            }
          }
        }
      }
    }
  `).then(result => { 
    result.data.allWpPost.edges.forEach(({ node }) => {
        // The first step after pulling all posts from the WordPress source is to instruct Gatsby to create a page for each post. This is an action that is completed using the createPage action.
        //After pulling the data from GraphQL, the code creates a page for each post
      createPage({
        // Decide URL structure
        path: `/wp/${node.slug}`,
        // path to template
        component: path.resolve(`./src/pages/wp/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
};