import React from 'react'
import { Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion"
import { Repeat } from 'lucide-react';

const iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {y: [10,-10], transition: {duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
})

export default function SkillsPage() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-100 p-4'>
      <motion.h1 initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{ delay: 0.3, duration: 0.5}} className='text-4xl lg:text-5xl py-5 text-center font-semibold text-slate-700 lg:py-14'>Skills</motion.h1>
      <div className='flex-grow flex flex-col justify-center items-center'>
        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration: 1.5}} className='flex flex-wrap justify-center gap-4' id='skills'>
          <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-slate-400 p-4'>
            <FaHtml5 className='text-7xl text-orange-500'/>
          </motion.div>
          <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-slate-400 p-4'>
            <FaCss3Alt className='text-7xl text-blue-600'/>
          </motion.div>
          <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-slate-400 p-4'>
            <FaBootstrap className='text-7xl text-violet-700'/>
          </motion.div>
          <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-slate-400 p-4'>
            <IoLogoJavascript className='text-7xl text-yellow-400'/>
          </motion.div>
          <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-slate-400 p-4'>
            <RiTailwindCssFill className='text-7xl text-teal-400'/>
          </motion.div>
          <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-slate-400 p-4'>
            <FaReact className='text-7xl text-cyan-400'/>
          </motion.div>
        </motion.div>
      </div>
      <div className='flex justify-between mt-auto' id='navigation-btn'>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/projects'>Previous</Link></button>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/contact'>Next</Link></button>
        </div>
    </div>
  )
}
