// // import files
// import Teams from "./components/Teams"

// const Team = () => {
//   return (
//     <div id="ourteam">
//         <div className="flex justify-between items-center mb-12">
//             <h1 className="text-6xl font-bold">MEET THE <span className="border-b-4 border-red-600">TEAM</span></h1>
//             <p className="text-xl font-semibold">our core team from this agent</p>
//         </div>
//         <Teams />
//         <p className="text-xs font-semibold text-right my-12">PAGE 4 OF 4</p>
//     </div>
//   )
// }

// export default Team

import React from 'react'
import TopBanner from '../Components/TopBanner'
import Teams from '../Components/Teams'

const Team = () => {
  return (
    <>
      <TopBanner text='Our Trip Advisors'/>
      <Teams/>
    </>
  )
}

export default Team