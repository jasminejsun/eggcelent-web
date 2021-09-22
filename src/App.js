import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Boiled from './components/pages/Boiled';
import Poached from './components/pages/Poached';
import Sunny from './components/pages/Sunny';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/boiled' component={Boiled} />
      <Route path='/poached' component={Poached} />
      <Route path='/sunny-side-up' component={Sunny} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
