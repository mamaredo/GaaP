import * as React from "react"
import { socialType } from "./index"


// ______________________________________________________
//
const ProfileSocial: React.FC<socialType> = ({ twitter, gitHub, contact }) => (
  <>
    <div className="mt-3 w-full min-h-button flex justify-between">
      <a href={twitter} className="flex items-center justify-center mr-1 w-full bg-twitter text-white font-semibold rounded">
        <span>
          Twitter
        </span>
      </a>
      <a href={gitHub} className="flex items-center justify-center ml-1 w-full bg-git-hub text-white font-semibold rounded">
        <span>
          GitHub
        </span>
      </a>
    </div>
    <button className="mt-2 w-full min-h-button bg-content-full text-white font-semibold rounded">
      CONTACT FROM
    </button>
  </>
)
// ______________________________________________________
//
export default ProfileSocial