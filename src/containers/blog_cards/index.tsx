import * as React from "react"
// import { useBlogIndexQuery } from "./query"
import BaseBlogCard from "../../components/base_blog_card"

// ______________________________________________________
//
const BlogCards: React.FC = () => {
  // const { edges } = useBlogIndexQuery()
  return (
    <>
      {/* {edges.map(({ node }, index) => {
        return (
          <BaseBlogCard
            key={index}
            frontmatter={node?.frontmatter}
            slug={node.fields?.slug}
          />
        )
      })} */}
      <BaseBlogCard />
    </>
  )
}
// ______________________________________________________
//
export default BlogCards
