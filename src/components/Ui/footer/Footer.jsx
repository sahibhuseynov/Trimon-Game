import React from 'react'
import './Footer.scss'
import FooterLogo from '../../../assets/image/logo.svg'
import {BsFacebook, BsTwitch, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className='footer__logo'>
        <span>TRI</span>
        <img src={FooterLogo} alt="" />
        <span>MON</span>
      </div>

      <nav>
        <ul>
          <li>
            HOME
          </li>
          <li>
            ABOUT
          </li>
          <li>
            PLAYERS
          </li>
          <li>
            PORTFOLIO
          </li>
          <li>
            BLOG
          </li>
        </ul>
      </nav>

      <div className="footer__icons__group">
        <BsTwitch className='icon' />
        <BsTwitter className='icon' />
        <BsYoutube className='icon' />
        <BsFacebook className='icon' />
      </div>

      <div className="coperation">
        <p>© 2023 Qode Interactive, All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer