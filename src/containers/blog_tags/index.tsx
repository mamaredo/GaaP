import * as React from "react"
import BaseBlogTag from "../../components/base_blog_tag"

// ______________________________________________________
//
export type BlogTagsProps = {
  style: string[]
  icon: SVGAElement | string
  tagName: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogTags: React.FC<BlogTagsProps> = ({ style, icon = "icon", tagName }) => {
  /* logic */
  return (
    <BaseBlogTag icon={icon} text={tagName} style={style} />
  )
}
// ______________________________________________________
//
export default BlogTags