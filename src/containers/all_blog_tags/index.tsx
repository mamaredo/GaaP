import * as React from "react"
import BaseBlogTag from "../../components/base_blog_tag"
import { useAllBlogTagsQuery } from "./query"

// ______________________________________________________
//
// ______________________________________________________
//
// ______________________________________________________
//
const AllBlogTags: React.FC = () => {
  /* logic */
  const style = ['shadow']
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
            icon={el.icon || ''}
            tagName={el.tag || 'TAGNAME'}
            inherentStyle={style}
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