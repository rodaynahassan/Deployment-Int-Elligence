import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import {Button} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
import FlippingAssignReviewer from '../form/FlippingAssignReviewer ';
import trans from '../translations/unassignedRevTranslation'
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
              <div>
              <div style={{backgroundColor:"#96aab3" , textAlign:"center", fontSize:"50px" , color:"white" ,paddingLeft:'60px',flexDirection: 'row', justifyContent: 'flex-end'}} >{trans.title}</div>   
             <div  style={{display:"flex" , flexWrap:"wrap",alignItems:"right" , justifyContent:"right"}}>
              {this.tabRow()} 
             </div>
             </div>
            )
              
          }
}
export default assignToReviewer;
