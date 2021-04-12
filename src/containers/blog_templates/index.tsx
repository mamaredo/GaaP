import * as React from "react"
import { FluidObject } from "gatsby-image"
import BaseBlogTemplate from "../../components/base_blog_templates"
import { string } from "prop-types"

// ______________________________________________________
//
export type BlogTemplateProps = {
  pageContext: {
    post: {
      title: string
      tag: {
        tagName: string[]
        svg: SVGAElement | string
        alt: string
      }
      date: string
    },
    // heroImage
    image: {
      fluid: FluidObject
      alt: string
    },
    body: string,
    postIndex: string
  }
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogTemplate: React.FC<BlogTemplateProps> = ({ pageContext }) => {
  /* logic */
  return (
    <BaseBlogTemplate
      post={pageContext.post}
      image={pageContext.image}
      body={pageContext.body} 
      postIndex={pageContext.postIndex}
    />
  )
}
// ______________________________________________________
//

export default BlogTemplate
