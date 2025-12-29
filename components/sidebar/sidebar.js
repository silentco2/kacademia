'use client'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import Profile from './profile'
import Links from './linkSlider'
import Settings from './settings'
import Classes from './sidebar.module.css'
function Sidebar() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button className={`${Classes.hamburger} glass-card`} onClick={()=>{setOpen(true)}}><Menu/></button>
            <nav className={`${Classes.sidebar} glass-card`} style={open?{}:{width:0,opacity:0}}>
                <Profile setOpen={setOpen}/>
                <Links/>
                <Settings/>
            </nav>
        </>
    )
}

export default Sidebar
