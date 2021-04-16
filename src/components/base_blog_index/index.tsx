import * as React from "react"
import "../../css/blog-index.css"


// ______________________________________________________
//
export type BaseBlogIndexProps = {
  postIndex: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogIndex: React.FC<BaseBlogIndexProps> = ({ postIndex }) => (
  <div className="shadow bg-white rounded">
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
)
// ______________________________________________________
//
export default BaseBlogIndex