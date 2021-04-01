import * as React from "react"


// ______________________________________________________
//
type BaseBlogTagProps = {
  icon: SVGAElement | string
  text: string
  style?: string[]
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogTag: React.FC<BaseBlogTagProps> = ({icon, text, style}) => {
  const inherentStyle = style?.join(' ')
  return (
    <button className={`flex justify-center items-center rounded min-h-button ${inherentStyle}`}>
      <svg className="ml-icon w-button-icon h-button-icon bg-gray-100">{icon}</svg>
      <span className="pl-1 pr-2 font-semibold opacity-90">{text}</span>
    </button>
  )
}
// ______________________________________________________
//
export default BaseBlogTag
