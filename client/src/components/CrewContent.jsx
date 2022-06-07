import React from 'react'
import classes from '../styles/Crew.module.css'
import { FiCircle } from 'react-icons/fi'
const CrewContent = (props) => {

    const { role, name, bio, image } = props
    console.log(image)
    return (
        <div className={classes.crewContainer}>
            <div>
            <h2 className={classes.yourCrew}><span>02</span> Meet your crew</h2>
            <div className={classes.cardContainer}>
                    <p className={classes.role}>{role}</p>
                    <h1>{name}</h1>
                    <p className={classes.bio}>{bio}</p>
                    <div className={classes.carousel}>
                        <FiCircle className={classes.circle}/>
                        <FiCircle className={classes.circle}/>
                        <FiCircle className={classes.circle}/>
                        <FiCircle className={classes.circle}/>
                    </div>
                </div>
            </div>
        <img src={image} alt="crew member" className={classes.crewImg}/>
        </div>
    )
}

export default CrewContent