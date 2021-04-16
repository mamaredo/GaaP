import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type siteMetadata = {
  site: {
    siteMetadata: {
      title?: string,
      description?: string,
    }
  }
}

const query = graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `

const SEO: React.FC = () => {
  const { site }: siteMetadata = useStaticQuery(query)
  return (
    <Helmet>
      <html lang="jp" />
      <meta charSet="utf-8" />
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  )
}

export default SEO