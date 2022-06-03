import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {

    const { children } = props

    return (
        <div className={`${classes.card} ${props.className}`} >
            {children}
        </div>
    )
}

export default Card