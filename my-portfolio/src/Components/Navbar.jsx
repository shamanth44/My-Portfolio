import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  const [menu, setMenu] = useState(true);
  return (
    <>
      <nav className='flex md:flex md:flex-row flex-col justify-around items-center py-4 md:px-10 md:py-8'>
       <div className='flex w-full md:w-auto items-center justify-around'>
       <h1 className='font-regular cursor-pointer text-3xl text-black'>My Portfolio</h1>
       <div className='block md:hidden text-2xl' onClick={()=> {setMenu(!menu)}}>
       {menu ? (
              <FontAwesomeIcon icon={faBars}/>
            ) : (
              <FontAwesomeIcon icon={faXmark}/>
            )}
       </div>
       </div>
        <div className='w-full md:w-auto text-center px-20 md:px-0'>
        <ul className={`flex gap-2 ${menu? "hidden" : ""} text-xl flex-col md:flex md:flex-row md:gap-10 text-gray-600 py-4`}>
            <li className='cursor-pointer text-black hover:text-gray-500 md:hover:underline md:decoration-gray-400 md:underline-offset-8 border-b-2 md:border-0'>About</li>
            <li className='cursor-pointer text-black hover:text-gray-500 md:hover:underline md:decoration-gray-400 md:underline-offset-8 border-b-2 md:border-0'>Skills</li>
            <li className='cursor-pointer text-black hover:text-gray-500 md:hover:underline md:decoration-gray-400 md:underline-offset-8 border-b-2 md:border-0'>Projects</li>
            <li className='cursor-pointer text-black hover:text-gray-500 md:hover:underline md:decoration-gray-400 md:underline-offset-8 border-b-2 md:border-0'>Contact</li>
        </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
