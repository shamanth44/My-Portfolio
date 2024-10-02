import React from 'react'

function Button({label, href, width, size}) {
  return (
    <>
       <a href={href} rel="noopener" target='_blank' ><button className={`border border-black text-${size} rounded-3xl p-[12px] w-${width} bg-white transition-all duration-200 ease-in text-black hover:border-transparent hover:bg-[#353535] hover:text-white`}>{label}</button></a>
    </>
  )
}

export default Button
