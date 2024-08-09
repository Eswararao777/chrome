import React, { useState } from 'react'
import '../sections/sectionPage1.css'

import chromeLogo from '../../imgs/chromeLogo.png'
import { MdSpeed } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { IoIosPause } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";

const SectionPage1 = () => {
   let [icon,setIcon] = useState(<IoIosPause/>)
   let [iconText,setIconText] = useState('Pause animation')

    let iconChange =()=>{
        if(iconText==='Pause animation'){
           setIcon(<IoIosPlay/>)
           setIconText('Play animation')  
        }
        else{
            setIcon(<IoIosPause/>)
            setIconText('Pause animation')
        }

    }
   
    let out =()=>{
      document.getElementById("featureList").style.display="none";
    }
    
    let SupportOut=()=>{
      document.getElementById('supportList').style.display="none";
    }
  return (
    <>
       <div className='animationBut' onMouseOver={out}><button onClick={iconChange}  className='butanim'> {icon} {iconText}</button></div>
       <div className='logoContainer' onMouseOver={SupportOut}><img src={chromeLogo} alt="Chrome Logo" /></div>
       <div className='text1' >
             <h1>The browser <br /> built to be <span className='animationCon'><MdSpeed size={40}/> <strong>fast</strong></span></h1> 
            
        </div>

        <div className='downloadBut'><button> <LuDownload />  Download Chrome</button></div>
        <div className='textbut'><h5>For Windows 11/10 64-bit.</h5></div>

        <div className='checkBoxContainer'> <input type="checkbox"/> <h4>Help make Google Chrome better by automatically sending usage statistics and crash <br /> reports to Google. <span>Learn more</span></h4> </div>

        <div className='lastText'><h4>By downloading Chrome, you agree to the <span>Google Terms of Service</span> and <br /> <span className='span'>Chrome and ChromeOS Additional Terms of Service</span></h4></div>
    </>
  )
}

export default SectionPage1
