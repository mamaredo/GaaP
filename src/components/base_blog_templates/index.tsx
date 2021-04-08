import * as React from "react"
import BaseNavigation from "../base_navigation"
import BlogHead from "./blog-head"
import BlogIndex from "./blog-index"
import { BlogTemplateProps } from "../../containers/blog_templates"
import "../../css/blog-template.css"

import Layout from "../layout"

// ______________________________________________________
//
export type BaseBlogTemplateProps = {
  post: BlogTemplateProps["pageContext"]["post"]
  body: BlogTemplateProps["pageContext"]["body"]
  image: BlogTemplateProps["pageContext"]["image"]
}
// ______________________________________________________
//
const BaseBlogTemplate: React.FC<BaseBlogTemplateProps> = ({ post, body, image }) => {
  const { title, date, tag } = post
  return (
    <Layout>
      <BaseNavigation />
      <div className="px-1 pt-32 w-full bg-background">
        <div 
          className="
            2xl:max-w-2xl
            xl:max-w-xl
            md:max-w-md
            max-w-sm
            mx-auto
            grid
            xl:grid-cols-12
            md:grid-cols-8
            grid-cols-4
            2xl:gap-3
            gap-2
          "
        >

          <div className="md:col-span-8 col-span-4 w-full">
            <BlogHead
              title={title} 
              date={date}
              image={image}
            />
          </div>

          <div className="md:col-span-4 col-span-4">
            <BlogIndex />
          </div>

          <div className="md:col-span-8 col-span-4 w-full">
            <div
              className="contentfull"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
// ______________________________________________________
//
export default BaseBlogTemplate
