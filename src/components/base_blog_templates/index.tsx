import * as React from "react"
import { BlogTemplateProps } from "../../containers/blog_templates"

import Layout from "../layout"

// ______________________________________________________
//
type BaseBlogTemplateProps = {
  frontmatter: BlogTemplateProps["pageContext"]
}
// ______________________________________________________
//
const BaseBlogTemplate: React.FC<BaseBlogTemplateProps> = ({ frontmatter }) => {
  const { title, date, tag } = frontmatter
  return (
    <Layout>
      <div>
        aa
        <h2>{title}</h2>
        <p>{tag}</p>
        <p>{date}</p>
      </div>
    </Layout>
  )
}
// ______________________________________________________
//
export default BaseBlogTemplate
