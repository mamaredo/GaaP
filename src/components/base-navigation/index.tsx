import React from "react"
import { Link } from "gatsby"


// ______________________________________________________
//
const BaseNavigation: React.VFC = () => (
  <div className="w-full h-7">
    <nav className="w-full h-7 flex items-center bg-primary shadow-md fixed z-20">
      <div className="flex items-centeer justify-center box-border xl:px-3 px-2 2xl:max-w-2xl lg:max-w-xl max-w-md w-full mx-auto">
        <Link to="/">
          <h1 className="block text-2xl leading-10 text-black text-opacity-90 font-black">
            GaaP
          </h1>
        </Link>
      </div>
    </nav>
  </div>
)
// ______________________________________________________
//
export default BaseNavigation
