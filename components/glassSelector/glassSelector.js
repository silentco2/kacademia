import Classes from './glassSelector.module.css'
function glassSelector({items,selected,setSelected}) {
    return (
        <menu className={`${Classes.menu} glass-card`}>
            {items.map(item=><li key={item} className={`${Classes.item} ${selected===item?`${Classes.active} glass-card`:''}`} onClick={()=>setSelected(item)}>{item}</li>)}
        </menu>
    )
}

export default glassSelector
