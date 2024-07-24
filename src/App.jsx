import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SidebarComp from './Pages/Components/SidebarComp'
import ContactPage from './Pages/ContactPage'
import Projects from './Pages/Projects'
import Footer from './Pages/Components/Footer'
import AboutPage from './Pages/AboutPage'
import SkillsPage from './Pages/SkillsPage'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <div className='flex h-screen overflow-hidden'>
      <BrowserRouter>
        <SidebarComp />
          <div className='flex-1 flex flex-col'>
            <div className='flex-1 overflow-y-auto'>
              <Routes>
                <Route path='/' element= {<HomePage/>}/>
                <Route path='/home' element= {<HomePage/>}/>
                <Route path='/about' element= {<AboutPage/>}/>
                <Route path='/projects' element= {<Projects/>}/>
                <Route path='/skills' element= {<SkillsPage/>}/>
                <Route path='/contact' element= {<ContactPage/>}/>
                <Route path='/contactp' element= {<Contact/>}/>
              </Routes>  
              <Footer/>
            </div>
          </div>  
      </BrowserRouter>
    </div>
  )
}
