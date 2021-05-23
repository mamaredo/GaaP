import * as React from "react"
import { Link } from "gatsby"
import BaseBlogTag, { TagType } from "../base-blog-tag"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"


// ______________________________________________________
//
export type BlogCardType = {
  slug: string
  image: IGatsbyImageData
  alt: string
  title: string
  date: string
}
export type BlogCardStyleType = { style?: string[] }
type BaseBlogCardProps = & TagType & BlogCardType & BlogCardStyleType
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogCard: React.VFC<BaseBlogCardProps> = props => {
  const cardStyle = props.style?.join(" ")
  const tagStyle = ['bg-background']
  return (
    <div className="col-span-4">
        <div className={`shadow bg-white w-full rounded ${cardStyle}`}>
          <Link to={`/post/${props.slug}`}>
          <div className="w-full min-h-image rounded-t">
            <GatsbyImage
              className="min-h-image rounded-t"
              image={props.image}
              alt={props.alt}
              objectFit="cover"
            ></GatsbyImage>
          </div>
          </Link>
          <div className="p-2 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-xl opacity-90">{props.title || '記事タイトル'}</h2>
              <p className="2xl:text-sm text-xs opacity-70">{props.date || '2021-03-03'}</p>
            </div>
            <div className="flex flex-row-reverse">
              <BaseBlogTag tag={props.tag} svg={props.svg} style={tagStyle} />
            </div>
          </div>
        </div>
    </div>
  )
}
// ______________________________________________________
//
export default BaseBlogCard
