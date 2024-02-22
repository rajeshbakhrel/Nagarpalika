
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {VscThreeBars} from "react-icons/vsc"
import {ImCross} from 'react-icons/im'

import Schools from './Schools';
import "./Header.css";

const Headerschool = (props) => {

  const [isMobile,setIsMobile]=useState(false);

    
  return (
      <>
      <div className="main-head-component">
          <div className="logo-part"> 
          
          <Link to="/" >  <img src={props.image}/> </Link> 
         
          <Link className='logo-nagarpalika' to="/" ><p>{props.name}</p> </Link>

          </div>

        
          

          <div className={isMobile ? "nav-content-mobile" : "nav-content"}
          onClick={()=> setIsMobile(false)}
          >


          <li >  <NavLink className="nav-link active" to="/">

              Home
              
              </NavLink> </li>

              <li><NavLink className="nav-link active" to="/About">
                    About

                   </NavLink></li>

                   <li> <NavLink className="nav-link active" to="/Schools">
               Cources
                 </NavLink></li>

                 <li> <NavLink className="nav-link active" to="/Notice">
                  Notice
                 </NavLink></li>

                 <li> <NavLink className="nav-link active" to="/Gallery">
                  Gallery
                 </NavLink></li>


              

          

                 <li> <NavLink  className="shigninn" to="#">
            <div className="sign">sign in</div>
             </NavLink></li>
            

             </div>

             <button className='bars'
             onClick={()=> setIsMobile(!isMobile)}
             >
               { isMobile ? (
                 <p><ImCross className='bar-icon'/></p>)
                :(<p><VscThreeBars className='bar-icon'/></p>)}
             </button>
                </div>
      
      </>
   
  )
}

export default Headerschool