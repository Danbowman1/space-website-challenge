import React from 'react'
import classes from '../styles/Crew.module.css'
import { FiCircle } from 'react-icons/fi'


const CrewContent = (props) => {

    const { role, name, bio, image, toggleState, setToggleState } = props

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className={classes.crewContainer}>
            <div>
            <h2 className={classes.yourCrew}><span>02</span> Meet your crew</h2>
            <div className={classes.cardContainer}>
                    <p className={classes.role}>{role}</p>
                    <h1>{name}</h1>
                    <p className={classes.bio}>{bio}</p>
                    
                </div>
                <div className={classes.carousel}>
                        <FiCircle className={toggleState === 0 ?classes.active : classes.circle}
                        onClick={() => toggleTab(0)}
                        />
                        <FiCircle className={toggleState === 1 ? classes.active :classes.circle}
                        onClick={() => toggleTab(1)}
                        />
                        <FiCircle className={toggleState === 2 ?classes.active : classes.circle}
                        onClick={() => toggleTab(2)}
                        />
                        <FiCircle className={toggleState === 3 ?classes.active : classes.circle}
                        onClick={() => toggleTab(3)}
                        />
                    </div>
            </div>
        <img src={image} alt="crew member" className={classes.crewImg}/>
        </div>
    )
}

export default CrewContent