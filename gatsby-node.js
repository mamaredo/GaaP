// const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")


// ______________________________________________________
//
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // ______________________________________________________
  //
  /* ブログ記事のページを作成 */
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
          tagInfo: {
            tag: node.tags?.[0],
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
    /* タグごとのページを作成 */
    const tagPageTemplate = path.resolve(`./src/template/tag-page.tsx`)
    const allTagsData = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
            title
            updatedAt(formatString: "YYYY-MM-DD")
            tags
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
    const allTags = allTagsData.data.allContentfulBlogPost.edges.map(({node}) => {
      return {
        tag: node.tags[0],
        svg: node.svgContent?.svg.content || 'Non image'
      }
    })
    const allBlogCardInfo = allTagsData.data.allContentfulBlogPost.edges.map(({node}) => {
      return {
        tag: node.tags[0],
        slug: node.slug,
        title: node.title,
        date: node.updatedAt,
      }
    })
    const distinctTags = allTags.filter((el, i, self) => self.findIndex(e => e.tag === el.tag) === i)
    /* タグごとの投稿数を含んだ配列を作成 */
    const postForEachTagsData = distinctTags.map(el => {
      const postCount = allTags.filter(e => el.tag === e.tag).length
      return {
        ...el,
        postCount
      }
    })
    postForEachTagsData.forEach(el => {
      const blogCardInfo = allBlogCardInfo.filter(e => el.tag === e.tag)
      createPage({
        path: `tags/${el.tag}`,
        component: tagPageTemplate,
        context: {
          tag: el.tag,
          svg: el.svg,
          postCount: el.postCount,
          blogCardInfo: blogCardInfo
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