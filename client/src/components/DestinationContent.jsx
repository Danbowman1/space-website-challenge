import React from 'react'
import classes from '../styles/Destination.module.css'


const DestinationContent = (props) => {

    const { Name, Desc, Dist, Travel, image, toggleState, setToggleState } = props
    
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className={classes.contentContainer}>
            <img src={image} alt="planet" className={classes.planetImg}/>
            <div className={classes.cardContainer}>
                <div className={classes.cardTabs}>
                        <ul>
                            <li className={toggleState === 0 ? classes.activeTab : null}
                            onClick={() => toggleTab(0)}
                            >Moon</li>

                            <li className={toggleState === 1 ? classes.activeTab : null}
                            onClick={() => toggleTab(1)}
                            >Mars</li>

                            <li className={toggleState === 2 ? classes.activeTab : null}
                            onClick={() => toggleTab(2)}
                            >Europa</li>

                            <li className={toggleState === 3 ? classes.activeTab : null}
                            onClick={() => toggleTab(3)}
                            >Titan</li>
                        </ul>
                    </div>
                    <div className={classes.cardDesc}>
                        <h1>{Name}</h1>
                        <p>{Desc}</p>
                    </div>
                    <hr />
                    <div className={classes.cardFooter}>
                        <div>
                            <p>Avg. Distance</p>
                            <h2>{Dist}</h2>
                        </div>
                        <div>
                            <p>Est. travel time</p>
                            <h2>{Travel}</h2>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DestinationContent