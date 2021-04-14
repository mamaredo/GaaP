import * as React from "react"
import { BaseBlogTemplateProps } from "./index"
import "../../css/blog-index.css"
import BlogTag from "../../containers/blog_tag"


// ______________________________________________________
//
type BlogIndexProps = {
  postIndex: BaseBlogTemplateProps["postIndex"]
  tag: BaseBlogTemplateProps["post"]["tag"]
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogIndex: React.FC<BlogIndexProps> = ({ postIndex, tag }) => {
  const { svg } = tag
  return (
    <>
    <div className="xl:fixed xl:min-w-blog-index-fixed xl:max-w-blog-index-fixed w-full">
      <div className="shadow bg-white xl:bg-background rounded xl:rounded-none">
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
      <div className="mt-3">
        <BlogTag icon={svg} tagName={String(tag.tagName)} style={['shadow']} />
      </div>
    </div>
    </>
  )
}
// ______________________________________________________
//
export default BlogIndex