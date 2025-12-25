import LinkCard from "./linkCard"
import Classes from './linkList.module.css'
function dataList({cards}) {
    return (
        <nav className={Classes.list}>
            {cards.map(card=><LinkCard key={card.title} icon={card.icon} color={card.color}><p>{card.title}</p><h1>{card.content}</h1></LinkCard>)}
        </nav>
    )
}

export default dataList
