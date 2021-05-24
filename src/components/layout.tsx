import * as React from 'react'
import SEO from './seo'
import Footer from './footer'


// ______________________________________________________
//
type siteMetadata = {
  title?: string
  description?: string
}
// ______________________________________________________
//
// ______________________________________________________
//
const Layout: React.FC<siteMetadata> = ({children, title, description}) => (
  <>
    <SEO title={title} description={description} />
    <main className="max-w-max h-full">
      {children}
    </main>
    <Footer />
  </>
)
// ______________________________________________________
//

export default Layout