import * as React from "react"
import { PostPageProps } from "../../template/post-page"
import BaseBlogHeroImage from "../../components/base-blog-hero-image"


// ______________________________________________________
//
type BlogHeroImageProps = {
  image: PostPageProps['pageContext']['image']
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogHeroImage: React.FC<BlogHeroImageProps> = ({ image }) => {
  /* Logic */
  const { fluid, alt } = image
  return (<BaseBlogHeroImage fluid={fluid} alt={alt} />)
}
// ______________________________________________________
//
export default BlogHeroImage