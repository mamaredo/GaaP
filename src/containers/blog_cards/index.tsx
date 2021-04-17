import * as React from "react"
import { TagType } from "../../components/base_blog_tag"
import BaseBlogCard, { BlogCardType } from "../../components/base_blog_card"


// ______________________________________________________
//
export type BlogCardsType = {
  blogCardInfo: BlogCardType[]
}
export type BlogCardsProps = TagType & BlogCardsType
// ______________________________________________________
//
// ______________________________________________________
//
const BlogCards: React.FC<BlogCardsProps> = ({ tag, svg, blogCardInfo }) => {
  return (
    <>
    {
      blogCardInfo.map((el, index) => (
          <BaseBlogCard
            key={index}
            slug={el.slug}
            title={el.title}
            date={el.date}
            svg={svg}
            tag={tag}
          />
        )
      )
    }
    </>
  )
}
// ______________________________________________________
//
export default BlogCards
