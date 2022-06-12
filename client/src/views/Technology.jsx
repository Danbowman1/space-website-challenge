import React, { useState } from 'react'
import data from '../json/data.json'
import vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg'
import vehicleMob from '../assets/technology/image-launch-vehicle-landscape.jpg'
import spacePort from '../assets/technology/image-spaceport-portrait.jpg'
import spaceportMob from '../assets/technology/image-spaceport-landscape.jpg'
import capsule from '../assets/technology/image-space-capsule-portrait.jpg'
import capsuleMob from '../assets/technology/image-space-capsule-landscape.jpg'
import background from '../styles/background.module.css'
import classes from '../styles/Technology.module.css'
import NavBar from '../components/NavBar'
import TechnologyContent from '../components/TechnologyContent'

const Technology = () => {

    const [ toggleState, setToggleState ] = useState(1)

    const vehicleUrl = window.innerWidth >= 1100 ? vehicle : vehicleMob
    const spaceportUrl = window.innerWidth >= 1100 ? spacePort : spaceportMob
    const capsuleUrl = window.innerWidth >= 1100 ? capsule : capsuleMob

    return (
        <div className={background.technology}>
        <NavBar />
        <div className={toggleState === 1 ? classes.activeContent : classes.content}>
        <TechnologyContent
        toggleState={1}
        setToggleState={setToggleState}
        name={data.technology[0].name}
        desc={data.technology[0].description}
        image={vehicleUrl}
        />
        </div>
        <div className={toggleState === 2 ? classes.activeContent : classes.content}>
        <TechnologyContent
        toggleState={2}
        setToggleState={setToggleState}
        name={data.technology[1].name}
        desc={data.technology[1].description}
        image={spaceportUrl}
        />
        </div>
        <div className={toggleState === 3 ? classes.activeContent : classes.content}>
        <TechnologyContent
        toggleState={3}
        setToggleState={setToggleState}
        name={data.technology[2].name}
        desc={data.technology[2].description}
        image={capsuleUrl}
        />
        </div>
        
        </div>
    )
}

export default Technology