import * as React from "react"
import BaseBlogTag from "../../components/base_blog_tag"


// ______________________________________________________
//
export type BlogTagProps = {
  icon: string
  tagName: string
  style?: string[]
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogTag: React.FC<BlogTagProps> = ({ icon, tagName, style }) => {
  /* logic */
  return (
    <BaseBlogTag icon={icon} tagName={tagName} inherentStyle={style} />
  )
}
// ______________________________________________________
//
export default BlogTag