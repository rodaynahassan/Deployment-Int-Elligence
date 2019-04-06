import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import InProgressCasesComponents from './InProgressCasesComponents';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
class InProgressCases extends Component {
    state = {
      inProgressCases:[]
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/users/getInProgressCases/5ca8b5f050bb3e4ce80c54ea')
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({inProgressCases: res.data.data})
      }})}
      tabRow(){
        return this.state.inProgressCases.map(function(inProgressCase, i){
            return <InProgressCasesComponents inProgressCase={inProgressCase} key={i} />;
        });
      }
      render(){
        return (
          <div>
          <h2 align="center"><Badge variant="dark">Your In progress Cases</Badge></h2>
          <Navbar bg='dark'> 
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Name In English</th>
                <th>Type</th>
                <th>Governorate</th>
                <th>City</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>Fax</th>
                <th>Currency</th>
                <th>Capital</th>
                <th>Type</th>
                <th>Creation Date</th>
                <th>Lawyer Comments</th>
                <th>Reviewer Comments</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </Table>
          </Navbar>
          </div>
          )
      }
    }
    export default InProgressCases