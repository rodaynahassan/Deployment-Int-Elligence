import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import InProgressCases from './components/user/InProgressCases';


class App extends Component {
   

  render() {
    return (
      <div className="In Progress And Approved Forms">
      <InProgressCases/>
      <ApprovedCompanies/>
      </div>
      
     
     
    );
  }
}


export default App;