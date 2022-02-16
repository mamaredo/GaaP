import React from 'react'
import { Link } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import gaapLogo from '@/assets/gaap-logo.svg'
import ProfileAvatar from '../base-profile-card/profile-avatar'

type BaseNavigationProps = {
  avatar: IGatsbyImageData
  alt: string
}

// ______________________________________________________
//
const BaseNavigation: React.VFC<BaseNavigationProps> = ({ avatar, alt }) => (
  <div className="w-full h-7 md:h-16">
    <nav className="w-full h-7 md:h-16 box-border px-1 flex items-center bg-primary shadow-md fixed z-20">
      <div
        className="
          2xl:max-w-2xl xl:max-w-xl md:max-w-md max-w-sm
          w-full
          mx-auto
          flex
        "
      >
        <Link className="box-border" to="/">
          {/* <Link
          className="absolute top-1/2 right-1/2 translate-x-2/4 -translate-y-2/4"
          to="/"
        > */}
          <h1 className="flex items-center md:text-3xl text-2xl font-balsamiq italic font-bold text-header-text">
            <div className="w-6 h-6 flex items-center justify-center rounded-full">
              <img className="w-6 h-6" src={gaapLogo} alt="GaaP" />
            </div>
          </h1>
        </Link>

        <Link to="/" className="ml-auto flex items-center">
          <ProfileAvatar avatar={avatar} alt={alt} />
        </Link>
      </div>
    </nav>
  </div>
)
// ______________________________________________________
//
export default BaseNavigation
