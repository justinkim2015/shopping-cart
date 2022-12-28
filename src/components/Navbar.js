import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
    </div>
  )
}

export default Navbar