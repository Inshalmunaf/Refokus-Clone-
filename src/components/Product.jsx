import React from 'react'
import Button from './Button'

function Product({ product, mover, count }) {
    return (
        <div onMouseEnter={() => mover(count)} className={` relative w-full  h-[23rem] text-white `}>
            <div className={`absolute top-0 translate-y-[14%] w-full h-[18rem] flex items-center ${product.color ? product.colour : ''} `}>

                <div className=' w-[90%] relative max-w-screen-xl mx-auto flex items-center justify-between'>
                    <h1 className='  leading-none tracking-tight  text-5xl capitalize font-semibold'>{product.title}</h1>
                    <div className=" w-1/3 ">
                        <p className='mb-5'>{product.description}</p>
                        <div className="flex gap-5">
                            {product.live && <Button buttonTitle='Live Website' />}
                            {product.case && <Button buttonTitle='Case Study' />}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Product