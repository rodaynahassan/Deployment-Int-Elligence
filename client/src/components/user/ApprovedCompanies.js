import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import ApprovedCompaniesFields from './ApprovedCompaniesFields';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'

class ApprovedCompanies extends Component {
    state = {
      approvedCompanies:[]
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/users/getApprovedCompanies/5ca6302913e5d0343c6e2a0d')
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
          )
      }
    }
    export default ApprovedCompanies