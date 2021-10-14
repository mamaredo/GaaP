import React from 'react'
import BaseSEO, { MetadataType } from '../../components/base-seo'
import { useMetadataQuery } from './query'


// ______________________________________________________
//
const SEO: React.VFC<MetadataType> = props => {
  const site = useMetadataQuery()
  const {
    title,
    description
  } = props
  const meta = {
    title: title
    ? `${title} | ${site?.siteMetadata?.defaultTitle}`
    : site?.siteMetadata?.defaultTitle,
    description: description || site?.siteMetadata?.defaultDescription
  }
  return (
    <BaseSEO title={meta.title} description={meta.description} siteUrl={site?.siteMetadata?.siteUrl} />
  )
}
// ______________________________________________________
//
export default SEO