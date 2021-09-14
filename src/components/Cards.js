import React from "react";
import Card from "./Card";
import './Cards.css'

import image1 from "../assests/image1.jpg";
import image2 from '../assests/image2.jpg'
import image3 from '../assests/image3.jpg'


const cards = [
  {
    id: 1,
    title: "Lakshay Gandhi",
    name: "Co-Founder",
    university: "University of Toronto",
    text: "CPA by profession but Entrepreneur at heart. specally from heart",
    image: image1,
    // url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Lashika Katyal",
    name: "Co-Founder",
    university: "York University",
    text: "Business Development Manager at Save Max Real Estate Inc.",
    image: image2,
    // url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Marc Ma",
    name: "Co-Founder",
    university: "University of Toronto",
    text: "CPA by profession but Entrepreneur at heart. specally from heart.",
    image: image3,
    // url: "https://faztweb.com",
  },
 
];


function Cards() {
  return (
    <>
    <h1 className="hero">Our Executive Team</h1>
    <div className="container d-flex justify-content-center align-items-center h-100">
     
      <div className="row">
        {cards.map(({ title,name, university,text, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} name={name} university={university} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
    <h1 className="hero">Our Accounting Affiliates</h1>
    <div className="container d-flex justify-content-center align-items-center h-100">
     
      <div className="row">
        {cards.map(({ title,name, university,text, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} name={name} university={university} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Cards;
