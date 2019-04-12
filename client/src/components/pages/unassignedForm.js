import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
//import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
import FlippingUnassignedForms from '../form/FlippingUnassignedForms';
class unassignedForm extends Component 
{
    state={
        unassignedForms:[]
    }
    componentDidMount(){
        axios.get('http://localhost:5000/routes/api/forms/getUnAssignedForm')
        .then(res => {
          if(Array.isArray(res.data.data)){
            this.setState({unassignedForms: res.data.data})
        }})}
        tabRow(){
            return this.state.unassignedForms.map(function(unassigned,i){
                return <FlippingUnassignedForms unassigned={unassigned} key={i} />;
            });
          }
        render(){
            return (
               
             <div  style={{display:"flex" , flexWrap:"wrap",alignItems:"right" , justifyContent:"right"}}>
              <Button variant="nada" block disabled><h1>unassigned Tasks to PICK  </h1></Button>
             
                  {this.tabRow()} 
             </div>
            )
              
          }
}
export default unassignedForm;
