import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


// ______________________________________________________
//
type Metadata = {
  title?: string
  description?: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const SEO: React.VFC<Metadata> = ({ title, description }) => {
  const { site } = useStaticQuery<GatsbyTypes.MetadataQuery>(query)
  const meta = {
    title: title
    ? `${title} | ${site?.siteMetadata?.defaultTitle}`
    : site?.siteMetadata?.defaultTitle,
    description: description || site?.siteMetadata?.defaultDescription
  }
  return (
    <Helmet>
      <html lang="jp" />
      <meta charSet="utf-8" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>
  )
}
// ______________________________________________________
//
export default SEO
// ______________________________________________________
//
const query = graphql`
    query Metadata {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
        }
      }
    }
  `
// ______________________________________________________
//