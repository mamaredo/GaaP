import React from "react"

const BreadCrumbItem: React.VFC = () => {
  return (
    <li></li>
  )
}

// type BreadCrumbItemType = {

// }
const BaseBreadCrumbList: React.VFC = () => {
  return (
    <ul>
      <BreadCrumbItem />
    </ul>
  )
}

export default BaseBreadCrumbList