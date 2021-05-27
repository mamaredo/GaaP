import { graphql, useStaticQuery } from "gatsby"


// ______________________________________________________
//
export const useMetadataQuery = () => {
  const { site } = useStaticQuery<GatsbyTypes.MetadataQuery>(
    graphql`
    query Metadata {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
        }
      }
    }
  `
  )
  return site
}
// ______________________________________________________
//