import * as React from "react"
import { PostPageProps } from "../../template/post-page"
import BaseBlogTag from "../../components/base_blog_tag"


// ______________________________________________________
//
type BlogTagProps = {
  tag: PostPageProps['pageContext']['tag']
  style?: string[]
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogTag: React.FC<BlogTagProps> = ({ tag, style }) => {
  /* logic */
  const { tagName, svg } = tag
  return (
    <BaseBlogTag icon={svg} tagName={tagName} inherentStyle={style} />
  )
}
// ______________________________________________________
//
export default BlogTag