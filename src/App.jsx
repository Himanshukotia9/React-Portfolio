import React from 'react'
import Sidebar, { SidebarItem } from './Pages/Components/Sidebar'
import { Github,PencilRuler,Headset,GraduationCap,House,Linkedin,CircleUser } from 'lucide-react'

export default function App() {
  return (
    <div>
      <Sidebar>
      <SidebarItem icon={<House size={20}/>} text='Home' alert/>
        <SidebarItem icon={<CircleUser size={20}/>} text='About' active/>
        <SidebarItem icon={<GraduationCap size={20}/>} text='Education'/>
        <SidebarItem icon={<PencilRuler size={20}/>} text='Skills'/>
        <SidebarItem icon={<Headset size={20}/>} text='Contact' alert/>
        <hr className='my-3' />
        <SidebarItem icon={<Linkedin size={20}/>} text='LinkedIn'/>
        <SidebarItem icon={<Github size={20}/>} text='GitHub'/>
      </Sidebar>
    </div>
  )
}
