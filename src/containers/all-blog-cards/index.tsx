import * as React from "react"
import { useAllBlogPostsQuery } from "./query"
import BaseBlogCard from "../../components/base-blog-card"



// ______________________________________________________
//
const AllBlogCards: React.FC = () => {
  const { edges } = useAllBlogPostsQuery()
  return (
    <>
    {
      edges.map(({node}, index) => (
        <BaseBlogCard
          key={index}
          svg={node.svgContent?.svg?.content || ''}
          tag={node.tags?.[0] || 'TAGNAME'}
          slug={node.slug || '404'}
          title={node.title || 'Title'}
          date={node.updatedAt || 'YYYY-MM-DD'}
        />
      ))
    }
    </>
  )
}
// ______________________________________________________
//
export default AllBlogCards