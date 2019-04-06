import React, { Component } from 'react';
import './App.scss';
import Companies from './components/form/Companies'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

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
export default App;