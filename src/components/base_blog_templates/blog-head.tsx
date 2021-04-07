import * as React from "react"
import HeroImage from "./hero-image"
import { BaseBlogTemplateProps } from "./index"


// ______________________________________________________
//
type BlogHeadProps = {
  title: BaseBlogTemplateProps["post"]["title"]
  date: BaseBlogTemplateProps["post"]["date"]
  image: BaseBlogTemplateProps["image"]
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogHead: React.FC<BlogHeadProps> = ({ title, date, image }) => {
  return (
    <React.Fragment>
      <span className="text-black text-opacity-50">{date}</span>
      <div className="mt-1 w-full">
        <h2 className="text-black text-opacity-90 xl:text-5xl md:text-4xl text-3xl font-black">
          {title}
        </h2>
      </div>
      <HeroImage image={image} />
    </React.Fragment>
  )
}
// ______________________________________________________
//
export default BlogHead