import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("Home")

  return (
    <div className='navbar'>
      <NavLink to='/'><img src={assets.logo} alt="" className='logo'/></NavLink>
      <ul className="navbar-menu">
      <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
          <a href='#explore-products' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
          <a href='#app-download' onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</a>
          <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
      <div className='navbar-search-icon'>
        <img src={assets.searchicon} alt="" />
      </div>
        <div className="navbar-search-icon">
        <NavLink to='/cart'><img src={assets.cardicon} alt="" /></NavLink>
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar