import * as React from "react"
import Layout from "../components/layout"
import BlogCards from "../containers/blog_cards"
import ProfileCard from "../containers/profile_card"

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-full">
        <header>
          {/* container component */}
          this is index.tsx
          {/* container component */}
        </header>
        <article className="px-1 bg-background">
          <div
            className="
              container
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
                bg-gray-400
                grid
                md:grid-cols-8
                grid-cols-4
                2xl:gap-3
                gap-2
              "
            >
              <BlogCards />
            </div>

            <div className="col-span-4 bg-gray-400 min-h-348">
              {/* container component */}
              <ProfileCard />
              {/* container component */}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default Index