import React from "react"
import { BaseBlogIndexProps } from "../index"
import "../../../css/blog-fab-index.css"


// ______________________________________________________
//
type FabContentProps = {
  postIndex: BaseBlogIndexProps["postIndex"]
  handleIsShow: BaseBlogIndexProps["handleIsShow"]
}
// ______________________________________________________
//
// ______________________________________________________
//
const FabContent: React.VFC<FabContentProps> = ({ postIndex, handleIsShow }) => (
  <div
    className="flex flex-col fixed w-full h-full bottom-0 right-0 z-top"
    onClick={handleIsShow}
  >
    <div
      className="flex flex-col box-border w-1/2 p-2 mt-auto ml-auto mb-1 mr-1 bg-background shadow-lg rounded-md"
      onClick={e => e.stopPropagation()}
    >
      <div
        className="blog-fab-index inline-block mb-1 font-extrabold xl:text-xl text-base text-black text-opacity-60"
        dangerouslySetInnerHTML={{ __html: postIndex }}
        onClick={handleIsShow}
      />
      <button
        className="px-2 leading-9 font-bold bg-secondary text-white rounded-md"
        onClick={handleIsShow}
      >
        CLOSE
      </button>
    </div>
  </div>
)
// ______________________________________________________
//
export default React.memo(FabContent)