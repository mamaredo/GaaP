import React from "react"
import BaseBlogTag, { TagType, StyleType } from "@components/base-blog-tag"


// ______________________________________________________
//
export type TagInfoType = {
  tagInfo: TagType
}
type BlogTagProps = TagInfoType & StyleType
// ______________________________________________________
//
// ______________________________________________________
//
const BlogTag: React.VFC<BlogTagProps> = ({ tagInfo, style }) => {
  /* logic */
  const { tag, svg } = tagInfo
  return (
    <BaseBlogTag svg={svg} tag={tag} style={style} />
  )
}
// ______________________________________________________
//
export default React.memo(BlogTag)