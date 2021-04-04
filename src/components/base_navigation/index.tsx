import * as React from "react"

const BaseNavigation: React.FC = () => {
  return (
    <nav className="fixed shadow-lg w-full h-20 flex items-center justify-center bg-primary text-white">
      <h1 className="text-3xl">
        GaaP
      </h1>
    </nav>
  )
}

export default BaseNavigation
