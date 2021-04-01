import * as React from "react"
import BaseBlogTag from "../../components/base_blog_tag"

// ______________________________________________________
//
  /* type */
// ______________________________________________________
//
// ______________________________________________________
//
const BlogTags: React.FC = () => {
  /* logic */
  const style: string[] = ['bg-white']
  const text: string = 'TAG NAME'
  return (
    <BaseBlogTag icon={'icon'} text={text} style={style} />
  )
}
// ______________________________________________________
//
export default BlogTags