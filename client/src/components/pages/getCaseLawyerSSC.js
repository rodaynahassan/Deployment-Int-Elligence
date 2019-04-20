import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
import GetAllUserForms from '../form/GetAllUserForms';
import {Dropdown} from 'react-bootstrap';
var $ = require("jquery")(window);

class Companies extends Component {
    state = {
      companies:[]
    }
    componentDidMount(){
      axios.defaults.headers.common['Authorization'] =   localStorage.getItem('jwtToken');
      axios.get('http://localhost:5000/routes/api/users/getUserFormsSSC',{headers: { "Authorization": localStorage.getItem('jwtToken') }})
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({companies: res.data.data})
      }})}
      sort = () => {
        axios.defaults.headers.common['Authorization'] =   localStorage.getItem('jwtToken');
        axios.get('http://localhost:5000/routes/api/users/SpecificFormSortedByFormId',{headers: { "Authorization": localStorage.getItem('jwtToken') }}).then (res=> {
               this.setState({companies:res.data.data})
               alert('Cases have been sorted')
            }).catch(err=>{console.log(err)});
          }
          sortByCreationDate = () => {
            axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
            axios.get('http://localhost:5000/routes/api/users/SpecificformsSortedByformDate',{headers: { "Authorization": localStorage.getItem('jwtToken') }}).then (res=> {
                   this.setState({companies:res.data.data})
                   alert('Cases have been sorted')
                }).catch(err=>{console.log(err)});
              }
    

      tabRow(){
        return this.state.companies.map(function(company,i){
            return <GetAllUserForms company={company} key={i} />;
        });
      }
      render(){
        return (
             
          <div>
           
           <div >
          <div style={{backgroundColor:"#96aab3" , textAlign:"center", fontSize:"50px" , color:"white" ,paddingLeft:'60px',flexDirection: 'row', justifyContent: 'flex-end'}} >Specific lawyer case <br/>
          <Dropdown>
            <Dropdown.Toggle variant="omar" id="dropdown-basic">
              Sort the Cases
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>this.sort()} style={{textAlign:'left'}}>By ID</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item onClick={()=>this.sortByCreationDate()} style={{textAlign:'center'}}>By Creation Date</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div>
            </div>
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
                <th>Fees</th>
                <th>Accept Case</th>
                <th>Add Comments</th>
                <th>Calculate The Fees</th>
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