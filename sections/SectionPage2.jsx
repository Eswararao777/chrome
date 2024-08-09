import React, { useEffect } from 'react'
import { LuDownload } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";

import '../sections/sectionPage2.css'

import chrome from '../../imgs/chrome.webm'

import Aos from 'aos';
import "aos/dist/aos.css"

const SectionPage2 = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <>
    <div className='divBox'>
       <nav className='navList' data-aos="fade-down">
         <a href="#fast"><h3>Fast</h3></a>
         <a href="#"><h3>Safe</h3> </a>
         <a href="#"><h3>Yours</h3></a>
         <a href="https://www.google.co.in/chrome/"><h3>By Google</h3></a>
        <div className='navBut'><button> <LuDownload />  Download</button></div>
       </nav>
    </div>

    <div className='textBox' id='fast'>
        <h1 data-aos="fade-up"> The <span className='animationCon'><MdSpeed size={40}/> <strong>fast</strong></span> way to do <br /> <b>things online</b> </h1>
    </div>

    <div className='videoBox '><video src={chrome} autoPlay controls loop></video></div>
    </>
  )
}

export default SectionPage2
