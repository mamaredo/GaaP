import '@/css/blog-template.css'
import 'prismjs/themes/prism-okaidia.css'
import React, { useMemo } from 'react'
import Prism from 'prismjs'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '@/components/layout'
import BlogHead from '@/containers/blog-head'
import BlogHeroImage from '@/containers/blog-hero-image'
import BlogIndex from '@/containers/blog-index/index'
import BlogTag, { TagInfoType } from '@/containers/blog-tag'
import ProfileCard from '@/containers/profile-card'
import SEO from '@/containers/seo'

// ______________________________________________________
//
export type PostPageProps = {
  pageContext: {
    head: {
      title: string
      date: string
    }
    assets: {
      image: IGatsbyImageData
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
  }, [])
  const { head, tagInfo, assets, body, postIndex } = pageContext

  const tagStyle = useMemo(() => ['shadow', 'bg-tag-bg'], [tagInfo])
  // const commonStyle = {

  // }
  return (
    <Layout>
      <SEO title={head.title} />
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
          <div className="box-border xl:p-3 p-2 pb-5 md:col-span-8 col-span-4 w-full bg-white shadow">
            <div className="w-full">
              <BlogHead head={head} />
              <div className="mb-2">
                <BlogHeroImage assets={assets} />
              </div>
            </div>

            <div className="w-full">
              <div
                className="contentfull"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          </div>

          <div className="lg:pt-3 pt-0 md:col-span-4 sm:col-span-2 col-span-4">
            <div className="lg:fixed  w-full">
              <BlogIndex postIndex={postIndex} />
              <div className="mt-2 pb-1 text-xl font-bold opacity-70">タグ</div>
              <div className="pb-2 flex">
                <BlogTag tagInfo={tagInfo} style={tagStyle} />
              </div>
            </div>
          </div>

          <div className="box-border pb-5 md:col-span-8 col-span-4 w-fulll">
            <hr className="w-full my-3 bg-hr" />
            <div className="mt-2 pb-1 text-xl font-bold opacity-70">
              書いた人
            </div>
            <ProfileCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}
// ______________________________________________________
//
export default PostPage
