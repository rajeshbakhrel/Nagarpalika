
import React from 'react'
import "./Home.css"
import imag1 from "./images/two.jpg"

const Common = (props) => {
  return (
   <>``
   <div className="full-container">
   <div className="first-container">

       <div className="photo">
           <img src={props.image} alt='sorry'/>
       </div>
  
    <div className="paragraph">


                        {props.paragraph}
  
                    {/* involve the status, dignity, and honour of students; 
                    violate the status, dignity, and honour of students;
                   violate the status, dignity, and honour of students belonging to the Scheduled Castes and Tribes;
                    entail verbal abuse and aggression, indecent gestures and obscene behavior

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis 
                    consequuntur magni eum rerum eos earum nostrum nesciunt dolorem aliquid. Illo quod 
                    dolorem mollitia reiciendis dignissimos nisi consequatur fugiat exercitationem. */}

                    </div>

   </div>



   

   

   <div className="second-container">
            <div className="notice-container">
                <div className="notice-heading">
                    <h1> Recont notice</h1>
                    <p>_____________________________________</p>
                   
                </div>

                <div className="notice-list">
                    
                     <li> involve the status, dignity, and honour of students; </li>
                    <li>violate the status, dignity, and honour of students;</li>
                    <li>violate the status, dignity, and honour of Tribes;</li>
                    <li>entail verbal abuse and aggression, indecent  behavior.</li>
                    <li> involve the status, dignity, and honour of students; </li>
                    <li>violate the status, dignity, and honour of students;</li>
                    <li>violate the status, dignity, and honour of Tribes;</li>
                    <li>entail verbal abuse and aggression, indecent  behavior.</li>
                    
                    
                </div>
            </div>
   </div>
   </div>
   </>
  )
}

export default Common