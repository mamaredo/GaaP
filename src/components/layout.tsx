import React from 'react'

import { HeaderNavigation } from '@/containers/header-navigation'

import Footer from './footer'

// ______________________________________________________
//
const Layout: React.FC = ({ children }) => (
  <>
    <HeaderNavigation />
    <main className="max-w-max h-full">{children}</main>
    <Footer />
  </>
)
// ______________________________________________________
//

export default Layout
