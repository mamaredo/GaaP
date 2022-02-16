import React from 'react'

import Layout from '@/components/layout'
import SEO from '@/components/ui/base-seo'

const NotFoundPage: React.VFC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="w-full flex flex-col items-center justify-center">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
