import React from 'react'
import HeaderLogo from './header-logo'

// ______________________________________________________
//
const MainVisual: React.VFC = () => (
  <header className="w-full h-full box-border px-1 py-3 lg:py-5 flex justify-center items-center bg-primary-dark">
    <div
      className="
          2xl:max-w-2xl xl:max-w-xl md:max-w-md max-w-sm
          w-full
          mx-auto
          py-16
          bg-primary-light
          rounded-md
        "
    >
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center w-40 h-40 bg-primary-dark rounded-full">
          <h1>
            <HeaderLogo />
          </h1>
        </div>
      </div>
      <div className="md:pt-3 pt-1">
        <p className="font-balsamiq italic font-bold md:text-2xl text-xl text-center text-header-text">
          blog to growth as a programmer
        </p>
      </div>
    </div>
  </header>
)
// ______________________________________________________
//
export default MainVisual
