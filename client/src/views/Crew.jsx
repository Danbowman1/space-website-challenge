import React from 'react'
import data from '../json/data.json'
import classes from '../styles/Crew.module.css'
import doug from '../assets/crew/image-douglas-hurley.png'
import background from '../styles/background.module.css'
import NavBar from '../components/NavBar'
import CrewContent from '../components/CrewContent'

const Crew = () => {
    console.log(data)
    
    return (
        <div className={background.crew}>
        <NavBar />
            <div>
            
                <CrewContent
                image={data.crew[0].images.png}
                role={data.crew[0].role}
                name={data.crew[0].name}
                bio={data.crew[0].bio}
                />
            </div>
            
        </div>
    )
}

export default Crew