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
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (

    <>
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
    </>
  );
}

export default App;
