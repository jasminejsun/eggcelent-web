import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Boiled from './components/pages/Boiled';
import Poached from './components/pages/Poached';
import Sunny from './components/pages/Sunny';
import Timer from './components/pages/Timer';

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
      <Route path='/timer' component={Timer} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
