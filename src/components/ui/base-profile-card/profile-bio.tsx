import * as React from "react"
import { ProfileType } from "./index"


// ______________________________________________________
//
type ProfileBioProps = { bio: ProfileType["bio"] }
// ______________________________________________________
//
// ______________________________________________________
//
const ProfileBio: React.FC<ProfileBioProps> = ({ bio }) => (
  <div
    className="mt-2 opacity-90"
    dangerouslySetInnerHTML={{ __html: bio || 'bio' }}
  />
)
// ______________________________________________________
//
export default ProfileBio