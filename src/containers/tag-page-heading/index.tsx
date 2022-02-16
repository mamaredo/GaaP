import React from 'react'
import BaseTagPageHeading, {
  BaseTagPageHeadingProps,
} from '@/components/ui/base-tag-page-heading'

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
