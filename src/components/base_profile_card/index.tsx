import * as React from "react"
import ProfileAvatar from "./profile-avatar"
import ProfileName from "./profile-name"
import ProfileBio from "./profile-bio"
import ProfileSocial from "./profile-social"


// ______________________________________________________
//
export type ProfileType = {
  avatar: string
  name: string
  bio: string
}
export type socialType = {
  twitter: string
  gitHub: string
  contact: string
}
type BaseProfileCardProps = {
  profile: ProfileType
  social: socialType
}
// ______________________________________________________
//
// ______________________________________________________
//
const BaseProfileCard: React.FC<BaseProfileCardProps> = ({ profile, social }) => {
  const { avatar, name, bio } = profile
  return(
    <div className="shadow bg-white w-full p-2 rounded">
      <div className="flex">
        {/* img */}
        <div className="mr-1 w-full">
          <ProfileAvatar avatar={avatar} />
        </div>
        {/* img */}
        <div className="ml-1 w-full">
          <ProfileName name={name} />
        </div>

      </div>

      <ProfileBio bio={bio} />

      <div>
        <ProfileSocial {...social} />
      </div>
    </div>
  )
}
// ______________________________________________________
//
export default BaseProfileCard
