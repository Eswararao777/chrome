import React from 'react'
import "./navBar.css"
import chromeLogo from '../../imgs/chromeLogo.png'
import { FaChevronDown } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const NavBar = () => {
  
  let hover =()=>{
    document.getElementById('featureList').style.display="flex";
  }

  
  let SupportHover=()=>{
    document.getElementById('supportList').style.display="flex";
  }

  return (
    <>
        <nav className='navBar'>
            <div className='imgContainer'>
                <img className='logo' src={chromeLogo} alt="Chrome Logo" />
                <h2>chrome</h2>
            </div>
            <div className='itemsContainers'>
                 <ol >
                    <li className='itemList'>Home</li>
                    <li className='itemList'>The Browser by Google</li>
                    <li className='itemList' onMouseOver={hover} >Features </li> <h6><FaChevronDown/></h6>
                    <li className='itemList'  onMouseOver={SupportHover}>Support  </li> <h6><FaChevronDown/></h6>
                 </ol>
            </div>
        </nav>

        <ul className='featureList' id='featureList'>
          <li>Overview</li>
          <li>Google address bar</li>
          <li>Password check</li>
          <li>Use across devices</li>
          <li>Dark mode</li>
          <li>Tabs</li>
        </ul>

        <ul className='supportList' id='supportList'>
          <li>Helpful tips for chrome</li>
          <li>Support <GoArrowUpRight /></li>
        </ul>
        
    </>
  )
}

export default NavBar
