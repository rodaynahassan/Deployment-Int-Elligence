import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
import GetAllReviewerForms from '../form/GetAllReviewerForms';

class Companies extends Component {
    state = {
      companies:[]
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/users/getUserForms/5cad2bfc9b67f60ce098a60e')
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({companies: res.data.data})
      }})}

    

      tabRow(){
        return this.state.companies.map(function(company,i){
            return <GetAllReviewerForms company={company} key={i} />;
        });
      }
      render(){
        return (
             
         <div>
           
          <Button variant="nada" block disabled><h1>specific reviewer cases</h1></Button>
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
                <th>Accept Case</th>
                <th>Reject Case</th>
                <th>Add Comments</th>
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