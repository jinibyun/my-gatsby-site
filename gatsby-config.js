module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description: `Kick off your next, great Gatsby project with this
    default starter. This barebones starter ships with the main Gatsby
    configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
			resolve: `gatsby-source-wordpress`,
		  options: {
				// Specify the URL of the WordPress source
        url: 'http://18.217.14.238:10004/graphql',
        protocol: 'http',
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        //acfOptionPageIds: [],
        //verboseOutput: false,
        //perPage: 100,
        //searchAndReplaceContentUrls: {
        //  sourceUrl: 'https://gatsbypress.iamtimsmith.com',
        //  replacementUrl: 'https://localhost:8000',
        //},
        // Set how many simultaneous requests are sent at once.
        //concurrentRequests: 10,
        // Specify which URL structures to fetch
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
        ],
        //excludedRoutes: [],
        //normalizer: function ({ entities }) {
        //  return entities;
        //},
			},
		},
  ],
};/*  */