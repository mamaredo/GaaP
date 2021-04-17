import * as React from "react"
import { Link } from "gatsby"
import BaseBlogTag, { TagType } from "../base_blog_tag"


// ______________________________________________________
//
export type BlogCardType = {
  slug: string
  title: string
  date: string
}
export type BlogCardStyleType = { style?: string[] }
type BaseBlogCardProps = & TagType & BlogCardType & BlogCardStyleType
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogCard: React.FC<BaseBlogCardProps> = ({ tag, svg, style, slug, title, date }) => {
  const cardStyle = style?.join(" ")
  const tagStyle = ['bg-background']
  return (
    <div className="col-span-4">
        <div className={`shadow bg-white w-full rounded ${cardStyle}`}>
          <Link to={`/post/${slug}`}>
          {/* imageを入れる */}
          <div className="w-full min-h-image bg-pink-200 rounded-t"></div>
          {/* imageを入れる */}
          </Link>
          <div className="p-2 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-xl opacity-90">{title || '記事タイトル'}</h2>
              <p className="2xl:text-sm text-xs opacity-70">{date || '2021-03-03'}</p>
            </div>
            <div className="flex flex-row-reverse">
              <BaseBlogTag tag={tag} svg={svg} style={tagStyle} />
            </div>
          </div>
        </div>
    </div>
  )
}
// ______________________________________________________
//
export default BaseBlogCard
