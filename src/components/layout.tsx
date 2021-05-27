import * as React from 'react'
import Footer from './footer'


// ______________________________________________________
//
const Layout: React.FC = ({children}) => (
  <>
    <main className="max-w-max h-full">
      {children}
    </main>
    <Footer />
  </>
)
// ______________________________________________________
//

export default Layout