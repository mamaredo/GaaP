import * as React from "react"

// ______________________________________________________
//
const BaseProfileCard: React.FC = () => (
  <div className="shadow bg-white w-full h-full p-2">
    <div className="flex">
      {/* img */}
      <div className="rounded-full bg-gray-200" style={{ width: '56px', height: '56px' }}></div>
      {/* img */}
      <div>
        <div className="text-xl">Nishimura</div>
        <div>2000年 11月 30日 生まれ</div>
      </div>
    </div>
    from base profile card
  </div>
)
// ______________________________________________________
//
export default BaseProfileCard
