/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
// import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title: string
}

const SEO: React.FC<Props> = ({title}) => (<div>{title}</div>)
export default SEO
