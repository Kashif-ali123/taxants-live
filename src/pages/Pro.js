import React from 'react'
import Product from './Product';
import abc from "../assets/cv.jpg";
import count from '../assets/count.jpg'
import image3 from '../assets/abc.jpg'
import image4 from '../assets/mn.jpg'
import image5 from '../assets/nm.jpg'
import image6 from '../assets/student.jpg'
import image7 from '../assets/study.jpg'
import image8 from '../assets/account.jpg'


const pros = [
    {
      id: 1,
    
      image: abc
      // url: "https://faztweb.com",
    },
    {
      id: 2,
    
    
      image: count,
      // url: "https://blog.faztweb.com",
    },
    {
      id: 3,
   
      image: image3,
      // url: "https://faztweb.com",
    },
    {
        id: 4,
     
        image: image4,
        // url: "https://faztweb.com",
      },
      {
        id: 5,
     
        image: image5,
        // url: "https://faztweb.com",
      },
      {
        id: 6,
     
        image: image6,
        // url: "https://faztweb.com",
      },
      {
        id: 7,
     
        image: image7,
        // url: "https://faztweb.com",
      },
      {
        id: 8,
     
        image: image8,
        // url: "https://faztweb.com",
      },
   
  ];
  
function pro() {
    return (
        <div className="row">
        {pros.map(({  image,  id }) => (
          <div className="col-md-3" key={id}>
            <Product  imageSource={image} />
          </div>
        ))}
   </div>
    )
}

export default pro
