import React from 'react'

function Footer() {
    return (
        <div>
            <div className="pb-30 w-full ">
                <div className="max-w-screen-xl mx-auto flex gap-30 ">
                    <div className="basis-1/2">
                        <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>refokus.</h1>
                    </div>
                    <div className="basis-1/2 flex ">
                        <div className="basis-1/3">
                            <h1 className='mb-10 capitalize text-zinc-500'>socials</h1>
                            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => <a key ={index} className='block mt-3 capitalize text-zinc-500'>{item}</a>)}
                        </div>
                        <div className="basis-1/3">
                            <h1 className='mb-10 capitalize text-zinc-500'>socials</h1>
                            {["Home", "About", "Contact", "more"].map((item, index) => <a  key ={index} className='block mt-3 capitalize text-zinc-500'>{item}</a>)}
                        </div>
                        <div className="pt-10 basis-1/2 flex flex-col items-end">
                            <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto error ea fugiat tenetur ex!</p>
                            <span className=' mt-3 text-right w-2/3 px-3 py-2 bg-violet-600'>Empower</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer