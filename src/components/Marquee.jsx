import React from 'react'
import { motion } from "framer-motion"

function Marquee({ url, direction }) {
  return (

    <div className='flex w-full overflow-hidden'>
      <motion.div
        initial={{ x: direction === 0 ? "0%" : "-100%" }}
        animate={{ x: direction === 0 ? "-100%" : "0%" }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
        className=" flex flex-shrink-0 items-center py-10 pr-40 gap-40 ">
        {url.map((urls, index) => <img key={index} src={urls} className='' />)}
      </motion.div>
      <motion.div
        initial={{ x: direction === 0 ? "0%" : "-100%" }}
        animate={{ x: direction === 0 ? "-100%" : "0%" }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
        className=" flex flex-shrink-0 items-center py-10 pr-40 gap-40 ">
        {url.map((urls, index) => <img key={index} src={urls} className='' />)}
      </motion.div>






    </div>
  )
}

export default Marquee