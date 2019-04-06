import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import GetAllCompanies from './GetAllCompanies';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Companies extends Component {
    state = {
      companies:[]
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/forms/')
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({companies: res.data.data})
      }})}
      tabRow(){
        return this.state.companies.map(function(company,i){
            return <GetAllCompanies company={company} key={i} />;
        });
      }
      render(){
        return (
          <div>
             <Button variant="nada" block disabled><h1>Electronic Journal</h1></Button>
            <Table stripped bordered hover variant='dark' size='sm'>
            <thead>
              <tr>
              
                <th>Name</th>
                <th>Name In English </th>
                <th>Governorate</th>
                <th>City </th>
                <th>Address </th>
                <th>Telephone </th>
                <th>Fax </th>
                <th>Currency </th>
                <th>Capital </th>
                <th>Type </th>
                <th>Creation Date </th>
              </tr>

            </thead>
            <tbody>

              {this.tabRow()}
            </tbody>
          </Table>
          </div>
        )
          
      }
    }
export default Companies