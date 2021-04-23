import * as React from "react"
import BaseBlogTag from "../../components/base_blog_tag"
import { useAllBlogTagsQuery } from "./query"


// ______________________________________________________
//
const AllBlogTags: React.FC = () => {
  const style = ['shadow', 'bg-white']
  const { edges } = useAllBlogTagsQuery()
  const allTags = edges.map(el => ({
    icon: el.node.svgContent?.svg?.content,
    tag: el.node.tags?.[0]
  }))
  const distinctTags = allTags.filter((el, i, self) => self.findIndex(e => e.tag === el.tag) === i)
  return (
    <>
    {
      distinctTags.map((el, index) => (
        <div className='mr-2' key={index}>
          <BaseBlogTag
            svg={el.icon || ''}
            tag={el.tag || 'TAGNAME'}
            style={style}
          />
        </div>
      ))
    }
    </>
  )
}
// ______________________________________________________
//
export default AllBlogTags