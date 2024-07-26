import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_TEXT } from '../../public/Content/Data'
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x:-100, opacity: 0 },
  visible:{
    x:0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 }
  },
});

const container2 = (delay) => ({
  hidden: { x:100, opacity: 0 },
  visible:{
    x:0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 }
  },
});

export default function AboutPage() {
  return (
    <div className='bg-slate-100 p-4'>
        <motion.h1 initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{ delay: 0.3, duration: 0.5}} className='text-4xl lg:text-5xl py-5 text-center text-slate-700 font-semibold lg:py-14'>About
          <span className='text-neutral-500'> Me</span>
        </motion.h1>
        <div className='flex flex-wrap items-center justify-evenly'>
          <div className='w-full lg:w-1/2 p-8'>
            <div className='flex items-center justify-center'>
              <motion.img variants={container(0.5)}
                initial="hidden" animate="visible" src="/Images/About.jpg" alt="about" className='rounded-2xl h-44 w-auto lg:h-96'/>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start'>
                <motion.p variants={container2(0.5)}
                initial="hidden" animate="visible" className='my-2 text-slate-500 max-w-xl py-6'>{ABOUT_TEXT}</motion.p>
              </div>
            </div>
        </div>
        <div className='flex justify-between mt-auto' id='navigation-btn'>
          <motion.button variants={container(0.7)}
                initial="hidden" animate="visible" className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/'>Previous</Link></motion.button>
          <motion.button variants={container2(0.7)}
                initial="hidden" animate="visible" className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/projects'>Next</Link></motion.button>
        </div>
    </div>
  )
}
