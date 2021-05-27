import * as React from "react"
import { Link } from "gatsby"
import BlogCardHeroImage, { HeroImageType } from "./blog-card-hero-image"
import BlogCardTitle from "./blog-card-title"
import BaseBlogTag, { TagType } from "../base-blog-tag"


// ______________________________________________________
//
export type BlogCardType = {
  slug: string
  title: string
  date: string
} & HeroImageType
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
      <Link to={`/post/${props.slug}`}>
      <div className={`shadow bg-white w-full rounded ${cardStyle}`}>
        <div className="w-full min-h-image rounded-t">
          <BlogCardHeroImage image={props.image} alt={props.alt} />
        </div>
        <div className="p-2 flex flex-col">
          <div className="flex justify-between items-center">
            <BlogCardTitle title={props.title} />
            <p className="2xl:text-sm text-xs opacity-60">
              {props.date || '2021-03-03'}
            </p>
          </div>
          <div className="flex flex-row-reverse">
            <BaseBlogTag tag={props.tag} svg={props.svg} style={tagStyle} link={false} />
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}
// ______________________________________________________
//
export default BaseBlogCard
