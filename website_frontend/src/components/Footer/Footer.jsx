import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='image1' src={assets.footerlogo} alt="" />
                <p className='text1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint molestias esse exercitationem repudiandae fugiat doloremque labore perspiciatis, tempora, dolorem unde neque ipsum delectus optio ipsa minus at deleniti quos nisi.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook} alt="" />
                    <img src={assets.instagram} alt="" />
                    <img src={assets.twitter} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    <li>Return policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>Get in touch with us</h2>
                <ul>
                    <li>+33-214-548-248</li>
                    <li>contact@pulsepro.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            PulsePro 2024 | made by HIBA CHENNI | &copy; All Rights Reserved
        </p>
    </div>
  )
}

export default Footer