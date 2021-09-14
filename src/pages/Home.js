import React from "react";
import { FaStopCircle, FaRegUser, FaLock } from 'react-icons/fa';
import { FooterContainer } from '../containers/footer';
import Pro from './Pro';
import Image from "./Image";


function Home() {
  return (
    <>
    <div className="home">
      <div className="text">
      <h4>CONNECTING TAXPAYERS TO ACCOUNTANTS</h4>
      <p>Let us File your Tax...</p>
      <button>Get Started</button>
      </div>
      <div className="kash">
       <Image />

      </div>
       
    </div>
    <div className="tax">
      <h1>WHY TAXANTS?</h1>
      <div className="fast">
        <FaStopCircle  className="icon"/>
        <p className="para">Fast</p>
        <p  className="min">5-10 minutes process <br></br>for tax filing.</p>
      </div>
      <div className="simple">
        <FaRegUser  className="icon1"/>
        <p className="param">Simple</p>
        <p  className="minute">Take pictures & submit<br></br> to accountants.</p>
      </div>
      <div className="lock">
        <FaLock  className="icon2"/>
        <p className="parama">Secure</p>
        <p  className="minutes">Safely transmitted to accountants<br></br> for tax filing.</p>
      </div>
    </div>
    <div className="cases">
      <div  className="abc">
    <h1>Student Cases</h1>
    <p>Out of these three which student you want to be?</p>
    </div>
    {/* <div className="images1"> */}
    <div className="pro">
    <Pro  />
    </div>
  {/* <img src="/assets/count.jpg" alt=""  /> 

    
  
  <span><img src="/assets/account.jpg" alt="" /></span>

 
   
 <span><img src="/assets/study.jpg" alt=""  /></span> */}

    {/* </div>  */}
    
  
    </div>
   
   <FooterContainer />
    </>
  );
}

export default Home;
