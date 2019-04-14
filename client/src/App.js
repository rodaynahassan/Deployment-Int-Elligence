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
//import Header from './components/layout/header'
import LandingBody from './components/pages/landingBody'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Profile from './components/pages/profilePage'
import About from './components/pages/aboutContactUsPage'
import ApprovedCompanies from './components/pages/ApprovedCompanies'
import InProgressCases from './components/pages/InProgressCases'
import Footer from './components/layout/footer'
import SPCForm from './components/pages/SPCform'
import FForm from './components/pages/form'
import SSCForm from './components/pages/SSCForm'
import FlippingCard from './components/form/FlippingCard'
import Companies from './components/pages/Companies'
import Side from './components/layout/Side'





class App extends Component {
  constructor(){
    super()
    localStorage.setItem('lang',localStorage.getItem('lang')||'en')
  }
  state={lang:localStorage.getItem('lang')} 
  changelang = (lang) =>
    {
      localStorage.setItem('lang',lang)
      this.setState({lang:lang})
      console.log(lang)
    }
  render() {
    return (
     
      <Router>
    
      
     <Side changelang={this.changelang}  />
      <div>
     

        <Route exact path="/" render={props=>(
           <LandingBody lang={this.state.lang}/>
        )}/>
      <Route path='/login' render={(props) => <Login {...props}   lang={this.state.lang}/>}/>
      <Route path='/register' render={(props) => <Register {...props}  lang={this.state.lang}/>}/>
      <Route path='/profile' render={(props) => <Profile {...props}  lang={this.state.lang}/>}/>
      <Route path='/about' render={(props) => <About {...props}  lang={this.state.lang}/>}/>
      <Route path='/approvedCompanies' render={(props) => <ApprovedCompanies {...props}  lang={this.state.lang}/>}/>
      <Route path='/inProgressCases' render={(props) => <InProgressCases {...props}  lang={this.state.lang}/>}/>
      <Route path='/SPC' render={(props) => <SPCForm {...props}  lang={this.state.lang}/>}/>
      <Route path='/form' render={(props) => <FForm {...props}  lang={this.state.lang}/>}/>
      <Route path='/SSC' render={(props) => <SSCForm {...props}  lang={this.state.lang}/>}/>
      <Route path='/journal' render={(props) => <Companies {...props}  lang={this.state.lang}/>}/>
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
