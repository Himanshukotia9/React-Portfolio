import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react'
import React, { createContext, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const SidebarContext = createContext()
export default function Sidebar({children}) {

    const[expanded,setExpanded] = useState(true);
    const[activeItem,setactiveItem] = useState(null);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
          setExpanded(false);
        } else {
          setExpanded(true);
        }
      };
    
      // useLayoutEffect to set initial state and add resize listener
      useLayoutEffect(() => {
        handleResize(); // Set the initial state based on the screen size
        window.addEventListener('resize', handleResize); // Add resize event listener
    
        return () => {
          window.removeEventListener('resize', handleResize); // Clean up the event listener on unmount
        };
      }, []);

  return (
    <aside className='h-screen sticky'>
        <nav className={`h-full max-w-72 flex flex-col bg-slate-50 border-r shadow-sm ${ expanded ? 'max-w-72' : 'max-w-min'}`}>
            <div className='p-4 pb-2 flex justify-between items-center'>
                <img src="/Images/Himanshu-Kotia.svg" alt="Logo" className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}/>
                <button aria-label="Menu" onClick={() => setExpanded(curr =>!curr)} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                    {expanded ? <ChevronFirst/> : <ChevronLast/>}
                </button>
            </div>

            <SidebarContext.Provider value={{expanded, activeItem, setactiveItem}}>
                <ul className='flex-1 px-3'>{children}</ul>
            </SidebarContext.Provider>

            <div className='border-t flex p-3'>
                <img src="https://ui-avatars.com/api/?name=Himanshu+Kotia&background=c7d2fe&color=3730a3&bold=true" alt="Avatar" className='w-10 h-10 rounded-md'/>
                <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
                    <div className='leading-4'>
                        <h4 className="font-sembold">Himanshu Kotia</h4>
                        <span className='text-xs text-gray-600'>Himanshukotia9@gmail.com</span>
                    </div>
                    <MoreVertical size={20}/>
                </div>
            </div>

        </nav>
    </aside>
  )
}

export function SidebarItem({icon, text, to, externalLink}){
    const {expanded, activeItem, setactiveItem} = React.useContext(SidebarContext);
    function handleClick(){
        setactiveItem(text)
    }

    const content = (
        <>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{text}</span>
            
            {!expanded && (<div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                {text}
            </div>)}
        </>
    );

    if(externalLink){
        return (
            <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${activeItem === text ? 'bg-gradient-to-t from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'}`} onClick={handleClick}>
                <a href={externalLink} target="_blank" rel="noreferrer" className='flex items-center w-ful'>
                    {content}
                </a>
            </li>
        );
    }else{
        return (
            <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${activeItem === text ? 'bg-gradient-to-t from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'}`} onClick={handleClick}>
                <Link to={to} className="flex items-center w-full">
                {content}
                </Link>
            </li>
        );
    }
}