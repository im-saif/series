import React from 'react'
import {Link} from "react-router-dom"
import "./css/navbar.css"


const Navbar = () => {


    return (
        <header className="header">
            <div className="logo">
                <a href="/">MovieNight</a>
            </div>
            <nav>
                <ul>
                    <li className="list-item"><Link to="/">All Series</Link></li>
                    <li className="list-item"><Link to="/">...</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
