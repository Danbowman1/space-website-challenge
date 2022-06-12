import React, { useState, useEffect} from 'react'
import data from '../json/data.json'
import classes from '../styles/Crew.module.css'
import doug from '../assets/crew/image-douglas-hurley.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import anousheh from '../assets/crew/image-anousheh-ansari.png'
import background from '../styles/background.module.css'
import NavBar from '../components/NavBar'
import CrewContent from '../components/CrewContent'

const Crew = () => {

    let [ toggleState, setToggleState ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {

            if(toggleState < 3) {
                setToggleState( toggleState + 1)
            } else {
                setToggleState(0)
            }
        }, 4000)
        
        return () => clearInterval(interval)
    }, [toggleState])
    
    return (
        <div className={background.crew}>
        <NavBar />
            <div className={toggleState === 0 ? classes.activeContent : classes.content}>
                <CrewContent
                toggleState={0}
                setToggleState={setToggleState}
                image={data.crew[0].images.png}
                role={data.crew[0].role}
                name={data.crew[0].name}
                bio={data.crew[0].bio}
                />
            </div>
            <div className={toggleState === 1 ? classes.activeContent : classes.content}>
                <CrewContent
                toggleState={1}
                setToggleState={setToggleState}
                image={data.crew[1].images.png}
                role={data.crew[1].role}
                name={data.crew[1].name}
                bio={data.crew[1].bio}                   
                />
            </div>
            <div className={toggleState === 2 ? classes.activeContent : classes.content}>
            <CrewContent
            toggleState={2}
            setToggleState={setToggleState}
            image={data.crew[2].images.png}
            role={data.crew[2].role}
            name={data.crew[2].name}
            bio={data.crew[2].bio}
            />
            </div>
            <div className={toggleState === 3 ? classes.activeContent : classes.content}>
            <CrewContent
            toggleState={3}
            setToggleState={setToggleState}
            image={data.crew[3].images.png}
            role={data.crew[3].role}
            name={data.crew[3].name}
            bio={data.crew[3].bio}
            />
            </div>
        </div>
    )
}

export default Crew