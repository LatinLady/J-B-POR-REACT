import React from 'react';
import './footer.css'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {TfiTwitter} from 'react-icons/tfi'
import {FiGithub, FiLinkedin} from 'react-icons/fi'
import Signature from '../../assets/Signature-White.png'


function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo"><img src={Signature} alt='image of Jemmy'/></a>

      <ul className="permaLinks">
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>
  
      <div className="footer__socials">
        <a href="#" target="_blank"><AiOutlineInstagram/></a>
        <a href="#" id='twitter__logo' target="_blank"><TfiTwitter/></a>
        <span className="mobile__socials">
        <a href="https://github.com/LatinLady" target="_blank"><FiGithub/></a>
        <a href="#" target="_blank"><FiLinkedin/></a>
        </span>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jemmy Blyden</small>
      </div>
    </footer>
  )
}

export default Footer