import { graphql, useStaticQuery } from 'gatsby'

// ______________________________________________________
//
export const useAvatarQuery = () => {
  const { contentfulProfile } = useStaticQuery<GatsbyTypes.AvatarQuery>(
    graphql`
      query Avatar {
        contentfulProfile {
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
