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
import form from './components/pages/form'
import SSCForm from './components/pages/SSCForm'
import SortSpecificUserCase from './components/pages/SortSpecificUserCase'
import DropdownTrial from './components/form/DropdownNationalities'
import DropdownCities from './components/form/DropdownCities'
import DropdownGovernorates from './components/form/DropdownGovernorates'
import unassignedForm from './components/pages/unassignedForm'
import assignToReviewer from './components/pages/assignToReviewer'
//import SortSpecificUserCase from './components/pages/SortSpecificUserCase'
import GetCaseSpecified from './components/pages/GetCaseSpecified'
import GetCaseReviewer from './components/pages/GetCaseReviewer'
import AddCommentsLawyer from './components/pages/AddCommentsLawyer'

import EditProfile from './components/pages/EditProfile'
import EditSPCForm from './components/pages/EditSPCForm'
import ChangePassword from './components/pages/ChangePassword'

import GetFormByCompanyName from './components/form/GetFormByCompanyName'


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
      <Route path='/SPC' component={SPCForm}/>
      <Route path='/form' component={form}/>
      <Route path='/SSC' component={SSCForm}/>

      <Route path='/SortByID' component={ SortSpecificUserCase}/>
      <Route path='/dropDown' component={ DropdownTrial}/>
      <Route path='/dropDownCity' component={ DropdownCities}/>
      <Route path='/dropDownGovernorate' component={ DropdownGovernorates}/>
      

      <Route path='/unassignedForm' component={unassignedForm}/>
      <Route path='/lawyerAcceptedForms' component={assignToReviewer}/>

      {/* <Route path='/SortByID' component={ SortSpecificUserCase}/> */}
      <Route path='/Get' component={GetCaseSpecified}/>
      <Route path='/GetReviewer' component={GetCaseReviewer}/>
      <Route path='/Comments' component={AddCommentsLawyer}/>

      <Route path='/editprofile' component={EditProfile}/>
      <Route path='/editspcform' component={EditSPCForm}/>
       <Route path='/CompanyName' component={GetFormByCompanyName}/>

      </div>
          {/* <Footer/> */}
      </Router>
        )}
 
}

export default App;
