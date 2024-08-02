import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../../public/Content/Data'
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

export default function Projects() {
  return (
    <div className='bg-slate-100 pb-8 px-4'>
      <motion.h1 initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{ delay: 0.3, duration: 0.5}} className='text-4xl lg:text-5xl py-5 text-center font-semibold text-slate-700 lg:py-14'>Projects</motion.h1>
      <div className=''>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 block'>
            <div className='flex flex-col lg:flex-row
            justify-evenly items-center scale-95 lg:justify-between shadow-lg rounded-lg lg:shadow-none lg:rounded-none overflow-hidden transition-transform transform hover:scale-100'>
              <motion.img variants={container(0.1)}
                initial="hidden" whileInView="visible" src={project.image} alt={project.title} className='w-full lg:w-1/3 h-auto border my-auto rounded-sm object-cover'/>
              <motion.div variants={container2(0.1)}
              initial="hidden" whileInView="visible" className='p-6 lg:w-2/3'>
                <h6 className='mb-2 text-slate-700 font-semibold text-xl hover:text-blue-600'><a href={project.link} target='_blank'>{project.title}</a></h6>
                <p className='mb-4 text-slate-500'>{project.description}</p>
                <div className='flex flex-wrap'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 mb-2 rounded bg-neutral-500 text-white px-2 py-1 text-sm font-medium'>{tech}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className=' mt-auto flex justify-between ' id='navigation-btn'>
          <motion.button variants={container(0.1)}
                initial="hidden" animate="visible" className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/about'>Previous</Link></motion.button>
          <motion.button variants={container2(0.1)}
                initial="hidden" animate="visible" className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/skills'>Next</Link></motion.button>
        </div>
    </div>
  )
}
