import React from 'react'
import background from '../styles/background.module.css'
import classes from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Card from '../components/shared/Card'

const Home = () => {
    return (
        <div className={background.home}>
            <NavBar />

            <div className={classes.container}>
                <Card className={classes.homeCard}>
                    <h2>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1>SPACE</h1>
                    <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </Card>
                <div className={classes.homeExplore}>
                    <p>EXPLORE</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home