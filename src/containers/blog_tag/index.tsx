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
  const inherentStyle = style?.join(' ')
  return (
    <BaseBlogTag icon={icon} tagName={tagName} inherentStyle={inherentStyle} />
  )
}
// ______________________________________________________
//
export default BlogTag