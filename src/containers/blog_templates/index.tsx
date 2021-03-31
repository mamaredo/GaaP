import * as React from "react"
import BaseBlogTemplate from "../../components/base_blog_templates"

// ______________________________________________________
//
export type BlogTemplateProps = {
  pageContext: {
    title: string
    date: string
    tag: string
  }
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogTemplate: React.FC<BlogTemplateProps> = ({ pageContext }) => {
  /* logic */
  return <BaseBlogTemplate frontmatter={pageContext} />
}
// ______________________________________________________
//

export default BlogTemplate
