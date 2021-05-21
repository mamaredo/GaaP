import React from 'react'


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
const BaseBlogHead: React.VFC<BaseBlogHeadProps> = ({ date, title }) => (
  <>
    <span className="text-black text-opacity-50">updatedAt: {date}</span>
    <div className="mt-3 w-full">
      <h2 
        className="
        text-black
        text-opacity-90
        xl:text-5xl
        md:text-4xl
        text-3xl
        font-black
        block
        mb-3
        bg-white
        ">
        <span className="mr-2 text-primary">#</span>
        {title}
      </h2>
    </div>
  </>
)
// ______________________________________________________
//
export default BaseBlogHead