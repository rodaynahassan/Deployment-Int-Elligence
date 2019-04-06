import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import './App.scss'
import Header from './components/layout/header'
import LandingBody from './components/layout/landingBody'


import Test from './components/pages/test'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Header/> */}
      
        <Route exact path="/" render={props=>(
           <LandingBody/>
        )}/>
      <Route path='/home' component={LandingBody}/>
      <Route path='/test' component={Test}/>
      </div>
      </Router>
        )}
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
