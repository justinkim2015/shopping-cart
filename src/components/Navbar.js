import React from 'react';
import MyLink from './MyLink'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
      <h1 id='nav-title'>Stuff!</h1>
      <MyLink location='/' text='Home'/>
      <MyLink location='/shop' text='Shop' />
    </div>
  )
}

export default Navbar