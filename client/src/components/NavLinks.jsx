import React, { useState } from 'react'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {

    let activeStyle = {
        borderBottom: '6px solid white'
    }

    

    return (
        <div>
            <ul className={styles.NavLinks}>
                <li>
                    <NavLink to={'/'} style={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }><span>00</span> Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/destination'} style={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }><span>01</span> Destination</NavLink>
                </li>
                <li>
                    <NavLink to={'/crew'} style={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }><span>02</span> Crew</NavLink>
                </li>
                <li>
                    <NavLink to={'/technology'} style={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }><span>03</span> Technology</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks