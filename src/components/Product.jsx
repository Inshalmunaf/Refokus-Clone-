import React from 'react'
import Button from './Button'

function Product({ product }) {
    return (
        <div className="w-full pt-20 h-[23rem] text-white">

            <div className='relative max-w-screen-xl mx-auto flex items-center justify-between'>
                <h1 className='text-5xl capitalize font-semibold'>{product.title}</h1>
                <div className=" w-1/3">
                    <p className='mb-5'>{product.description}</p>
                    <div className="flex gap-5">
                        {product.live && <Button buttonTitle='Live Website' />}
                        {product.case && <Button buttonTitle='Case Study' />}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product