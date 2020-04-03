import React from 'react'
import classes from './CardButton.module.css'

const CardButton = (props) => {
    return (
        <div className={classes.CardButtonWrapper}>
            <button onClick={props.btnClick} style={{backgroundColor: props.bgColor}}>{props.label}</button>
        </div>
    )
}

export default CardButton;