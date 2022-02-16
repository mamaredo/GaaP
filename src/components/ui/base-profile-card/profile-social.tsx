import React from "react"
import { SocialType } from "./index"



// ______________________________________________________
//
const ProfileSocial: React.VFC<SocialType> = ({ twitter, gitHub, contact }) => (
  <>
    <div className="mt-3 w-full min-h-button flex justify-between">
      <a href={twitter} className="flex items-center justify-center mr-1 w-full bg-white text-black text-opacity-90 font-semibold rounded shadow-md">
        <img className="min-w-tag max-w-tag mr-icon" src={`../../../twitter-icon.svg`} alt="twitter-icon" />
        <span>
          Twitter
        </span>
      </a>
      <a href={gitHub} className="flex items-center justify-center ml-1 w-full bg-white text-git-hub font-semibold rounded shadow-md">
        <img className="min-w-tag max-w-tag mr-icon" src={`../../../git-hub-icon.svg`} alt="git-hub-icon" />
        <span>
          GitHub
        </span>
      </a>
    </div>
    <a
      href={contact}
      className="flex items-center justify-center mt-2 w-full min-h-button bg-google-form text-white font-semibold rounded shadow-md"
    >
      CONTACT FORM
    </a>
  </>
)
// ______________________________________________________
//
export default ProfileSocial