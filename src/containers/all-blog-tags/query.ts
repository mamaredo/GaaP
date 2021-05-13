import { graphql, useStaticQuery } from "gatsby"

// ______________________________________________________
//
export const useAllBlogTagsQuery = () => {
  const { allContentfulBlogPost } = useStaticQuery<GatsbyTypes.AllBlogTagsQuery>(
    graphql`
    query AllBlogTags {
      allContentfulBlogPost {
        edges {
          node {
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
    `
  )
  return allContentfulBlogPost
}
// ______________________________________________________
//