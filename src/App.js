import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Activity from './Activity.js';
import Aboutme from './Aboutme/AboutMe';
import Skills from './Skills/Skills'
import Details from './Details/Details.js';
import Menu from './Menu/Menu.js';
import Footer from './Footer/Footer.js';
import './App.css';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path='/' component={Activity} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/aboutme' component={Aboutme} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/:sportId' component={Details} />
        </Switch>
        <Footer />
      </div >
    </Router>
  );
}

export default App;
