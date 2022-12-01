const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/assets/components/Layout/post.js`)
  const result = await graphql(
    `
      query CMSpage {
        allDatoCmsArticle {
          nodes {
            id
            title
          }
        }
      }
    `,
    { limit: 1000 }
  )
  // Create blog post pages.
  result.data.allDatoCmsArticle.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.title, {
      lower: true,
    })

    createPage({
      // Path for this page — required
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
        // Add optional context data to be inserted
        // as props into the page component.
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    })
  })
}
