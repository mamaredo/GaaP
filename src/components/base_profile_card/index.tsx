import * as React from "react"


// ______________________________________________________
//
// type BaseProfileCardProps = {
//   avatar: string,
//   userName: string,
//   profile: string,
//   twitter: string,
//   gitHub: string,
// }
// ______________________________________________________
//
// ______________________________________________________
//
const BaseProfileCard: React.FC = () => (
  <div className="shadow bg-white w-full p-2 rounded">
    <div className="flex">
      {/* img */}
      <div className="rounded-full bg-gray-200" style={{ width: '56px', height: '56px' }}></div>
      {/* img */}
      <div className="ml-2">
        <div className="text-2xl font-bold opacity-90">Nishimura</div>
        <div className="text-sm opacity-50">2000年 11月 30日 生まれ</div>
      </div>
    </div>

    <div className="mt-2 text-xl font-medium opacity-90">description</div>

    <div>
      <div className="mt-3 w-full min-h-button flex justify-between">
        <button className="mr-1 w-full bg-twitter text-white font-semibold rounded">Twitter</button>
        <button className="ml-1 w-full bg-git-hub text-white font-semibold rounded">GitHub</button>
      </div>
      <button className="mt-2 w-full min-h-button bg-content-full text-white font-semibold rounded">CONTACT FROM</button>
    </div>
  </div>
)
// ______________________________________________________
//
export default BaseProfileCard
