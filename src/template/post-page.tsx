import * as React from 'react'
import { FluidObject } from 'gatsby-image'
import BaseNavigation from "../components/base_navigation"
import BlogHead from "../containers/blog_head"
import BlogHeroImage from "../containers/blog_hero_image"
import BlogIndex from "../containers/blog_index"
import BlogTag, { TagInfoType } from "../containers/blog_tag"
import Layout from "../components/layout"
import "../css/blog-template.css"


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
const PostPage: React.FC<PostPageProps> = ({ pageContext }) => {
  const {
    head,
    tagInfo,
    image,
    body,
    postIndex
  } = pageContext
  
  const tagStyle = ['shadow', 'bg-tag-bg']
  return (
    <Layout>
      <BaseNavigation />
      <div className="px-1 pt-5 w-full bg-background">
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
              head={head}
            />
            <BlogHeroImage image={image} />
          </div>

          <div className="md:col-span-4 col-span-4">
            <div className="xl:fixed xl:min-w-blog-index-fixed xl:max-w-blog-index-fixed w-full">
              <BlogIndex postIndex={postIndex} />
              <div className="mt-3 flex">
                <BlogTag tagInfo={tagInfo} style={tagStyle} />
              </div>
            </div>
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
export default PostPage