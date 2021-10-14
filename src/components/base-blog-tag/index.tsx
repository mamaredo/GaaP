import React from "react"
import { Link } from "gatsby"


// ______________________________________________________
//
export type TagType = {
  svg: string
  tag: string
}
export type StyleType = { style?: string[] }
type BaseBlogTagProps = TagType & StyleType & { link?: boolean }
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogTag: React.FC<BaseBlogTagProps> = ({ svg, tag, style, link = true }) => {
  const inherentStyle = style?.join(' ')
  return (
    <>
    {
      link
      ?
      <LinkTag tag={tag} style={inherentStyle}>
        <TagElement svg={svg} tag={tag} />
      </LinkTag>
      :
      <NormalTag style={inherentStyle}>
        <TagElement svg={svg} tag={tag} />
      </NormalTag>
    }
    </>
  )
}
// ______________________________________________________
//
export default BaseBlogTag
// ______________________________________________________
//
const LinkTag: React.FC<{tag: string, style?:string}> = ({ tag, style = '', children }) => (
  <Link
    className={`flex justify-center items-center rounded min-h-button ${style}`}
    to={`/tags/${tag}`}
  >
    {children}
  </Link>
)
const NormalTag: React.FC<{ style?: string }> = ({style = '' ,children}) => (
  <div
    className={`flex justify-center items-center rounded min-h-button ${style}`}
  >
    {children}
  </div>
)
const TagElement = ({svg, tag}: {svg: string, tag: string}): JSX.Element => (
  <>
    <div className="ml-icon min-w-tag" dangerouslySetInnerHTML={{ __html: svg }} />
    <span className="pl-1 pr-2 text-sm font-extrabold opacity-90">{tag}</span>
  </>
)
// ______________________________________________________
//
