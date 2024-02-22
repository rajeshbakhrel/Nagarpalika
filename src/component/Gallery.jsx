
import React, { useState } from 'react'
// import React,  { Component }  from 'react';
import "./Gallerycomponent"
import Gallerycontent from './Gallerycomponent';
import "./Gallery.css";
import {GrClose} from "react-icons/gr"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


const Gallery = () => {

const [items, setItems] = useState(Gallerycontent);

const[model, setModel] = useState(false);
const[tempimage, setTempImage] = useState('');

const getImg =(image)=>{
    setTempImage(image);
    setModel(true);
}

  return (
      <>

      <div className={model? "model open" : "model"}>
          <img src ={tempimage}/>
          <GrClose className="svg" onClick={()=> setModel(false)}/>


      </div>

      <div className="main-container">
            <div className="headerr">
                <h1>Gallery</h1>
            </div>
            

          <div className="container-image">
            {
                items.map((elem)=>{
                    const {id, image} = elem;

                    return(
                            <div className="photos" onClick={() => getImg(image)}>
                                <img src={image} alt-="" style={{width:'100%'} }/>
                            </div>

                    )
                })
            }

        </div>

      </div>

      </>
   
  );
};

export default Gallery;