import * as React from "react"
import { socialType } from "./index"


// ______________________________________________________
//
const ProfileSocial: React.FC<socialType> = ({ twitter, gitHub, contact }) => (
  <>
    <div className="mt-3 w-full min-h-button flex justify-between">
      <button className="mr-1 w-full bg-twitter text-white font-semibold rounded">
        Twitter
      </button>
      <button className="ml-1 w-full bg-git-hub text-white font-semibold rounded">
        GitHub
      </button>
    </div>
    <button className="mt-2 w-full min-h-button bg-content-full text-white font-semibold rounded">
      CONTACT FROM
    </button>
  </>
)
// ______________________________________________________
//
export default ProfileSocial