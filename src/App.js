import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import Header from "./Components/organisms/Header/Header.js";
import Footer from "./Components/organisms/Footer/Footer.js";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import LoginSignUp from './Components/LoginSignUp/LoginSignUp.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route component={About} path="/about" />
        <Route component={LoginSignUp} exact path="/" />
        {/* <Route component={SignUp} path="/sign-up" />
        <Route component={Login} exact path="/sign-in" /> */}
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
