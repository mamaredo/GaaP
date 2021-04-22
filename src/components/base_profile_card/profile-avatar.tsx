import * as React from "react"
import { ProfileType } from "./index"


// ______________________________________________________
//
type ProfileAvatarProps = { avatar: ProfileType["avatar"] }
// ______________________________________________________
//
// ______________________________________________________
//
const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ avatar }) => (
  <div className="rounded bg-gray-200 h-1/2">
    {avatar}
  </div>
)
// ______________________________________________________
//
export default ProfileAvatar