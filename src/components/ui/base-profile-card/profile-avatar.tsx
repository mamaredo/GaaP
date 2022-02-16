import * as React from 'react'
import { ProfileType } from './index'
import { GatsbyImage } from 'gatsby-plugin-image'

// ______________________________________________________
//
type ProfileAvatarProps = {
  avatar: ProfileType['avatar']
  alt: ProfileType['name']
}
// ______________________________________________________
//
// ______________________________________________________
//
const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ avatar, alt }) => (
  <GatsbyImage
    className="w-5 h-5 md:w-6 md:h-6 rounded"
    image={avatar}
    alt={alt}
  ></GatsbyImage>
)
// ______________________________________________________
//
export default ProfileAvatar
