import React from "react"
import { SocialType } from "./index"



// ______________________________________________________
//
const ProfileSocial: React.VFC<SocialType> = ({ twitter, gitHub, contact }) => (
  <>
    <div className="mt-3 w-full min-h-button flex justify-between">
      <a href={twitter} className="flex items-center justify-center mr-1 w-full bg-twitter text-white font-semibold rounded">
        <img className="min-w-tag mr-1" src={`../../../twitter-icon.svg`} />
        <span>
          Twitter
        </span>
      </a>
      <a href={gitHub} className="flex items-center justify-center ml-1 w-full bg-git-hub text-white font-semibold rounded">
        <img className="min-w-tag mr-1" src={`../../../git-hub-icon.svg`} />
        <span>
          GitHub
        </span>
      </a>
    </div>
    <a
      href={contact}
      className="flex items-center justify-center mt-2 w-full min-h-button bg-google-form text-white font-semibold rounded"
    >
      <span>
        CONTACT FROM
      </span>
    </a>
  </>
)
// ______________________________________________________
//
export default ProfileSocial