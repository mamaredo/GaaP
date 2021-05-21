import React from "react"
import FabContent from "./fab-content"
import { BaseBlogIndexProps } from "../index"


// ______________________________________________________
//
const BaseBlogIndexFab: React.VFC<BaseBlogIndexProps> = ({ postIndex, isShow, handleIsShow}) => (
  <>
    <button
      className="
        fixed
        bottom-2 right-2
        flex items-center justify-center
        w-7 h-7
        rounded-full
        focus:outline-none
        bg-secondary
        shadow-md
        z-20
      "
      onClick={handleIsShow}
    >
      <img src={`../../../list-white-24dp.svg`} alt="blog-index-fab" />
    </button>
    <div style={{ display: isShow ? 'inline' : 'none' }}>
      <FabContent
        postIndex={postIndex}
        handleIsShow={handleIsShow}
      />
    </div>
  </>
)
// ______________________________________________________
//
export default BaseBlogIndexFab