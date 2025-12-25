import LinkCard from "./linkCard"
import Classes from './linkList.module.css'
function quickList({cards}) {
    return (
        <nav className={Classes.list}>
            {cards.map(card=><LinkCard key={card.title} icon={card.icon} color={card.color} iconSize={24}><h3 style={{marginBottom:'.5rem'}}>{card.title}</h3><p>{card.content}</p></LinkCard>)}
        </nav>
    )
}

export default quickList
