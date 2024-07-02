import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../Assets/images/finalLogo.webp'

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [isChecked , setIsChecked] = useState(false)

  const handleChange = () => {
    if(path){
      setIsChecked(!isChecked)
    }
  }
  useEffect(() =>{
      setIsChecked(false)
  },[path])

  function hadleSidebarClose () {
    setIsChecked(false)
  } 
  return (
    <header>
      <div className='main-header'>
        {
          isChecked && <div className='closeSideBar' onClick={hadleSidebarClose}></div>
        }
        <div className='container-fluid'>
          <div className='float-start'>
            <div className='main-logo'>
              <Link to="/">
                <img src={logo} alt="PNAQ Engineering Solutions LLP logo" />
              </Link>
            </div>
          </div>
          <input type="checkbox" onChange={handleChange} checked={isChecked} name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className='header-menu float-end menuPosition  '>
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
              <Link to={'/life-at-pnaq'}>
                <button className={` col header_icon_sub_div ${path === "/life-at-pnaq" ? 'active' : ''}`} >
                  <span className="header_icon_name">Life At PNAQ</span>
                </button>
              </Link>
              <Link to={'/why-us'}>
                <button className={` col header_icon_sub_div ${path === "/why-us" ? 'active' : ''}`} >
                  <span className="header_icon_name">Why Us</span>
                </button>
              </Link>
              <Link to={'/contact'}>
                <button className={`col header_icon_sub_div ${path === '/contact' ? 'active' : ''}`} >
                  <span className="header_icon_name">Contact Us</span>
                </button>
              </Link>
            </nav>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </header>
  )
}

export default Header