import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Table from 'react-bootstrap/Table';
import {Button, Container} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
import CardReviewer from  '../form/CardReviewer'
import GetAllReviewerForms from '../form/GetAllReviewerForms';

class Companies extends Component {
    state = {
      companies:[]
    }
    componentDidMount(){


    
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
      axios.get('http://localhost:5000/routes/api/users/getUserForms',{headers: { "Authorization": localStorage.getItem('jwtToken') }})
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({companies: res.data.data})
      }})}

      sort = () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
        axios.get('http://localhost:5000/routes/api/users/SpecificFormSortedByFormId',{headers: { "Authorization": localStorage.getItem('jwtToken') }}).then (res=> {
               this.setState({forms:res.data.data})
               alert('Cases have been sorted')
            }).catch(err=>{console.log(err)});
           
     }   
     
     sortByCreationDate = () => {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
      axios.get('http://localhost:5000/routes/api/users/SpecificformsSortedByformDate',{headers: { "Authorization": localStorage.getItem('jwtToken') }}).then (res=> {
             this.setState({forms:res.data.data})
             alert('Cases have been sorted')
          }).catch(err=>{console.log(err)});
        }
      // tabRow(){
      //   return this.state.companies.map(function(company,i){
      //       return <GetAllReviewerForms company={company} key={i} />;
      //   });
      // }

      tabRow = () => {
        return this.state.companies.map((company,i)=>{
            return <CardReviewer company={company} key={i}/>  
         })
        }
      render(){
        return (
            
          <div>
          
           <Container>
          <Button variant="nada" block disabled><h1>specific reviewer cases</h1></Button>
          <Button variant="dark" onClick={()=>this.sort()}>Sort the cases by ID </Button> 
          <Button variant="dark" onClick={()=>this.sortByCreationDate()}>Sort the cases by CreationDate </Button> 
          </Container> 
           {this.tabRow()}
             
         </div>
        )
          
      }
    }
export default Companies