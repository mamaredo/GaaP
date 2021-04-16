// const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")


// ______________________________________________________
//
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // ______________________________________________________
  //
  const blogTemplate = path.resolve(`./src/template/post-page.tsx`)
  const allPostData = await graphql(`
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
    allPostData.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `/post/${node.slug}`,
        component: blogTemplate,
        context: {
          head: {
            title: node.title,
            date: node.updatedAt,
          },
          tag: {
            tagName: node.tags?.[0],
            svg: node.svgContent?.svg.content,
          },
          image: {
            fluid: node.heroImage.fluid,
            alt: node.heroImage.title
          },
          body: node.body.childMarkdownRemark.html,
          postIndex: node.body.childMarkdownRemark.tableOfContents 
        }
      })
    })
    // ______________________________________________________
    //
    // ______________________________________________________
    //
    const tagPageTemplate = path.resolve(`./src/template/tag-page.tsx`)
    const allTagsData = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            tags
          }
        }
      }
    }
    `)
    const allTags = allTagsData.data.allContentfulBlogPost.edges.map(({node}) => node.tags[0])
    const distinctTags = allTags.filter((el, i, self) => self.indexOf(el) === i)
    distinctTags.forEach(tagName => {
      createPage({
        path: `tags/${tagName}`,
        component: tagPageTemplate,
        context: {
          tag: tagName
        }
      })
    })
    // ______________________________________________________
    //
  }
  // ______________________________________________________
  //

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