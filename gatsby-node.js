// const { createFilePath } = require("gatsby-source-filesystem")
// const path = require("path")


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