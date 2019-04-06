import React, { Component } from 'react';
import './App.scss';
import Companies from './components/form/Companies'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';
import InProgressCases from './components/user/InProgressCases';

class App extends Component {
render() 
 {
    return (
      <div>
      <Button variant="nada" block disabled><h1>Electronic Journal</h1></Button>
      < Companies/>
      </div>
    );
  }
}


// class App extends Component {
   

//   render() {
//     return (
//       <div className="In Progress And Approved Forms">
//       <InProgressCases/>
//       <ApprovedCompanies/>
//       </div>
      
     
     
//     );
//   }
// }


export default App;