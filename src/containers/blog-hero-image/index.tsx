import React from "react"
import { PostPageProps } from "../../template/post-page"
import BaseBlogHeroImage from "../../components/base-blog-hero-image"


// ______________________________________________________
//
type BlogHeroImageProps = {
  assets: PostPageProps['pageContext']['assets']
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogHeroImage: React.VFC<BlogHeroImageProps> = ({ assets }) => {
  /* Logic */
  const { image, alt } = assets
  return (<BaseBlogHeroImage image={image} alt={alt} />)
}
// ______________________________________________________
//
export default React.memo(BlogHeroImage)