import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_TEXT } from '../../public/Content/Data'

export default function AboutPage() {
  return (
    <div className='bg-slate-100 p-4'>
        <h1 className='text-4xl lg:text-5xl py-5 text-center font-semibold lg:py-14'>About
          <span className='text-neutral-500'> Me</span>
        </h1>
        <div className='flex flex-wrap items-center justify-evenly'>
          <div className='w-full lg:w-1/2 p-8'>
            <div className='flex items-center justify-center'>
              <img src="./public/Images/About.jpg" alt="about" className='rounded-2xl h-44 w-auto lg:h-96'/>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
              </div>
            </div>
        </div>
        <div className='flex justify-between'>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/'>Previous</Link></button>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/projects'>Next</Link></button>
        </div>
    </div>
  )
}
