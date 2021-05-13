import * as React from "react"
import { ProfileType } from "./index"


// ______________________________________________________
//
type ProfileNameProps = { name: ProfileType["name"] }
// ______________________________________________________
//
// ______________________________________________________
//
const ProfileName: React.FC<ProfileNameProps> = ({ name }) => (
  <>
    <div className="text-2xl font-bold opacity-90">
      {name}
    </div>
    <div className="text-xs opacity-50">
      2000年11月30日生まれ
    </div>
  </>
)
// ______________________________________________________
//
export default ProfileName