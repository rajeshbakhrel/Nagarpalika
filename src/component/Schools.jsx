
import React from 'react'
import img1 from "./images/student3.jpg"
import img2 from "./images/student2.jpg"
import img3 from "./images/student4.jpg"
import "./Schools.css"
import Card from './Card'
import { Link } from 'react-router-dom'


const Schools = (props) => {
  return (
  <>
 <div className="header">
          <h1>Cources</h1>
      </div>

  <div className="full-container">
      {/* <div className="header">
          <h1>Schools</h1>
      </div> */}

      <div className="container">
         
            <Card image={img1} name="MBBS" address="Gaidakot-7, Nawalpur"  link="/Firstschool" />  

            <Card image={img2} name="CSIT" address="Gaidakot-2, Nawalpur"  link="/Secondschool" />  

            <Card image={img3} name="AGRICULTURE" address="Gaidakot-5, Nawalpur"  link="/Thirdschool" />  

            <Card image={img1} name="BCA" address="Gaidakot-8, Nawalpur"  link="/Fourthschool" />  

            <Card image={img1} name="BIM" address="Gaidakot-7, Nawalpur"  link="/Fifthschool" />  

            <Card image={img1} name="BHM" address="Gaidakot-9, Nawalpur"  link="/Sixthschool" />  

            <Card image={img1} name="VETNARY" address="Gaidakot-7, Nawalpur"  link="/Seventhschool" />  

            <Card image={img1} name="BBS" address="Gaidakot-10, Nawalpur"  link="/Eightschool" />  




      </div>

    
  </div>
  </>
  )
}

export default Schools