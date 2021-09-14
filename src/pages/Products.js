import React from "react";
import Cards from '../components/Cards'
import Pro from "./Pro";
import Card from '../components/Card';
import {FooterContainer } from '../containers/footer'



function Products() {
  return (
    <>
      <h1 className="products"></h1>
      
      <Cards />
      <div className="abouts">
        <h1>About Taxants</h1>
        <p>Taxants Inc. is a platform that helps in connecting students to accountants.<br></br>
It's an easy to use web app that allows students to submit documents to accountants for tax filing and other related services.<br></br>
Our simple, fast and secure platform is catered to students who want to get their taxes filed from home without the hassle of taking buses in snowy weather,<br></br> booking appointments and waiting in lines at accountant offices.</p>
<p>We started in 2018 and are now present in 6 colleges with an active database of over 1500 plus students. Our goal for 2019 is to help as many as 5000 students <br></br> across Ontario.
</p>

{/* 
<div className="taxa">
  <img src="assets/account.jpg"  />
  <span><img src="/assets/study.jpg"/></span>
  <span><img src="/assets/student.jpg"/></span>
  <span><img src="/assets/count.jpg"/></span>



</div>
<div className="taxan">
  <img src="/assets/abc.png" />
<span><img src="/assets /cv.jpg"/></span>
  <span><img src="/assets/mn.jpg"/></span>
  <span><img src="/assets/nm.jpg"/></span>



</div> */}
<Pro className ="produced" />
      </div>
    
      <FooterContainer />
    </>
    
  );
}

export default Products;
