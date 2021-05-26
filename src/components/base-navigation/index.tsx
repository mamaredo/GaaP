import React from "react"
import { Link } from "gatsby"


// ______________________________________________________
//
const BaseNavigation: React.VFC = () => (
  <div className="w-full h-7">
    <nav className="w-full h-7 box-border px-1 flex items-center bg-primary shadow-md fixed z-20">
      <div
        className="
          2xl:max-w-2xl lg:max-w-xl max-w-md
          w-full
          mx-auto
        "
      >
        <Link to="/">
          <h2 className="flex items-center md:text-3xl text-2xl font-bold text-header-text">
            <img className="w-6 h-6 mr-icon" src={`../../../gaap-logp.svg`} alt="GaaP" />
            GaaP
          </h2>
        </Link>
      </div>
    </nav>
  </div>
)
// ______________________________________________________
//
export default BaseNavigation
