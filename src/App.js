import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp.js';
import Home from './Components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={LoginSignUp} exact path="/" />
        <Route component={Home} path="/home" />
        {/* <Route component={Login} exact path="/sign-in" /> */}
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
