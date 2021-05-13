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
const BaseBlogIndex: React.VFC<BaseBlogIndexProps> = ({ postIndex }) => (
  <div className="box-border">
    <h3 className="text-primary mb-2 font-bold box-border xl:text-xl text-base">
      記事内容
    </h3>
    <div className="border-l-4 pl-2">
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