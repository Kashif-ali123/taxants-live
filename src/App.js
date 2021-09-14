import React, {Component} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
// import HeaderComponent from "./components/Header/HeaderComponent";
// import FooterComponent from './components/FooterComponent';
import Contact from "./pages/Contact";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import More from "./pages/More";
import Signup from "./pages/Signup";
import Dash from "./pages/Dash";
import BlogPost from "./components/BodyComponent/BlogPost";
// import SignInOutContainer from './containers';
// import Signup from './components/signup'
import { GlobalStyles } from './global-styles';

import "bootstrap/dist/css/bootstrap.min.css";

import "animate.css/animate.min.css";


class App extends Component {
  render() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/more" component={More}></Route>
          <Route path="/dash" component={Dash}></Route>
          <Route path="/blog" component={BlogPost}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route>
        
          
          
        </Switch>
     
     
      
     
        
      
         
      
      </BrowserRouter>
      
     
      {/* <SignInOutContainer /> */}
    </>
  );
  }
}

export default App;
