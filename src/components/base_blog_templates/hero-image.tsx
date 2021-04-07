import * as React from "react"
import Img from "gatsby-image"
import { BaseBlogTemplateProps } from "./index"


// ______________________________________________________
//
type HeroImageProps = {
  image: BaseBlogTemplateProps["image"]
}
// ______________________________________________________
//
// ______________________________________________________
//
const HeroImage: React.FC<HeroImageProps> = ({ image }) => {
  const { fluid, alt } = image
  return (
    <Img
      className="mt-2"
      fluid={fluid}
      alt={alt}
    ></Img>
  )
}
// ______________________________________________________
//
export default HeroImage