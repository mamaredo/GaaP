import * as React from "react"
import { PostPageProps } from "../../template/post-page"
import BaseBlogIndex from "../../components/base_blog_index"


// ______________________________________________________
//
type BlogIndexProps = {
  postIndex: PostPageProps['pageContext']['postIndex']
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogIndex: React.FC<BlogIndexProps> = ({ postIndex }) => {
  return (
    <BaseBlogIndex postIndex={postIndex} />
  )
}
// ______________________________________________________
//
export default BlogIndex