import React, { useState } from "react"
import { PostPageProps } from "../../template/post-page"
import BaseBlogIndex from "../../components/base-blog-index"


// ______________________________________________________
//
type BlogIndexProps = {
  postIndex: PostPageProps['pageContext']['postIndex']
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogIndex: React.VFC<BlogIndexProps> = ({ postIndex }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <BaseBlogIndex
      postIndex={postIndex}
      isShow={isShow}
      handleIsShow={() => setIsShow(!isShow)}
    />
  )
}
// ______________________________________________________
//
export default React.memo(BlogIndex)