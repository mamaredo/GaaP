import * as React from "react"


// ______________________________________________________
//
  /* types */
// ______________________________________________________
//
// ______________________________________________________
//
const BlogIndex: React.FC = () => {
  return (
    <div className="xl:fixed p-3 xl:p-0 w-full shadow xl:shadow-none bg-white xl:bg-background rounded xl:rounded-none">
      <dl>
        <dt className="mb-2 text-xl text-black xl:font-medium text-opacity-90">
          記事内容
        </dt>
        <div className="xl:border-l-2 xl:py-1 xl:pl-1">
          <dd className="mb-1">section01</dd>
          <dd className="mb-1">section02</dd>
        </div>
      </dl>
    </div>
  )
}
// ______________________________________________________
//
export default BlogIndex