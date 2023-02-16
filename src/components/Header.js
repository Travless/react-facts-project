import React from "react";
import logo from './logo.png'
import './Header.css'


function Header(){
    return(
        <div>
            <header>
                <nav className="nav">
                    <div className="logo-cont">
                        <img src={logo} className='logo'/>
                        <h2 className="nav-main-title">ReactFacts</h2>
                    </div>
                    <ul className="nav-items">
                        <p className="nav-second-title">React Course - Project 1</p>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header