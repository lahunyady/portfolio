import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import CodingChallenges from './components/pages/CodingChallenges';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';


function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about-me' component={AboutMe}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/coding-challenges' component={CodingChallenges}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer/>  
    </Router>
    </>
  );
}

export default App;
