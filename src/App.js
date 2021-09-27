import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Puns from './components/pages/Puns';
import Boiled from './components/pages/Boiled';
import Poached from './components/pages/Poached';
import Sunny from './components/pages/Sunny';
import TimerTwo from './components/pages/TimerTwo';
import TimerThree from './components/pages/TimerThree';
import TimerFour from './components/pages/TimerFour';
import TimerFive from './components/pages/TimerFive';
import TimerSix from './components/pages/TimerSix';
import TimerSeven from './components/pages/TimerSeven';
import TimerNine from './components/pages/TimerNine';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path={['/puns']} component={Puns} />
      <Route path='/boiled' component={Boiled} />
      <Route path='/poached' component={Poached} />
      <Route path='/sunny-side-up' component={Sunny} />
      <Route path={['/runny-sunny-side-up']} component={TimerTwo} />
      <Route path={['/jammy-poached']} component={TimerFour} />
      <Route path={['/soft-boiled', '/runny-poached', '/medium-sunny-side-up', '/scrambled']} component={TimerThree} />
      <Route path={['/jammy-boiled', '/medium-poached']} component={TimerFive} />
      <Route path={['/hard-poached']} component={TimerSix} />
      <Route path={['/medium-boiled']} component={TimerSeven} />
      <Route path={['/hard-boiled']} component={TimerNine} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
