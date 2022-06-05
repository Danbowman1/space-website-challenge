import React from 'react'
import classes from '../styles/Technology.module.css'

const TechnologyContent = () => {
    return (
        <div className={classes.techContainer}>
            <div>
                <h2 className={classes.launch}><span>03</span> Space Launch 101</h2>
            </div>
            <div className={classes.cardContainer}>
                <div className={classes.tabs}>
                    <div className={classes.tab}><p>1</p></div>
                    <div className={classes.tab}><p>2</p></div>
                    <div className={classes.tab}><p>3</p></div>
                </div>
                <div className={classes.cardBody}>

                </div>
            </div>
        </div>
    )
}

export default TechnologyContent