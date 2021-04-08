import * as React from "react"
import { BaseBlogTemplateProps } from "./index"
import "../../css/blog-index.css"
import BaseBlogTag from "../base_blog_tag"


// ______________________________________________________
//
type BlogIndexProps = {
  postIndex: BaseBlogTemplateProps["postIndex"]
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogIndex: React.FC<BlogIndexProps> = ({ postIndex }) => {
  return (
    <>
    <div className="xl:fixed xl:min-w-blog-index-fixed xl:max-w-blog-index-fixed w-full shadow bg-white xl:bg-background rounded xl:rounded-none">
      <h3 className="p-2 xl:px-3 xl:text-xl text-base text-white bg-secondary rounded-t">
        記事内容
      </h3>
      <div className="p-2 xl:pl-3">
        <div
          className="blog-index mb-1 font-extrabold xl:text-xl text-base text-black text-opacity-60"
          dangerouslySetInnerHTML={{ __html: postIndex }}
        />
      </div>
    </div>
    <div>
    
    </div>
    </>
  )
}
// ______________________________________________________
//
export default BlogIndex