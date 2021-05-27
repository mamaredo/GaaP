import React from "react"


// ______________________________________________________
//
const BlogCardTitle: React.VFC<{title: string}> = ({title}) => (
  <h2 className="text-xl opacity-90">{title || '記事タイトル'}</h2>
)
// ______________________________________________________
//
export default BlogCardTitle