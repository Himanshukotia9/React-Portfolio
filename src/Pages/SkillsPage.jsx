import React from 'react'
import { Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion"

export default function SkillsPage() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-100 p-4'>
      <div className='flex-grow '>
        <h1 className='text-4xl lg:text-5xl py-5 text-center font-semibold text-slate-700 lg:py-14'>Skills</h1>
        <div className='flex flex-wrap justify-center items-center gap-4'>
          <div className='rounded-2xl border-4 border-slate-400 p-4'>
            <FaHtml5 className='text-7xl text-orange-500'/>
          </div>
          <div className='rounded-2xl border-4 border-slate-400 p-4'>
            <FaCss3Alt className='text-7xl text-blue-600'/>
          </div>
          <div className='rounded-2xl border-4 border-slate-400 p-4'>
            <FaBootstrap className='text-7xl text-violet-700'/>
          </div>
          <div className='rounded-2xl border-4 border-slate-400 p-4'>
            <IoLogoJavascript className='text-7xl text-yellow-400'/>
          </div>
          <div className='rounded-2xl border-4 border-slate-400 p-4'>
            <RiTailwindCssFill className='text-7xl text-teal-400'/>
          </div>
          <div className='rounded-2xl border-4 border-slate-400 p-4'>
            <FaReact className='text-7xl text-cyan-400'/>
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-auto' id='navigation-btn'>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/projects'>Previous</Link></button>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/contact'>Next</Link></button>
        </div>
    </div>
  )
}
