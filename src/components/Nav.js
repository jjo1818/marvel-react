import { Link } from 'react-router-dom'
// import React from 'react'
// import './App.css';

export default function Navbar() {
    return (
        
        <div className="nav">
            <Link to="/" >
                <div>
                    Home
                </div>
            </Link>
            <div>
            <img className="logo" src="marvel logo.png" alt="logo"/>
        
            </div>
            <Link to="/about" >
                <div>
                    About
                </div>
            </Link>
            
        </div>
    )
}