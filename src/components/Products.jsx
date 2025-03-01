import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion"

function Products() {
  var product = [
    { title: "Arqitle", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false },
    { title: "Cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false },
    { title: "Yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true },
    { title: "YIRR 2025", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true },
    { title: "Maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: false },
  ]

  const [pos, setPos] = useState(0)
  const mover = (val) => {
    console.log(val)
    setPos(val * 23)
  }

  return (
    <div className='relative mt-32 '>
      {product.map((elem, index) => {
        return <Product key={index} product={elem} mover={mover} count={index} />
      })}
      <div className="w-full h-full absolute top-0  pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }}
          className=" window absolute w-[32rem] h-[23rem] bg-sky-600 left-[25%] overflow-hidden ">
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  bg-red-300">
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .66}}
            className="w-full h-full  bg-red-500">

          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }}
            className="w-full h-full  bg-red-700">

          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }}
            className="w-full h-full  bg-red-900">

          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }}
            className="w-full h-full  bg-red-600">

          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Products