
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import image1 from "./images/logoo.png"
import Schools from './Schools';
import "./Header.css";
import {VscThreeBars} from "react-icons/vsc"
import {ImCross} from 'react-icons/im'

const Header = () => {

  const [isMobile,setIsMobile]=useState(false);

    
  return (
      <>
      <div className="main-head-component">

        


          <div className="logo-part"> 
          
          <Link to="/" >  <img src={image1}/> </Link> 
         
          <Link className='logo-nagarpalika' to="/" ><p>EDU NEPAL</p> </Link>

          </div>

          
            
          
          <div className={isMobile ? "nav-content-mobile" : "nav-content"}
          onClick={()=> setIsMobile(false)}
          >
            
             

          <li >  <NavLink className="nav-link" to="/">

              Home
              
              </NavLink> </li>

              <li><NavLink className="nav-link" to="/About">
                    About

                   </NavLink></li>

                   <li> <NavLink className="nav-link" to="/Schools">
               Cource
                 </NavLink></li>

                 <li> <NavLink className="nav-link" to="/Notice">
                  Notice
                 </NavLink></li>

                 <li> <NavLink className="nav-link" to="/Gallery">
                  Gallery
                 </NavLink></li>


              

    

          
          <li> <NavLink  className="shigninn" to="#">
            <div className="sign">sign in</div>
             </NavLink></li>
            

             </div>

             <button className='bars' onClick={()=> setIsMobile(!isMobile)} >
               { isMobile ?  (<p><ImCross className='bar-icon'/></p>)
                               :(<p><VscThreeBars className='bars-icon'/></p>)}
             </button>

                </div>
      
      </>
   
  )
}

export default Header