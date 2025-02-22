import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.6666%] gap-8 px-7 py-5  flex justify-between items-center border-t-[1.2px] border-b-[1.2px]  border-r-[1.2px] border-zinc-600'>
        <img className='' src= {val.url} alt="" />
        <span  className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe