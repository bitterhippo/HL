import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Subcomponents
import NavBar from '../Components/NavBar/NavBar';
import Home from './Home';
import FindCharacters from './FindCharacters';
import NewCharacters from './NewCharacters';

const Landing = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/findCharacters" component={FindCharacters} />
          <Route exact path="/newCharacters" component={NewCharacters} />
        </Switch>
      </Router>
    </>
  )
};

export default Landing;