import React from "react";
import"./Schools.css"
import { Link } from "react-router-dom";
import img1 from "./images/student3.jpg"




const Card = (props) => {
  return (

    <>
     <div className="card">
          <div className="imgbx">
              <img src={props.image} alt="sorry"/>
          </div>
          <div className="content">
              <h2>{props.name}</h2>
              <p>{props.address}</p>

              
          </div>

          <div className="btn">
             <Link to={props.link}> <button>See more</button></Link>
          </div>

      </div>
    
    </>
   
  )
}

export default Card