import * as React from "react"

// ______________________________________________________
//
type BaseBlogCardProps = {
  frontmatter?: {
    title?: string
    date?: string
    tag?: string
  }
  slug?: string
  style?: string[]
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogCard: React.FC<BaseBlogCardProps> = ({ style, frontmatter }) => {
  const cardStyle = style?.join(" ")

  return (
    <div className="col-span-4 min-h-card">
      <div className={`shadow bg-white w-full ${cardStyle}`}>
        {/* imageを入れる */}
        <div className="p-2 flex flex-col">
          <div className="flex justify-between items-center mb-">
            <h2 className="text-xl">{frontmatter?.title}</h2>
            <p className="2xl:text-sm text-xs">{frontmatter?.date}</p>
          </div>
          <div className="flex flex-row-reverse">
            <div className="rounded-full py-1 px-2 2xl:text-base text-sm bg-gray-300">
              {frontmatter?.tag}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// ______________________________________________________
//
export default BaseBlogCard
