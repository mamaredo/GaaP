import React from "react"
import BaseBlogIndexFab from "./base-blog-index-fab"
import "../../css/blog-index.css"


// ______________________________________________________
//
export type BaseBlogIndexProps = {
  postIndex: string
  isShow: boolean
  handleIsShow: () => void
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogIndex: React.VFC<BaseBlogIndexProps> = props => (
  <>
    <div className="lg:inline hidden">
      <h3 className="text-secondary mb-1 font-bold box-border text-base">
        記事内容
      </h3>
      <div className="border-l-4 pl-1">
        <div
          className="blog-index mb-1 font-extrabold xl:text-xl text-base text-black text-opacity-60"
          dangerouslySetInnerHTML={{ __html: props.postIndex }}
        />
      </div>
    </div>
    <div className="lg:hidden">
      <BaseBlogIndexFab
        postIndex={props.postIndex}
        isShow={props.isShow}
        handleIsShow={props.handleIsShow}
      />
    </div>
  </>
)
// ______________________________________________________
//
export default BaseBlogIndex