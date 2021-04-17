import { graphql, useStaticQuery } from "gatsby"


// ______________________________________________________
//
export const useAllBlogPostsQuery = () => {
  const { allContentfulBlogPost } = useStaticQuery<GatsbyTypes.AllBlogPostsQuery>(
    graphql`
      query AllBlogPosts {
        allContentfulBlogPost {
          edges {
            node {
              tags
              svgContent {
                svg {
                  content
                }
              }
              slug
              title
              updatedAt(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    `
  )
  return allContentfulBlogPost
}
// ______________________________________________________
//