import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext()
  
  //to display the submenus right below the respective menu items
  const displaySubmenu = (e)=>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left+tempBtn.right) /2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page,{center,bottom})
  }

  const handleSubmit =(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }
  }
  
  return (
    <nav className='nav' onMouseOver={handleSubmit}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo'></img>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>products</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>developers</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>company</button>
          </li>
        </ul>
        <button onMouseOver={displaySubmenu} className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
