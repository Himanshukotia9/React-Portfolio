import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../../public/Content/Data'

export default function Projects() {
  return (
    <div className='bg-slate-100 pb-8 px-4'>
      <h1 className='text-4xl lg:text-5xl py-5 text-center font-semibold text-slate-700 lg:py-14'>Projects</h1>
      <div className=''>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 block'>
            <div className='flex flex-col lg:flex-row
            justify-evenly items-center scale-95 lg:justify-between shadow-lg rounded-lg lg:shadow-none lg:rounded-none overflow-hidden transition-transform transform hover:scale-100'>
              <img src={project.image} alt={project.title} className='w-full lg:w-1/3 h-auto border my-auto rounded-sm object-cover'/>
              <div className='p-6 lg:w-2/3'>
                <h6 className='mb-2 text-slate-700 font-semibold text-xl'>{project.title}</h6>
                <p className='mb-4 text-slate-500'>{project.description}</p>
                <div className='flex flex-wrap'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 mb-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium'>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=' mt-auto flex justify-between ' id='navigation-btn'>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/about'>Previous</Link></button>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/skills'>Next</Link></button>
        </div>
    </div>
  )
}
