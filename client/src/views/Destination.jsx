import React, { useState } from 'react'
import data from '../json/data.json'
import background from '../styles/background.module.css'
import classes from '../styles/Destination.module.css'
import NavBar from '../components/NavBar'
import DestinationContent from '../components/DestinationContent'


const Destination = () => {
    
    
    const [ toggleState, setToggleState ] = useState(1)


    return (
        <div className={background.destination}>
        <NavBar />
        <h2 className={classes.yourDestination}><span>01</span> Pick your destination</h2>
            <div className={classes.body}>
                <div className={toggleState === 1 ? classes.activeContent : classes.content}>
                <DestinationContent 
                    toggleState={1}
                    setToggleState={setToggleState}
                    image={data.destinations[0].images.png}
                    Name={data.destinations[0].name}
                    Desc={data.destinations[0].description}
                    Dist={data.destinations[0].distance}
                    Travel={data.destinations[0].travel}
                    />
                </div>
                <div className={toggleState === 2 ? classes.activeContent : classes.content}>
                <DestinationContent 
                    toggleState={2}
                    setToggleState={setToggleState}
                    image={data.destinations[1].images.png}
                    Name={data.destinations[1].name}
                    Desc={data.destinations[1].description}
                    Dist={data.destinations[1].distance}
                    Travel={data.destinations[1].travel}
                    />
                </div>
                <div className={toggleState === 3 ? classes.activeContent : classes.content}>
                <DestinationContent
                    toggleState={3}
                    setToggleState={setToggleState}
                    image={data.destinations[2].images.png}
                    Name={data.destinations[2].name}
                    Desc={data.destinations[2].description}
                    Dist={data.destinations[2].distance}
                    Travel={data.destinations[2].travel}
                    />
                </div>
                <div className={toggleState === 4 ? classes.activeContent : classes.content}>
                <DestinationContent 
                    toggleState={4}
                    setToggleState={setToggleState}
                    image={data.destinations[3].images.png}
                    Name={data.destinations[3].name}
                    Desc={data.destinations[3].description}
                    Dist={data.destinations[3].distance}
                    Travel={data.destinations[3].travel}
                    />
                </div>
            </div>
        </div>
    )
}

export default Destination