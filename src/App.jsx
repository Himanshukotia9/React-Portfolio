import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SidebarComp from './Pages/Components/SidebarComp'
import Education from './Pages/Education'
import ContactPage from './Pages/ContactPage'

export default function App() {
  return (
    <div className='flex h-screen overflow-hidden'>
      <BrowserRouter>
        <SidebarComp />
          <div className='flex-1 overflow-y-auto'>
            <Routes>
              <Route path='/' element= {<HomePage/>}/>
              <Route path='/education' element= {<Education/>}/>
              <Route path='/contact' element= {<ContactPage/>}/>
            </Routes>  
          </div>  
      </BrowserRouter>
      
    </div>
  )
}
