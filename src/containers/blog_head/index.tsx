import * as React from "react"
import { PostPageProps } from "../../template/post-page"
import BaseBlogHead from "../../components/base_blog_head"


// ______________________________________________________
//
type BlogHeadProps = {
  head: PostPageProps['pageContext']['head']
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogHead: React.FC<BlogHeadProps> = ({ head }) => {
  /* Logic */
  const { date, title } = head
  return (<BaseBlogHead date={date} title={title} />)
}
// ______________________________________________________
//
export default BlogHead