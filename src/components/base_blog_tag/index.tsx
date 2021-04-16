import * as React from "react"
import { Link } from "gatsby"


// ______________________________________________________
//
type BaseBlogTagProps = {
  icon: string
  tagName: string
  inherentStyle?: string[]
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogTag: React.FC<BaseBlogTagProps> = ({ icon, tagName, inherentStyle }) => {
  const style = inherentStyle?.join(' ')
  return (
    <Link
      className={`flex justify-center items-center rounded min-h-button ${style}`}
      to={`/tags/${tagName}`}
    >
      <div className="ml-icon min-w-tag" dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="pl-1 pr-2 text-sm font-extrabold opacity-90">{tagName}</span>
    </Link>
  )
}
// ______________________________________________________
//
export default BaseBlogTag
