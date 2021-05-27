import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"


// ______________________________________________________
//
export type HeroImageType = {
  image: IGatsbyImageData
  alt: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogCardHeroImage: React.VFC<HeroImageType> = props => (
  <GatsbyImage
  className="min-h-image rounded-t"
  image={props.image}
  alt={props.alt}
  objectFit="cover"
  ></GatsbyImage>
)
// ______________________________________________________
//
export default BlogCardHeroImage