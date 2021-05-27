import * as React from 'react'


const Footer: React.FC = () => (
  <footer className="w-full h-full py-3 bg-primary">
    <div
      className="
        2xl:max-w-2xl
        xl:max-w-xl
        md:max-w-md
        max-w-sm
        mx-auto
        text-header-text
        font-bold
        flex
        items-center
        justify-center
      "
    >
      <div>
        <div className="mx-auto mb-2 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-black bg-opacity-10">
          <img className="w-5 h-5 md:w-6 md:h-6" src={`../../../gaap-logp.svg`} alt="GaaP" />
        </div>
        &copy;2021 Nishimura All Rights Reserved.
      </div>
    </div>
  </footer>
)

export default Footer