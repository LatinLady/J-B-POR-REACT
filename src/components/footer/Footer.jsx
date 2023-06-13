// import React from 'react';
// import './footer.css'
// import {AiOutlineInstagram} from 'react-icons/ai'
// import {TfiTwitter} from 'react-icons/tfi'
// import {FiGithub, FiLinkedin} from 'react-icons/fi'



// function Footer() {
//   return (
//     <footer id='footer'>
     

//       <ul className="permaLinks">
//        <li><a href="#">Home</a></li>
//        <li><a href="#about">About</a></li>
//        <li><a href="#services">Services</a></li>
//        <li><a href="#portfolio">Portfolio</a></li>
//        <li><a href="#contact">Contact</a></li>
//       </ul>
  
//       <div className="footer__socials">
//         <a href="#" target="www.instagram.com"><AiOutlineInstagram/></a>
//         <a href="#" id='twitter__logo' target="www.twitter.com"><TfiTwitter/></a>
//         <span className="mobile__socials">
//         <a href="https://github.com/LatinLady" target="www.github.com"><FiGithub/></a>
//         <a href="#" target="www.linkedin.com"><FiLinkedin/></a>
//         </span>
//       </div>

//       <div className="footer__copyright">
//         <small>&copy; Jemmy Blyden</small>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react';
import './footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <footer id='footer'>
      <ul className="permaLinks">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
  
      <div className="footer__socials">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
        <a href="https://www.twitter.com" id='twitter__logo' target="_blank" rel="noreferrer"><FiTwitter/></a>
        <span className="mobile__socials">
          <a href="https://github.com/LatinLady" target="_blank" rel="noreferrer"><FiGithub/></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin/></a>
        </span>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jemmy Blyden</small>
      </div>
    </footer>
  )
}

export default Footer;
