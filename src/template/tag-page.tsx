import * as React from "react"
import Layout from "../components/layout"
import TagPageHeading from "../containers/tag_page_heading"
import BlogCards from "../containers/blog_cards"
import AllBlogTags from "../containers/all_blog_tags"


// ______________________________________________________
//
export type TagPageProps = {
  pageContext: {
    heading: {
      tag: string
      svg: string,
      postCount: number
    }
  }
}
// ______________________________________________________
//
// ______________________________________________________
//
const TagPage: React.FC<TagPageProps> = ({ pageContext }) => {
  const { heading } = pageContext
  return (
    <Layout>
      <div className="w-full h-full">
        <header className="h-80">
          this is tag-page.tsx
        </header>
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
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
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