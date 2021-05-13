import * as React from "react"
import { useProfileQuery } from "./query"
import BaseProfileCard from "../../components/base-profile-card"


// ______________________________________________________
//
const ProfileCard: React.FC = () => {
  const data = useProfileQuery()
  const profile = {
    avatar: 'avatar',
    name: data?.name || 'UserName',
    bio: data?.bio?.childrenMarkdownRemark?.[0]?.html || 'Bio',
  }
  const social = {
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