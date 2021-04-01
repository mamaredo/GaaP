import * as React from "react"
import BaseBlogTag from "../base_blog_tag"


// ______________________________________________________
//
/* contentfulとの連携が済めば記事のタグのprops(タグアイコン, タグテキスト)を定義する */
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
    <div className="col-span-4">
      <div className={`shadow bg-white w-full rounded ${cardStyle}`}>
        {/* imageを入れる */}
        <div className="w-full min-h-image bg-pink-200 rounded-t"></div>
        {/* imageを入れる */}
        <div className="p-2 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-xl opacity-90">{frontmatter?.title || '記事タイトル'}</h2>
            <p className="2xl:text-sm text-xs opacity-70">{frontmatter?.date || '2021-03-03'}</p>
          </div>
          <div className="flex flex-row-reverse">
            <BaseBlogTag icon="" text={'TAG NAME'} style={['bg-tag-bg']} />
          </div>
        </div>
      </div>
    </div>
  )
}
// ______________________________________________________
//
export default BaseBlogCard
