import * as React from 'react'


// ______________________________________________________
//
export type BaseBlogHeadProps = {
  date: string
  title: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseBlogHead: React.FC<BaseBlogHeadProps> = ({ date, title }) => (
  <>
    <span className="text-black text-opacity-50">{date}</span>
    <div className="mt-1 w-full">
      <h2 className="text-black text-opacity-90 xl:text-5xl md:text-4xl text-3xl font-black">
        {title}
      </h2>
    </div>
  </>
)
// ______________________________________________________
//
export default BaseBlogHead