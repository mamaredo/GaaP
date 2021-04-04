import * as React from "react"
import BaseNavigation from "../base_navigation"
import BlogHead from "./blog-head"
import BlogIndex from "./blog-index"
import { BlogTemplateProps } from "../../containers/blog_templates"
import "../../css/blog-template.css"

import Layout from "../layout"

// ______________________________________________________
//
type BaseBlogTemplateProps = {
  post: BlogTemplateProps["pageContext"]["post"]
  body: BlogTemplateProps["pageContext"]["body"]
}
export type BlogHeadProps = { post: BaseBlogTemplateProps["post"] }
// ______________________________________________________
//
const BaseBlogTemplate: React.FC<BaseBlogTemplateProps> = ({ post, body }) => {
  const { title, date, tag } = post
  return (
    <Layout>
      <BaseNavigation />
      <div className="px-1 w-full bg-background">
        <div 
          className="
            pt-32
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

          <div className="xl:col-span-10 md:col-span-8 col-span-4 w-full">
            <BlogHead title={title} date={date} />
            <div className="contentfull xl:mt-5 mt-4" dangerouslySetInnerHTML={{ __html: body }} />
          </div>

          <div className="xl:col-span-2 col-span-4">
            <BlogIndex />
          </div>

        </div>
      </div>
    </Layout>
  )
}
// ______________________________________________________
//
export default BaseBlogTemplate
