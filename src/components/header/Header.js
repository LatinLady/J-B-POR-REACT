import React from 'react';
import './header.css';
import ME from '../../assets/me.png';
import Headersocial from './headersocial';

const Header = () => {
  return (
    <header>
       <div className='.container.header_container'>
         <h5> Hello I'm</h5>
         <h1>Jemmy Blyden</h1>
         <h5 className='text-light'>Fullstack Developer</h5>
         <Headersocial />
         
         <div className='me'>
         <img src={ME} alt='me' />
         </div>

         <a href='#contact' className='scroll_down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header