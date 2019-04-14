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
import Profile from './components/pages/profilePage'
import About from './components/pages/aboutContactUsPage'
import ApprovedCompanies from './components/pages/ApprovedCompanies'
import InProgressCases from './components/pages/InProgressCases'
import Footer from './components/layout/footer'
import SPCForm from './components/pages/SPCform'
import form from './components/pages/form'
import SSCForm from './components/pages/SSCForm'
import SortSpecificUserCase from './components/form/SortByDate'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/NavBar';
import adminPage from './components/pages/adminPage'






import { Provider } from 'react-redux';       //new stuff
import store from './store';                //new stuff




import Register1 from './components/Register';
import Login1 from './components/Login2';
import Home from './components/Home';



class App extends Component {
  render() {
    return (
      <Provider store = { store }>
      <Router>
     <Navbar1 />
      <div>
      
        <Route exact path="/" render={props=>(
           <LandingBody/>
        )}/>
      {/* <Route path='/home' component={LandingBody}/> */}
      <Route path='/profile' component={Profile}/>
      <Route path='/about' component={About}/>
      <Route path='/approvedCompanies' component={ApprovedCompanies}/>
      <Route path='/inProgressCases' component={InProgressCases}/>
      <Route path='/SPC' component={SPCForm}/>
      <Route path='/form' component={form}/>
      <Route path='/SSC' component={SSCForm}/>
      <Route path='/SortByDate' component={ SortSpecificUserCase}/>
      <Route path='/Home' component={Home}/>
      <Route path='/Register1' component={ Register1}/>
      <Route path='/Login1' component={ Login1}/>
      <Route path='/AdminPage' component={ adminPage}/>

      </div>
          <Footer/>
      </Router>
      </Provider>
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
