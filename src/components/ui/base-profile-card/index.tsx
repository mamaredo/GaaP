import * as React from "react"
import ProfileAvatar from "./profile-avatar"
import ProfileName from "./profile-name"
import ProfileBio from "./profile-bio"
import ProfileSocial from "./profile-social"
import { IGatsbyImageData } from "gatsby-plugin-image"


// ______________________________________________________
//
export type ProfileType = {
  avatar: IGatsbyImageData
  name: string
  bio: string
}
export type SocialType = {
  twitter: string
  gitHub: string
  contact: string
}
type BaseProfileCardProps = {
  profile: ProfileType
  social: SocialType
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
        <div className="mr-2">
          <ProfileAvatar avatar={avatar} alt={name} />
        </div>
        <div className="w-full">
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
