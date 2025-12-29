import { Bell, LogOut, Settings } from 'lucide-react'
import Classes from './sidebar.module.css'
let links = [
    {name:'Notifications', icon:<Bell/>, link:''}, 
    {name:'Settings', icon:<Settings/>, link:''}, 
    {name:'Logout', icon:<LogOut/>, link:''}
]
function settings() {
    return (
        <div className={Classes.settings}>
            {links.map(link=>
                <a key={link.name} href={link.link} className={Classes.link}>
                    <span>{link.icon}</span>{link.name}
                </a>)}
        </div>
    )
}

export default settings
