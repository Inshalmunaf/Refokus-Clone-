import React from 'react'

function Marquee({ url }) {
  return (
    <div className='flex items-center  py-8 gap-20 overflow-hidden'>
      {url.map(urls => <img src={urls} className='w-[8vw] flex-shrink-0' />)}
      {url.map(urls => <img src={urls} className='w-[8vw] flex-shrink-0' />)}
    </div>
  )
}

export default Marquee