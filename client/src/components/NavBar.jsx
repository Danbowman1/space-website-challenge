import React from 'react'
import styles from '../styles/NavBar.module.css'
import MobileNav from './MobileNav'
import Navigation from './Navigation'

const NavBar = () => {
    return (
        <div>
            <Navigation />
            <MobileNav />
        </div>
    )
}

export default NavBar