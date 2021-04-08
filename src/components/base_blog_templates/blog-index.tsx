import * as React from "react"
import BaseBlogTag from "../base_blog_tag"


// ______________________________________________________
//
  /* types */
// ______________________________________________________
//
// ______________________________________________________
//
const BlogIndex: React.FC = () => {
  return (
    <>
    <div className="xl:fixed xl:min-w-blog-index-fixed xl:max-w-blog-index-fixed w-full shadow bg-white xl:bg-background rounded xl:rounded-none">
      <dl>
        <dt className="p-2 xl:text-xl text-base text-white bg-secondary rounded-t">
          記事内容
        </dt>
        <div className="p-2">
          <dd className="mb-1 font-extrabold xl:text-xl text-base text-black text-opacity-60">
            section01
          </dd>
          <dd className="mb-1">section02</dd>
        </div>
      </dl>
    </div>
    <div>
    
    </div>
    </>
  )
}
// ______________________________________________________
//
export default BlogIndex