import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion"
import maniv from '../assets/videos/maniv.mp4'
import ttr from "../assets/videos/ttr.webm";
import webflow from "../assets/videos/webflow.mp4";
import yahoo from "../assets/videos/yahoo.webm";
import yir from "../assets/videos/yir.webm";


function Products() {
  var prodduct = [
    { title: "Arqitle", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false, colour: "bg-green-500", color: false },
    { title: "Cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false, colour: "bg-blue-400", color: false },
    { title: "Yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true, colour: "bg-yellow-500", color: false },
    { title: "YIRR 2025", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true, colour: "bg-violet-500", color: false },
    { title: "Maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: false, colour: "bg-cyan-500", color: false },
  ]

  const [product, setProducts] = useState(prodduct)
  const [pos, setPos] = useState(0)

  const mover = (val) => {
    console.log(val)

    setPos(val * 23)
    setProducts(prev =>
      prev.map((elem, index) =>
        (index === val ? { ...elem, color: true } : { ...elem, color: false })
      )
    )
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
          className=" window absolute w-[32rem] h-[23rem] left-[25%] overflow-hidden ">

          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full ">

            <video
              autoPlay
              loop
              muted
              className=' absolute w-full h-full  rounded-xl object-cover '>
              <source src={webflow} />
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .66 }}
            className="w-full h-full ">
            <video
              autoPlay
              loop
              muted
              className=' absolute w-full h-full  rounded-xl object-cover '>
              <source src={ttr} />
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }}
            className="w-full h-full ">
            <video
              autoPlay
              loop
              muted
              className=' absolute w-full h-full  rounded-xl object-cover '>
              <source src={yahoo} />
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }}
            className="w-full h-full ">
            <video
              autoPlay
              loop
              muted
              className=' absolute w-full h-full  rounded-xl object-cover '>
              <source src={yir} />
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }}
            className="w-full h-full">
            <video
              autoPlay
              loop
              muted
              className=' absolute w-full h-full  rounded-xl object-cover '>
              <source src={maniv} />
            </video>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Products