import React from "react"
import { BaseBlogIndexProps } from "../index"


// ______________________________________________________
//
const FabContent: React.VFC<{postIndex: BaseBlogIndexProps["postIndex"]}> = ({ postIndex }) => (
  <div
    className="blog-index mb-1 font-extrabold xl:text-xl text-base text-black text-opacity-60"
    dangerouslySetInnerHTML={{ __html: postIndex }}
  />
)
// ______________________________________________________
//
export default FabContent