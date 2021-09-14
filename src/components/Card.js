import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, name,university, text, url }) {
  return (
    <>
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-title">{name}</h5>
        <h4 className="card-title">{university}</h4>
        <p className="card-text text-secondary">{text}</p>
        {/* <p className="card-text text-secondary">
          {text
            ? text
            : "CPA by profession but Entrepreneur at heart. After working in the Manufacturing, Financial Services and IT firms, I am motivated to start something of my own, Taxants Inc. Taxants Inc. is a platform that helps students in getting their taxes filed in a simple, fast and secure manner.."}
        </p> */}
       
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0 "
          rel="noreferrer"
        >
          Go to {title}
        </a>
      </div>
     
    </div>
  </>
   
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
