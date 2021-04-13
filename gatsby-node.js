// const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/containers/blog_templates/index.tsx`)
  const { data } = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
            title
            tags
            updatedAt(formatString: "YYYY-MM-DD")
            body {
              childMarkdownRemark {
                html
                tableOfContents
              }
            }
            heroImage {
              title
              fluid(maxWidth: 1200) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
            svgContent {
              svg {
                content
              }
            }
          }
        }
      }
    }
  `)

  data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/post/${node.slug}`,
      component: blogTemplate,
      context: {
        post: {
          title: node.title,
          tag: {
            tagName: node.tags,
            svg: node.svgContent?.svg.content,
          },
          date: node.updatedAt,
        },
        image: {
          fluid: node.heroImage.fluid,
          alt: node.heroImage.title
        },
        body: node.body.childMarkdownRemark.html,
        postIndex: node.body.childMarkdownRemark.tableOfContents 
      }
    })
  });
}
// ______________________________________________________
//
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   // md file only
//   if (node.internal.type === `md`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       node,
//       name: "slug",
//       value: `/blog${value}`,
//     })
//   }
// }
// ______________________________________________________
//