import React from 'react'
import background from '../styles/background.module.css'
import NavBar from '../components/NavBar'
import TechnologyContent from '../components/TechnologyContent'

const Technology = () => {
    return (
        <div className={background.technology}>
        <NavBar />
        <TechnologyContent />
        </div>
    )
}

export default Technology