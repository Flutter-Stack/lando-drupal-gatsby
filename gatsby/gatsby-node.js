/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Based on
// https://www.ryanbateman.space/blog/tutorial-gatsbyjs-for-drupalers-or-how-to-jamstack-ify-your-drupal-site-with-gatsbyjs/

const path = require(`path`);
const transliteration = require(`transliteration`);

// Create a slug for each article and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node__article`) {
    const slugFragment = transliteration.slugify(node.title)
    const slug = `/blog/${slugFragment}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Implement the Gatsby API "createPages". This is called once the data layer
// is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/blog_post.js`)
    // Query for article nodes to use in creating pages.
    resolve(
      graphql(
	`
	  {
	    allNodeArticle {
	      edges {
		node {
		  title
		  fields {
		    slug
		  }
		}
	      }
	    }
	  }
	`
      ).then (result => {
	if (result.errors) {
	  reject(result.errors)
	}

	// Create a page for each article.
	result.data.allNodeArticle.edges.forEach(({ node }) => {
	  createPage({
	    path: node.fields.slug,
	    component: postTemplate,
	    context: {
	      slug: node.fields.slug,
	    },
	  })
	})
      })
    )
  })
}
