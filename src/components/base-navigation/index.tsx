import React from "react"
import { Link } from "gatsby"


// ______________________________________________________
//
const BaseNavigation: React.VFC = () => (
  <div className="w-full h-7 md:h-16">
    <nav className="w-full h-7 md:h-16 box-border px-1 flex items-center bg-primary shadow-md fixed z-20">
      <div
        className="
          2xl:max-w-2xl lg:max-w-xl max-w-md
          w-full
          mx-auto
          flex
        "
      >
          <Link className="box-border px-2 mx-auto" to="/">
            <h2 className="flex items-center md:text-3xl text-2xl font-balsamiq italic font-bold text-header-text">
              <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-black bg-opacity-10">
                <img className="w-5 h-5 md:w-6 md:h-6" src={`../../../gaap-logo.svg`} alt="GaaP" />
              </div>
            </h2>
          </Link>
      </div>
    </nav>
  </div>
)
// ______________________________________________________
//
export default BaseNavigation
