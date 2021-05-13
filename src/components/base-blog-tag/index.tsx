import * as React from "react"
import { Link } from "gatsby"


// ______________________________________________________
//
export type TagType = {
  svg: string
  tag: string
}
export type StyleType = { style?: string[] }
type BaseBlogTagProps = TagType & StyleType
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogTag: React.FC<BaseBlogTagProps> = ({ svg, tag, style }) => {
  const inherentStyle = style?.join(' ')
  return (
    <Link
      className={`flex justify-center items-center rounded min-h-button ${inherentStyle}`}
      to={`/tags/${tag}`}
    >
      <div className="ml-icon min-w-tag" dangerouslySetInnerHTML={{ __html: svg }} />
      <span className="pl-1 pr-2 text-sm font-extrabold opacity-90">{tag}</span>
    </Link>
  )
}
// ______________________________________________________
//
export default BaseBlogTag
