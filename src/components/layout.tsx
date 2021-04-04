import * as React from 'react'
import SEO from './seo'

import Footer from './footer'

// ______________________________________________________
//
const Layout: React.FC = ({children}) => (
  <>
    <SEO />
    <main className="max-w-max h-full">
      {children}
    </main>
    <Footer />
  </>
)
// ______________________________________________________
//

export default Layout