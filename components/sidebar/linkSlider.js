import { Book, BookOpen, House, Map, Presentation, Swords, Target, TrendingUp, Trophy, UsersRound } from 'lucide-react';
import Classes from './sidebar.module.css';
let links = [
    {name:'Dashboard', icon:<House/>, link:''}, 
    {name:'My Classes', icon:<Presentation/>, link:''}, 
    {name:'Portfolio', icon:<BookOpen/>, link:''}, 
    {name:'Career Guidance', icon:<Target/>, link:''}, 
    {name:'Adaptive Path', icon:<TrendingUp />, link:''}, 
    {name:'Learning Map', icon:<Map/>, link:''}, 
    {name:'Leaderboard', icon:<Trophy/>, link:''}, 
    {name:'Team Challenges', icon:<Swords/>, link:''}, 
    {name:'Resources', icon:<House/>, link:''},
    {name:'AI Tutor', icon:<House/>, link:''},
    {name:'Study Groups', icon:<Book/>, link:''},
    {name:'Discussions', icon:<House/>, link:''},
    {name:'Peer Review', icon:<UsersRound/>, link:''},
    {name:'Messages', icon:<House/>, link:''},
]
function linkSlider() {
    return (
            <menu className={Classes.links}>
                {links.map(link=>
                    <a key={link.name} href={link.link} className={Classes.link}>
                        <span>{link.icon}</span>{link.name}
                    </a>)}
            </menu>
    )
}

export default linkSlider
