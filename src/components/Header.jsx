import React from 'react'
import '../styles/header.css'
import logo from '../images/logo.gif'


function Header() {
  return (
    <div>
        <div className="logo-container">
            <img src={logo} alt=""/>
        </div>
    </div>
  )
}

export default Header