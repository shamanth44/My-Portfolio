import React from 'react'
import Button from './Button'

function Profile() {
  return (
    <>
    <div className='flex justify-center flex-col md:flex-row items-center gap-10 md:mt-32 mt-4'>
        {/* left */}
        <div className='left-img'><img src="https://res.cloudinary.com/shamanth-ganiger/image/upload/v1718805243/IMG_6770-01_mpsbsu.jpg" className='md:w-96 w-72 rounded-full' alt="profile" /></div>
        {/* right */}
        <div className="right text-center">
            <p className='text-xl font-semibold text-gray-700'>Hello, I'm</p>
            <h1 className='md:text-5xl text-3xl font-bold mt-4'>Shamanth Ganiger</h1>
            <h2 className='md:text-3xl text-2xl font-semibold text-gray-700 mt-4'>MERN Stack Developer</h2>
            <div className="flex justify-center gap-4 button-links mt-4">
                <Button label={"Resume"} href={"https://drive.google.com/file/d/1xnB5F60b-m_ssaThMgzqfkVKtfy0YCU2/view"} size={"sm"} width={"32"}/>
                <button className='border border-black text-sm rounded-3xl p-[12px] w-32 bg-[#353535] transition-all duration-200 ease-in text-white hover:bg-black'>Contact Info</button>
            </div>
            <div className=" flex justify-center gap-4 icons mt-4">
                <a href="https://github.com/shamanth44" rel="noopener" target='_blank'><div><img className='w-9  bg-black rounded-full cursor-pointer' src="https://res.cloudinary.com/shamanth-ganiger/image/upload/v1718805239/github-mark_og763m.png" alt="" /></div></a>
                <a href="https://www.linkedin.com/in/shamanth-ganiger-47958215a/" rel="noopener" target='_blank'><div><img className='w-10 bg-black rounded-full   cursor-pointer' src="https://res.cloudinary.com/shamanth-ganiger/image/upload/v1718805239/linkedIn_idvelb.png" alt="" /></div></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile
