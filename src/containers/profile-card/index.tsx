import * as React from "react"
import { useProfileQuery } from "./query"
import BaseProfileCard, { ProfileType, SocialType} from "../../components/base-profile-card"
import { IGatsbyImageData } from "gatsby-plugin-image"


// ______________________________________________________
//
const ProfileCard: React.VFC = () => {
  const data = useProfileQuery()
  const profile: ProfileType = {
    avatar: data?.icon?.gatsbyImageData as unknown as IGatsbyImageData,
    name: data?.name || 'UserName',
    bio: data?.bio?.childrenMarkdownRemark?.[0]?.html || 'Bio',
  }
  const social: SocialType = {
    twitter: data?.twitter || '#',
    gitHub: data?.gitHub || '#',
    contact: data?.contact || '#'
  }
  return (
    <BaseProfileCard
      profile={profile}
      social={social}
    />
  )
}
// ______________________________________________________
//
export default ProfileCard