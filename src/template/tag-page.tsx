import React from "react"
import Layout from "../components/layout"
import SEO from "../containers/seo"
import MainVisual from "../components/main-visual"
import TagPageHeading, { TagPageHeadingProps } from "../containers/tag-page-heading"
import { TagInfoType } from "../containers/blog-tag"
import BlogCardsByTag, { BlogCardsByTagType } from "../containers/blog-cards-by-tag"
import AllBlogTags from "../containers/all-blog-tags"


// ______________________________________________________
//
type TagPageProps = {
  pageContext: 
  & TagInfoType['tagInfo']
  & TagPageHeadingProps['heading']
  & BlogCardsByTagType
}
// ______________________________________________________
//
// ______________________________________________________
//
const TagPage: React.VFC<TagPageProps> = ({ pageContext }) => {
  const { tag, svg, postCount } = pageContext
  const heading = { tag, svg, postCount }
  const { blogCardInfo } = pageContext
  return (
    <Layout>
      <SEO title={tag} />
      <div className="w-full h-full">
        <MainVisual />
        <article className="pb-20 px-1 bg-background">
          <div
            className="
            md:max-w-md
            max-w-sm
            mx-auto
            grid
            md:grid-cols-8
            grid-cols-4
            2xl:gap-3
            gap-2
            "
            >
            <div className="md:col-span-8 col-span-4 w-full">
              <div className="text-center mt-3">
                <TagPageHeading heading={heading} />
              </div>

              <div
                className="
                mt-3
                md:col-span-8
                col-span-4
                grid
                md:grid-cols-8
                grid-cols-4
                2xl:gap-3
                gap-2
                "
              >
                <BlogCardsByTag tag={tag} svg={svg} blogCardInfo={blogCardInfo} />
              </div>

              <hr className="my-5 w-full bg-hr" />

              <div className="mb-2 text-xl font-bold opacity-70">
                タグ一覧
              </div>
              <div className="flex">
                <AllBlogTags />
              </div>
            </div>

          </div>
        </article>
      </div>
    </Layout>
  )
}
// ______________________________________________________
//
export default TagPage