import React from "react";
import Img from './Img'
import image1 from "../assets/img2.png";


const images = [
    {
      id: 1,
     
      image: image1,
      // url: "https://faztweb.com",
    },
]
function Image(){
    return(
        <div className="row">
        {images.map(({  image,  id }) => (
          <div className="col-md-4" key={id}>
            <Img imageSource={image}  />
          </div>
        ))}
      </div>
    )
}
export default Image;