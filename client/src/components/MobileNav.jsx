import React, { useState } from 'react'
import styles from '../styles/NavBar.module.css'
import NavLinks from './NavLinks'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const MobileNav = () => {

    const [ open, setOpen ] = useState(false)
    const hamburgerIcon = <FiMenu className={styles.HamBurger} 
                                size='40px' color='white'
                                onClick={() => setOpen(!open)}
                            />
    const closeIcon = <MdClose className={styles.HamBurger} 
                                size='40px' color='white'
                                onClick={() => setOpen(!open)}
                            />

    return (

        <div>
            <nav className={styles.mobileNav}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            
                {open ? closeIcon : hamburgerIcon}
                {open && <NavLinks />}
            
            
            
        </nav>
        </div>
    )
}

export default MobileNav