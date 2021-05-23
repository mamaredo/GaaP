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
              heroImage {
                gatsbyImageData(
                  layout: CONSTRAINED,
                  placeholder: BLURRED,
                  aspectRatio: 1.33
                )
                title
              }
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