import React from "react";
// import Footer from "../components/Footer";
import HearderComponent from "../components/Header/HearderComponent";
import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import store from "../redux/store";

const Dash = () => {
 
 
    return (
      <>
        <BrowserRouter>

        <HearderComponent />;
      
        {/* <Footer /> */}
{/*      
      <Provider store ={store}>

      </Provider> */}
      </BrowserRouter>
      </>   
      
      
    );
}

export default Dash
