import React from 'react'

import BaseNavigation from '@/components/ui/base-navigation'

import { useAvatarQuery } from './query'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// ______________________________________________________
//
export const HeaderNavigation: React.VFC = () => {
  const data = useAvatarQuery()
  return (
    <BaseNavigation
      avatar={data?.icon?.gatsbyImageData as unknown as IGatsbyImageData}
      alt={'nishimura'}
    />
  )
}
// ______________________________________________________
//
