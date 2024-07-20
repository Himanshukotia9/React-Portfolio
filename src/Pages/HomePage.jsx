import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <section className="p-4 bg-slate-100 flex-1 flex flex-col justify-center" id="home">
        <div className=' flex flex-row justify-evenly items-center mt-auto'>
            <div className='w-full sm:w-3/4'>
                <h1 className='text-4xl py-2 md:text-6xl'>Hi, I'm Himanshu Kotia</h1>
                <div className="text-animate flex">
                    <h3 className='text-3xl font-semibold py-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent md:text-5xl'>Frontend Developer</h3>
                </div>
                <p className='py-2 md:text-lg'>Welcome to my portfolio website! I am thrilled to showcase my skills and projects as a frontend developer. With a passion for creating visually appealing and user-friendly websites, I strive to bring innovative ideas to life through clean and efficient code. From crafting responsive layouts to implementing interactive features, I am constantly pushing the boundaries of web development. Through this portfolio, I invite you to explore my work and witness my dedication to delivering exceptional digital experiences. Join me on this journey as we embark on the exciting world of frontend development together. Let's create something remarkable!</p>
                <div id="btn-box" className='my-5'>
                    <a href="public/Himanshu Kotia Resume.pdf" download="" id="btn" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all'>Download CV</a>
                    <Link to='/contact' className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all' id="btn">Let's Talk</Link>
                </div>
            </div>  
            <div id='blob-img' className='hidden md:block bg-home w-96 h-96 bg-cover bg-top m-5 shadow-lg shadow-slate-500'>
            </div>
        </div>
        <div className=' mt-auto flex justify-between' id='navigation-btn'>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/contact'>Previous</Link></button>
          <button className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/about'>Next</Link></button>
        </div>
    </section>

  </div>
  )
}
