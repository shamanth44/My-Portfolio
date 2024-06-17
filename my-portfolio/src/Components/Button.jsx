import React from 'react'

function Button({label, href, width, size}) {
  return (
    <>
       <button className={`border border-[1px] border-black text-${size} rounded-3xl p-[12px] w-${width} bg-white transition-all duration-200 ease-in text-black hover:border-transparent hover:bg-[#353535] hover:text-white`}><a href={href} rel="noopener" target='_blank'>{label}</a></button>
    </>
  )
}

export default Button
