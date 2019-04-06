import React, { Component } from 'react';
import './App.css';
import ApprovedCompanies from './components/user/ApprovedCompanies'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
class App extends Component {
  render() {
      return (
        <div className="Approved Companies">
        <h2 align="center"><Badge variant="dark">Your Approved Companies</Badge></h2>
        < ApprovedCompanies/>
        </div>
      );
    }
  }

export default App;