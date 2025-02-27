import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";

function Card({ width, start, para, hover }) {
    return (
        <div className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex  flex-col justify-between hover:${hover}`}>
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                    <h3 className='text-xl'>Heading</h3>
                    <IoArrowForwardOutline />
                </div>
                <h1 className='text-2xl font-semibold mt-4'>Koi bhi Heading </h1>
            </div>
            <div className="down ">

                {start &&
                    <div>
                        <h1 className='text-6xl font-semibold mt-60 tracking-tight leading-none'>Start a project</h1>
                        <button className='px-4 py-2 rounded-full border-[1px] border-zinc-100 mt-4'>Contact us</button>
                    </div>
                }

                {para && <p className='text-sm font-medium text-zinc-500 '>Lorem ipsum dolor sit amet consectetur.</p>}
            </div>
        </div>
    )
}

export default Card