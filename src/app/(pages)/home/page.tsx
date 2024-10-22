import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
      <div className="bg-black px-32 py-32 ">
     <div className="flex bg-slate-400 py-7 h-[50vh]">
       <h2 className="h-6 font-extrabold text-3xl">My 3rd Assignment:</h2>
       <ol className="flex-col mt-28 ml-40 absolute">
         <li className="font-bold text-2xl">1) Make a Navbar and style it with Tailwand CSS.</li>
         <li className="font-bold text-2xl">2) Make a Footer and style it with Tailwand CSS.</li>
         <li className="font-bold text-2xl">3) Make components appropriate to website and style it with Tailwand CSS.</li>
       </ol>
     </div>
   </div>
    </Fragment>
  )
}

export default Home;