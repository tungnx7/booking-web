import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar' >
        <div className="navbar-container">
            <span className="navbar-logo">Booking</span>
            <div className="navbar-right">
                <button className="navbar-button">Register</button>
                <button className="navbar-button">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar