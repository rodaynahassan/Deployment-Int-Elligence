import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
//import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
import FlippingAssignReviewer from '../form/FlippingAssignReviewer ';
class assignToReviewer extends Component 
{
    state = {
        assignReviewers:[]
      }
      componentDidMount(){


      


        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('http://localhost:5000/routes/api/forms/getLawyerAccepted',{headers: { "Authorization": localStorage.getItem('jwtToken') }})
        .then(res => {
          if(Array.isArray(res.data.data)){
            this.setState({assignReviewers: res.data.data})
        }})}
        tabRow(){
          return this.state.assignReviewers.map(function(assignToReviewer,i){
              return <FlippingAssignReviewer assignToReviewer={assignToReviewer} key={i} />;
          });
        }
        render(){
            return (
               
             <div  style={{display:"flex" , flexWrap:"wrap",alignItems:"right" , justifyContent:"right"}}>
              <Button variant="nada" block disabled><h1>Reviewer Tasks to PICK  </h1></Button>
             
                  {this.tabRow()} 
             </div>
            )
              
          }
}
export default assignToReviewer;
