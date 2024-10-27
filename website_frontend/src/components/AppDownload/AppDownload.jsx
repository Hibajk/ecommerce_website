import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> PulsePro App</p>
        <div className="app-download-platforms">
            <img src={assets.appstore} alt="" />
            <img src={assets.playstore} alt="" />
        </div>
    </div>
  )
}

export default AppDownload