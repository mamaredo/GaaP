import * as React from "react"
import BaseTagPageHeading, { BaseTagPageHeadingProps } from "../../components/base_tag_page_heading"


// ______________________________________________________
//
export type TagPageHeadingProps = {
  heading: BaseTagPageHeadingProps
}
// ______________________________________________________
//
// ______________________________________________________
//
const TagPageHeading: React.FC<TagPageHeadingProps> = ({ heading }) => {
  const { tag, svg, postCount } = heading
  return <BaseTagPageHeading tag={tag} svg={svg} postCount={postCount} />
}
// ______________________________________________________
//
export default TagPageHeading