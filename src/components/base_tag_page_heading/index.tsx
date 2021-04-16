import * as React from "react"


// ______________________________________________________
//
type BaseTagPageHeadingProps = {
  tag: string
  icon: string
  postCount: number
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseTagPageHeading: React.FC<BaseTagPageHeadingProps> = ({ tag, icon, postCount }) => (
  <>
    <div className="w-7 h-7 mb-1 mx-auto" dangerouslySetInnerHTML={{ __html: icon }} />
    <h2 className="text-4xl text-black text-opacity-90 font-extrabold">
      {tag}
    </h2>
    <div className="mt-1 text-black text-opacity-70 font-medium">
      記事件数/ {postCount}件
    </div>
  </>
)
// ______________________________________________________
//
export default BaseTagPageHeading