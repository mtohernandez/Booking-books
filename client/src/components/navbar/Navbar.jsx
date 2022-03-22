import React from 'react';
import {RiMenu3Line, RiCloseLin, RiScales2Fill} from 'react-icons/ri'
import logo from '../assets/logo.png'
import './navbar.css';

const Navbar = () => {

  return (
    <div className='booked__navbar'>
      <div className='booked__navbar-links'>
        <div className='booked__navbar-links_logo scale-up-center'>
          <div className='zoom-text'><img src={logo} alt="logo" width={50} height={50}/></div>
        </div>
        <div className='booked__navbar-links_container scale-up-center'>
          <div className='zoom-text'><p><a href='/'>Home</a></p></div>
          <div className='zoom-text'><p><a href='books'>Books</a></p></div>
          <div className='zoom-text'><p><a href='about'>About</a></p></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar