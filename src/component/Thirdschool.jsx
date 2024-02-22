import React from 'react'
import "./Home.css"
import Common from './Common'
import imag1 from "./images/two.jpg"
import image1 from "./images/logoo.png"
import Headerschool from './Headerschool'

const Thirdschool = (props) => {
  return (
   <>

<div className="header-sschool">
   <Headerschool name="Namuna School" image={image1} /></div>
        <Common
        
        paragraph=" hello involve the status, dignity, and honour of students; 
                    violate the status, dignity, and honour of students;
                   violate the status, dignity, and honour of students belonging to the Scheduled Castes and Tribes;
                    entail verbal abuse and aggression, indecent gestures and obscene behavior

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis 
                    consequuntur magni eum rerum eos earum nostrum nesciunt dolorem aliquid. Illo quod 
                    dolorem mollitia reiciendis dignissimos nisi consequatur fugiat exercitationem."
                    
                    image={imag1}
                    
                    />
   </>
  )
}

export default Thirdschool