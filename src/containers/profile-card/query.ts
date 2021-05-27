import { graphql, useStaticQuery } from "gatsby"


// ______________________________________________________
//
export const useProfileQuery = () => {
  const { contentfulProfile } = useStaticQuery<GatsbyTypes.ProfileQuery>(
    graphql`
      query Profile {
        contentfulProfile {
          name
          bio {
            childrenMarkdownRemark {
              html
            }
          }
          twitter
          gitHub
          contact
          icon {
            gatsbyImageData(
              aspectRatio: 1
              formats: AUTO
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )
  return contentfulProfile
}
// ______________________________________________________
//