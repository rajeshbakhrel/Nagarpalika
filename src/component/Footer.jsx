
import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import image1 from "./images/logoo.png"

const Footer = () => {
  return (
      <>

      <div className="first-footer">

          
        <div className="first">
            <Link to="#"> <img src={image1}/> </Link>

            <p>Gaidakot Nagarpalika</p>
            </div> 

            <div className="second">
                <h3>Useful Links</h3>
               <Link className='footer-link' to="/" > <li>Home</li> </Link>
               <Link className='footer-link' to="/About" > <li>About</li> </Link>
               <Link className='footer-link' to="/Schools" > <li>School</li> </Link>
               <Link className='footer-link' to="/Notice" > <li>Notice</li> </Link>
               <Link className='footer-link' to="/Gallery" > <li>Gallery</li> </Link>

                </div> 

                

                

                

                <div className="third">
                <h3>Contact us</h3>
                <p>Gaidakot, Nawalpur, Nepal</p>
                <p>info@edu.np</p>
                <p>(+977) 056-594300 / 594301</p>
                    
                    </div>


                    <div className="fourth">
                    <p>copyright © 2022 - eduaid.np</p>
                        
                        </div> 

                     

        </div>  

        <div className="second-footer">
            <p>Powered by: LVF Technology</p>
        </div>
      
      </>
   
  )
}

export default Footer