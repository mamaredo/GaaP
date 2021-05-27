import * as React from "react"
import { ProfileType } from "./index"
import { GatsbyImage } from "gatsby-plugin-image"


// ______________________________________________________
//
type ProfileAvatarProps = {
  avatar: ProfileType["avatar"]
  alt: ProfileType["name"]
}
// ______________________________________________________
//
// ______________________________________________________
//
const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ avatar, alt }) => (
  <GatsbyImage
    className="w-7 h-7 rounded-full"
    image={avatar}
    alt={alt}
  >
  </GatsbyImage>
)
// ______________________________________________________
//
export default ProfileAvatar