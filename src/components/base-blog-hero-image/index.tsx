import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"


// ______________________________________________________
//
export type BaseBlogHeroImageProps = {
  image: IGatsbyImageData
  alt?: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogHeroImage: React.FC<BaseBlogHeroImageProps> = ({ image, alt }) => (
  <picture>
    <GatsbyImage
      className="mt-2"
      image={image}
      alt={alt!}
    ></GatsbyImage>
  </picture>
)
// ______________________________________________________
//
export default BaseBlogHeroImage