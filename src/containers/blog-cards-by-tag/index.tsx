import * as React from 'react'
import { TagType } from '@/components/ui/base-blog-tag'
import BaseBlogCard, { BlogCardType } from '../../components/ui/base-blog-card'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// ______________________________________________________
//
export type BlogCardsByTagType = {
  blogCardInfo: BlogCardType[]
}
export type BlogCardsByTagProps = TagType & BlogCardsByTagType
// ______________________________________________________
//
// ______________________________________________________
//
const BlogCardsByTag: React.FC<BlogCardsByTagProps> = ({
  tag,
  svg,
  blogCardInfo,
}) => {
  return (
    <>
      {blogCardInfo.map((el, index) => (
        <BaseBlogCard
          key={index}
          image={el.image as IGatsbyImageData}
          alt={el.alt}
          slug={el.slug}
          title={el.title}
          date={el.date}
          svg={svg}
          tag={tag}
        />
      ))}
    </>
  )
}
// ______________________________________________________
//
export default BlogCardsByTag
