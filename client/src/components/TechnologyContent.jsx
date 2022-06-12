import React from 'react'
import classes from '../styles/Technology.module.css'

const TechnologyContent = (props) => {

    const { toggleState, setToggleState, name, desc, image } = props

    const toggleTab = (index) => {
        setToggleState(index)
    }
    console.log(image)
    return (
        <div className={classes.techContainer}>
            <h2 className={classes.launch}><span>03</span> Space Launch 101</h2>
                <div className={classes.tabs}>
                    <div className={toggleState === 1 ? classes.activeTab : classes.tab}
                    onClick={() => toggleTab(1)}
                    ><p>1</p></div>
                    <div className={toggleState === 2 ? classes.activeTab : classes.tab}
                    onClick={() => toggleTab(2)}
                    ><p>2</p></div>
                    <div className={toggleState === 3 ? classes.activeTab : classes.tab}
                    onClick={() => toggleTab(3)}
                    ><p>3</p></div>
                </div>
                <div className={classes.cardBody}>
                    <p className={classes.intro}>THE TERMINOLOGY…</p>
                    <h1>{name}</h1>
                    <p className={classes.desc}>{desc}</p>
                </div>
                <div className={classes.imgContainer}>
                    <img src={image} alt="Tech" className={classes.techImg}/>
                </div>
        </div>
    )
}

export default TechnologyContent