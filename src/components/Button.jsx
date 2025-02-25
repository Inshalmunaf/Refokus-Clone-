import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({buttonTitle = "Get Started"}) {
  return (
    <div className='w-fit px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center gap-4 justify-between'>
        <span className='text-sm font-medium '>{buttonTitle}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button