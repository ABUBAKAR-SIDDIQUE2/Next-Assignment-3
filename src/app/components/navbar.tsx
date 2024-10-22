import Link from "next/link";
import { Fragment } from "react";


export default function Navbar() {
  return(
    <Fragment>
      <header className="py-2 flex justify-between item-center bg-gray-400 relative w-[99vw]">
        <h1 className="py-3 font-extrabold underline px-3 text-blue-800 text-xl">Abubakar</h1>
        <ul className="flex flex-row justify-center gap-16 bg-gray-400 py-3">
          <Link href={"/home"}><li className="font-semibold text-lg hover:bg-black rounded-md px-1">Home</li></Link>
          <Link href={"/about"}><li className="font-semibold text-lg hover:bg-black rounded-md px-1">About</li></Link>
          <Link href={"/project"}><li className="font-semibold text-lg hover:bg-black rounded-md px-1">Projects</li></Link>
          <Link href={"/contact"}><li className="font-semibold text-lg hover:bg-black rounded-md px-1">Contact</li></Link>
        </ul>
        <button className="mr-2 px-3 font-bold border-2 border-black rounded-xl hover:bg-black hover:text-white hover:border-white">Respect Button</button>
      </header>
      
    </Fragment>
  )
}
