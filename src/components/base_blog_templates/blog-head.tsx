import * as React from "react"


// ______________________________________________________
//
type BlogHeadProps = {
  title: string,
  date: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BlogHead: React.FC<BlogHeadProps> = ({title, date}) => {
  return (
    <React.Fragment>
      <span className="text-black text-opacity-50">{date}</span>
      <div className="mt-1 w-full">
        <h2 className="text-black text-opacity-90 xl:text-5xl md:text-4xl text-3xl">{title}</h2>
      </div>
      {/* img */}
    </React.Fragment>
  )
}
// ______________________________________________________
//
export default BlogHead