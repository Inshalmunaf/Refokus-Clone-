import React from 'react'
import Button from './Button'

function Navbar() {

    return (
        <div className='max-w-screen-xl mx-auto py-6  flex  items-center justify-between border-b-1 border-zinc-700 '>
            <div className="nleft flex items-center">
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className="links flex gap-10 ml-20">
                    {['Home', 'Work', 'Culture', '', 'News'].map((elem, index) =>
                        <a key={index} className='font-regular text-xs flex items-center gap-1' href='#'>
                            {index === 1 && (<span className=' inline-block w-1 h-1 rounded-full bg-green-500 shadow-[0px_0px_0.45em]  '></span>)}
                            {elem.length === 0 ? <span className='w-[2px] h-6 bg-zinc-700 rounded-sm'></span> : elem}

                        </a>)}
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Navbar