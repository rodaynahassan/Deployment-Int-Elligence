import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import ApprovedCompaniesFields from '../user/ApprovedCompaniesFields';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import {Badge} from 'react-bootstrap'

class ApprovedCompanies extends Component {
    state = {
      approvedCompanies:[]
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/users/getApprovedCompanies/5ca6300113e5d0343c6e2a01')
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({approvedCompanies: res.data.data,sscManagers:[]})
           
         }
      })
    }
      tabRow(){
       return (
        this.state.approvedCompanies.map(function(approvedCompany,i){
        return <ApprovedCompaniesFields approvedCompany={approvedCompany} key={i}/>})
        )
      }
      render(){
        return (
          <div>
          <h2 align="center"><Badge variant="dark">Your Approved Companies</Badge></h2>
          <Navbar bg='dark'>
          <Table striped bordered hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>Company's Name</th>
                <th>Company's Name In English</th>
                <th>Company's Governorate</th>
                <th>Company's City</th>
                <th>Company's Address</th>
                <th>Company's Telephone</th>
                <th>Company's Fax</th>
                <th>Company's Currency</th>
                <th>Company's Capital</th>
                <th>Company's Type</th>
                <th>Company's Creation Date</th>
              </tr>
              </thead>
              <tbody>
              {this.tabRow()}
            </tbody>
          </Table>
          </Navbar>
          </div>
          )
      }
    }
    export default ApprovedCompanies