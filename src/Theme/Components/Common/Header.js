import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../Assets/images/PES-3-.png'

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header>
      <div className='main-header'>
        <div className='container-fluid'>
          <div className='float-start'>
            <div className='main-logo'>
              <Link to="/">
                <img src={logo} alt="pinnacc" />
              </Link>
            </div>
          </div>
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className='header-menu float-end menuPosition'>

            <nav className='col nav_col_main'>
              <Link to={'/'}>
                <button className={`col header_icon_sub_div  ${path === '/' ? 'active' : ''}`}  >
                  <span className="header_icon_name">Home</span>
                </button>
              </Link>
              <Link to={'/about'}>
                <button className={`col header_icon_sub_div ${path === "/about" ? 'active' : ''}`} >
                  <span className="header_icon_name">About Us</span>
                </button>
              </Link>
              <Link to={'/service'}>
                <button className={` col header_icon_sub_div ${path === "/service" ? 'active' : ''}`} >
                  <span className="header_icon_name">Services</span>
                </button>
              </Link>
              <Link to={'/work'}>
                <button className={` col header_icon_sub_div ${path === "/work" ? 'active' : ''}`} >
                  <span className="header_icon_name">Work</span>
                </button>
              </Link>
              <Link to={'/lifeAtPSE'}>
                <button className={` col header_icon_sub_div ${path === "/lifeAtPSE" ? 'active' : ''}`} >
                  <span className="header_icon_name">Life At PES</span>
                </button>
              </Link>
              <Link to={'/contact'}>
                <button className={`col header_icon_sub_div ${path === '/contact' ? 'active' : ''}`} >
                  <span className="header_icon_name">Contact Us</span>
                </button>
              </Link>
            </nav>



            {/* <nav className='col nav_col_main'>
              <button className={`col header_icon_sub_div  ${path === '/' ? 'active' : ''}`} onClick={() => handleNavclick(1)} >
                <span className="header_icon_name">Home</span>
              </button>
              <button className={`col header_icon_sub_div ${path === "/about" ? 'active' : ''}`} onClick={() => handleNavclick(2)}>
                <span className="header_icon_name">About Us</span>
              </button>
              <button className={` col header_icon_sub_div ${path === "/service" ? 'active' : ''}`} onClick={() => handleNavclick(3)}>
                <span className="header_icon_name">Services</span>
              </button>
              <button className={` col header_icon_sub_div ${path === "/work" ? 'active' : ''}`} onClick={() => handleNavclick(4)}>
                <span className="header_icon_name">Work</span>
              </button>
              <button className={` col header_icon_sub_div ${path === "/lifeAtPSE" ? 'active' : ''}`} onClick={() => handleNavclick(5)}>
                <span className="header_icon_name">Life At PES</span>
              </button>
              <button className={`col header_icon_sub_div ${path === '/contact' ? 'active' : ''}`} onClick={() => handleNavclick(6)}>
                <span className="header_icon_name">Contact Us</span>
              </button>
            </nav> */}
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </header>
  )
}

export default Header