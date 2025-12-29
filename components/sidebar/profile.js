'use Client'
import {UserRound, X } from 'lucide-react'
import Classes from './sidebar.module.css'
function profile({setOpen}) {
    return (
        <div className={Classes.profile}>
            
            <h2> 
               <span className={`${Classes.userIcon} glass-card`}><UserRound/></span> osama
            </h2>
            <button className={Classes.close} onClick={()=>{setOpen(false)}}><X/></button>
        </div>
    )
}

export default profile