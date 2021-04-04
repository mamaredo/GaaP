import * as React from "react"
import BaseBlogTemplate from "../../components/base_blog_templates"

// ______________________________________________________
//
export type BlogTemplateProps = {
  pageContext: {
    post: {
      title: string
      tag: string[]
      date: string
    }
    body: string
  }
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogTemplate: React.FC<BlogTemplateProps> = ({ pageContext }) => {
  /* logic */
  return <BaseBlogTemplate post={pageContext.post} body={pageContext.body} />
}
// ______________________________________________________
//

export default BlogTemplate
