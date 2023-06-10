import React from 'react';
import {useState} from 'react';
import './nav.css';
import {BiHomeAlt, BiUser, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {Link} from 'react-scroll';

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <Link to="header" spy={true} smooth={true} duration={500} activeClass='active' ><BiHomeAlt/></Link>
      <Link to="about"  spy={true} smooth={true} duration={500} activeClass='active'><BiUser/></Link>
      <Link to="services"  spy={true}   smooth={true} duration={500} activeClass='active '><RiServiceLine/></Link>
      <Link to="contact"  spy={true}   smooth={true} duration={500} activeClass='active'><BiMessageSquareDetail/></Link>
    </nav>
  )
}

export default Nav
