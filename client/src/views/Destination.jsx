import React from 'react'
import moon from '../assets/destination/image-moon.png'
import background from '../styles/background.module.css'
import classes from '../styles/Destination.module.css'
import NavBar from '../components/NavBar'

const Destination = () => {
    return (
        <div className={background.destination}>
        <NavBar />
        <h2 className={classes.yourDestination}><span>01</span> Pick your destination</h2>
        <div className={classes.body}>
            <img src={moon} alt="moon" className={classes.planetImg}
            />
            <div className={classes.cardContainer}>
                <div className={classes.cardTabs}>
                    <ul>
                        <li><a href="#">Moon</a></li>
                        <li><a href="#">Mars</a></li>
                        <li><a href="#">Europa</a></li>
                        <li><a href="#">Titan</a></li>
                    </ul>
                </div>
                <div className={classes.cardDesc}>
                    <h1>Moon</h1>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>
                <hr />
                <div className={classes.cardFooter}>
                    <div>
                        <p>Avg. Distance</p>
                        <h2>384,400 KM</h2>
                    </div>
                    <div>
                        <p>Est. travel time</p>
                        <h2>3 days</h2>
                    </div>
                </div>
            </div>
        </div>
        

        </div>
    )
}

export default Destination