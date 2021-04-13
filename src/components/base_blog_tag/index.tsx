import * as React from "react"
import { BlogTagProps } from "../../containers/blog_tag"


// ______________________________________________________
//
type BaseBlogTagProps = {
  icon: BlogTagProps['icon']
  tagName: BlogTagProps['tagName']
  inherentStyle?: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogTag: React.FC<BaseBlogTagProps> = ({ icon, tagName, inherentStyle }) => (
  <button className={`flex justify-center items-center rounded min-h-button ${inherentStyle}`}>
    <div className="ml-icon min-w-tag" dangerouslySetInnerHTML={{ __html: icon }} />
    <span className="pl-1 pr-2 text-sm font-extrabold opacity-90">{tagName}</span>
  </button>
)
// ______________________________________________________
//
export default BaseBlogTag
