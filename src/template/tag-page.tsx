import * as React from "react"
import Layout from "../components/layout"
import BlogCards from "../containers/blog_cards"
import AllBlogTags from "../containers/all_blog_tags"


// ______________________________________________________
//
export type TopPageProps = {
  pageContext: {
    tag: string
  }
}
// ______________________________________________________
//
// ______________________________________________________
//
const TagPage: React.FC<TopPageProps> = ({ pageContext }) => {
  const { tag } = pageContext
  return (
    <Layout>
      <div className="w-full h-full">
        <header>
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
              <div className="mb-3">
                <h2 className="text-xl text-black text-opacity-90 font-extrabold">
                  <span className="text-3xl">{tag}</span>
                </h2>
                <div className="mt-1 text-lg text-black text-opacity-70 font-medium">
                  記事件数/ n件
                </div>
              </div>

              <div
                className="
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