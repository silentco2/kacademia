import React from 'react'
import classes from './buttons.module.css'
function buttons({text,icon,bgcolor}) {
    return (
        <button className={classes.btn} style={{"--bg-color":bgcolor}}>
            {React.cloneElement(icon, { size: 18,style:{marginRight:"1rem"} })} {text}
        </button>
    )
}
export default buttons
