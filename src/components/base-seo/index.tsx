import React from 'react'
import { Helmet } from 'react-helmet'


// ______________________________________________________
//
export type MetadataType = {
  title?: string
  description?: string
  siteUrl?: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseSEO: React.VFC<MetadataType> = props => {
  const {
    title,
    description,
    siteUrl
  } = props
  return (
    <Helmet>
      <html lang="jp" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="blog" />
      <meta property="og:description" content="Nishimuraの技術ブログ" />
      <meta property="og:site_name" content="GaaP" />
      <meta property="og:image" content="../../../gaap-icon.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@n1sh1mura_dev" />
    </Helmet>
  )
}
// ______________________________________________________
//
export default BaseSEO