import React from 'react'
import Classes from './linkCard.module.css'
function linkCard({color,icon,link,children,iconSize=32}) {
    return (
        <a href={link} className={`${Classes.link} glass-card`}>
            <div className={Classes.icon} style={{background:`var(--card-${color})`}}>
                {React.cloneElement(icon,{size:iconSize})}
            </div>
            {children}
        </a>
    )
}

export default linkCard
