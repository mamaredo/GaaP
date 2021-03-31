import * as React from 'react'
import SEO from './seo'

import Footer from './footer'

type Props = {
  children: React.ReactElement
}

const Layout: React.FC<Props> = ({children}) => (
  <>
    <SEO />
    <main className="w-screen h-full">
      {children}
    </main>
    <Footer />
  </>
)

export default Layout