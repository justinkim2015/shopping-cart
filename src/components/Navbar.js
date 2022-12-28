import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
      <h1 id='nav-title'>Stuff for Sale!</h1>
      <Link to='/' class="nav-link">Home</Link>
      <Link to='/shop' class="nav-link">Shop</Link>
    </div>
  )
}

export default Navbar