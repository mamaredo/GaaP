import React, { useMemo } from 'react'
import { FluidObject } from 'gatsby-image'
import BaseNavigation from "../components/base-navigation"
import BlogHead from "../containers/blog-head"
import BlogHeroImage from "../containers/blog-hero-image"
import BlogIndex from "../containers/blog-index/index"
import BlogTag, { TagInfoType } from "../containers/blog-tag"
import Layout from "../components/layout"
import "../css/blog-template.css"
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'


// ______________________________________________________
//
export type PostPageProps = {
  pageContext: {
    head: {
      title: string
      date: string
    }
    image: {
      fluid: FluidObject
      alt?: string
    }
    body: string
    postIndex: string
  } & TagInfoType
}
// ______________________________________________________
//
// ______________________________________________________
//
const PostPage: React.VFC<PostPageProps> = ({ pageContext }) => {
  React.useEffect(() => {
    Prism.highlightAll()
  },[])
  const {
    head,
    tagInfo,
    image,
    body,
    postIndex
  } = pageContext
  
  const tagStyle = useMemo(() => ['shadow', 'bg-tag-bg'], [tagInfo])
  return (
    <Layout>
      <BaseNavigation />
      <div className="px-1 w-full bg-background">
        <div 
          className="
            2xl:max-w-2xl lg:max-w-xl max-w-md
            mx-auto
            grid
            lg:grid-cols-12
            md:grid-cols-8
            grid-cols-4
            2xl:gap-3
            gap-2
          "
        >
          <div className="box-border xl:p-3 p-2 md:col-span-8 col-span-4 w-full bg-white">
            <div className="w-full">
              <BlogHead head={head} />
              <div className="mb-2">
                <BlogHeroImage image={image} />
              </div>
            </div>


            <div className="w-full">
              <div
                className="contentfull"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          </div>

          <div className="pt-5 md:col-span-4 col-span-4">
            <div className="xl:fixed  w-full">
              <BlogIndex postIndex={postIndex} />
              <div className="mt-5 flex">
                <BlogTag tagInfo={tagInfo} style={tagStyle} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
// ______________________________________________________
//
export default PostPage