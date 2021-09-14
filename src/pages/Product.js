import React from "react";
// import PropTypes from "prop-types";
import './product.css';


function Product ({imageSource}){

return(
    <div className="overflow">
    <img src={imageSource}  className="produced" />
  </div>
)
}

// product.propTypes = {
//     // title: PropTypes.string.isRequired,
//     // text: PropTypes.string,
//     // url: PropTypes.string,
//     imageSource: PropTypes.string
//   };
  export default Product;