import * as React from "react"
import Img, { FluidObject } from "gatsby-image"


// ______________________________________________________
//
export type BaseBlogHeroImageProps = {
  fluid: FluidObject
  alt?: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogHeroImage: React.FC<BaseBlogHeroImageProps> = ({ fluid, alt }) => (
  <picture>
    <Img
      className="mt-2"
      fluid={fluid}
      title={alt}
    ></Img>
  </picture>
)
// ______________________________________________________
//
export default BaseBlogHeroImage