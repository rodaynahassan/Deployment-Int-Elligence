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
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/pages/profilePage'
import About from './components/pages/aboutContactUsPage'
import ApprovedCompanies from './components/user/ApprovedCompanies'
import InProgressCases from './components/user/InProgressCases'
import Footer from './components/layout/footer'
class App extends Component {
  render() {
    return (
      <Router>
     
      <div>
      
        <Route exact path="/" render={props=>(
           <LandingBody/>
        )}/>
      {/* <Route path='/home' component={LandingBody}/> */}
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/about' component={About}/>
      <Route path='/approvedCompanies' component={ApprovedCompanies}/>
      <Route path='/inProgressCases' component={InProgressCases}/>
      </div>
          <Footer/>
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
