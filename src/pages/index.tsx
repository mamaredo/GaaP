import * as React from "react"
import Layout from "../components/layout"
import SEO from "../containers/seo"
import MainVisual from "../components/main-visual"
import AllBlogCards from "../containers/all-blog-cards"
import ProfileCard from "../containers/profile-card"
import AllBlogTags from "../containers/all-blog-tags"


// ______________________________________________________
//
const Index: React.VFC = () => {
  return (
    <Layout>
      <SEO />
      <div className="w-full h-full">
        <MainVisual />
        <article className="px-1 py-5 bg-background">
          <div
            className="
              2xl:max-w-2xl xl:max-w-xl md:max-w-md max-w-sm
              mx-auto
              grid
              xl:grid-cols-12
              md:grid-cols-8
              grid-cols-4
              2xl:gap-3
              gap-2
            "
          >
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
              <AllBlogCards />
            </div>

            <div className="col-span-4">
              <ProfileCard />

              <hr className="w-full my-3 bg-hr" />

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
export default Index