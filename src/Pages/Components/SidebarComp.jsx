import React from 'react'
import Sidebar, {SidebarItem} from './Sidebar'
import { Github,PencilRuler,Headset,Lightbulb,House,Linkedin,CircleUser } from 'lucide-react'

export default function SidebarComp() {
  return (
    <div>
      <Sidebar>
        <SidebarItem icon={<House size={20}/>} text='Home' to='/'/>
        <SidebarItem icon={<CircleUser size={20}/>} text='About' to='/about'/>
        <SidebarItem icon={<Lightbulb size={20}/>} text='Projects' to='/projects'/>
        <SidebarItem icon={<PencilRuler size={20}/>} text='Skills' to='/skills'/>
        <SidebarItem icon={<Headset size={20}/>} text='Contact' to='/contact'/>
        <hr className='my-3' />
        <SidebarItem icon={<Linkedin size={20}/>} text='LinkedIn' externalLink='https://www.linkedin.com/in/himanshukotia9/'/>
        <SidebarItem icon={<Github size={20}/>} text='GitHub' externalLink='https://github.com/Himanshukotia9'/>
      </Sidebar>
    </div>
  )
}
