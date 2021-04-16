import * as React from "react"
import { TagPageProps } from "../../template/tag-page"
import BaseTagPageHeading from "../../components/base_tag_page_heading"


// ______________________________________________________
//
type TagPageHeadingProps = {
  heading: TagPageProps['pageContext']['heading']
}
// ______________________________________________________
//
// ______________________________________________________
//
const TagPageHeading: React.FC<TagPageHeadingProps> = ({ heading }) => {
  const { tag, svg, postCount } = heading
  return <BaseTagPageHeading tag={tag} icon={svg} postCount={postCount} />
}
// ______________________________________________________
//
export default TagPageHeading