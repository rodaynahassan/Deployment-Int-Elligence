import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import'../../App.scss';
import {Button} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
import Flippy , {FrontSide , BackSide} from 'react-flippy'
import trans from '../translations/unassignedTranslation'
const mongoose = require('mongoose');
class unassignedForm extends Component 
{
    state={
      certainFormType:[]
    }
    componentDidMount(){
     
      axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
        axios.get('http://localhost:5000/routes/api/userDynamicForms/getLawyerPossiblePicks',{headers: { "Authorization": localStorage.getItem('jwtToken') }})
        .then(res => {
          if(Array.isArray(res.data.data)){
            this.setState({certainFormType: res.data.data})
        }})}
        AssignCase = (formId) => {
          axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
          axios.put('http://localhost:5000/routes/api/userDynamicForms/takingForm/'+mongoose.Types.ObjectId(formId),{headers: { "Authorization": localStorage.getItem('jwtToken') }})
          .then(res=>console.log(res))
          .catch(err=>console.log(err))
        }
        
        getAttributes =()=>{
        
          return this.state.certainFormType.map((Form,index)=>{
            var KEYS =[]
          for (var key in Form)
          {
           KEYS.push(key)
          }
          return(
            <Flippy
            flipOnHover={false} 
               flipOnClick={true} 
               flipDirection="horizontal" 
               ref={(r) => this.flippy = r} 
               style={{ width: "100%" , height: '425px' }} >
               <FrontSide
                style={{
                  borderStyle: 'solid',
                  borderWidth:'5px',
                  backgroundSize: "464px 400px"
                 }}
              >
              <div style={{textAlign:'center' ,fontSize:'50px' , textShadow:'-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'}}>
               <h1 style = {{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', fontSize:'100px'}}>{Form.companyName}</h1>
               <i class="fas fa-angle-double-left" title='click to view details' style={{paddingRight:'650px'}}></i>
             <i class="fas fa-angle-double-right" title='click to view details' style={{paddingLeft:'650px'}}></i><br/>
             <Button type="button" variant="ali" onClick={()=>(this.AssignCase(Form._id), alert('This Case is assigned to YOU!!'))}class="btn btn-info"><h6 style={{color:"#64b9e0" }}>Pick Case</h6></Button>
              </div>
              </FrontSide>
            <BackSide
             style={{ backgroundColor: '#f7f7f7', borderStyle: 'solid',borderWidth:'5px',paddingLeft:'60px'}}>
             <div>
     {  KEYS.map((key,index)=>{
         if(key !=='_proto' && key !== "_id" && key !=="formType" && key !=='investorId' && key !=='lawyerId' )
         {
           var constraints = Form[key]
           console.log(key,":",constraints ) 
           for (var i in constraints){
             if(Array.isArray(constraints) ) return constraints.map((att,index)=>{
            
             })
             return  <h5><i class="fas fa-circle" style={{fontSize:"13px"}}></i> {key} : <span style ={{textAlign:'center'}}></span> <span style = {{ color:'#9ad1e7'}}>{constraints}</span> </h5>           }
           
         }
         
       })}
       </div>
            </BackSide>
          </Flippy>)
        }) 
}

        render(){
            return (
              <div>
              <div style={{backgroundColor:"#a3dbf1" ,marginTop:"80px",paddingBottom:"20px", paddingTop:"20px",textAlign:"center", fontSize:"60px" , color:"dark" ,flexDirection: 'row', justifyContent: 'flex-end'}} ><h2 style={{fontSize:"50px"}}>{trans.title}</h2></div>   
              <div  style={{display:"flex" , flexWrap:"wrap",alignItems:"right" , justifyContent:"right"}}>
              {this.getAttributes()} 
             </div>
             </div>
            )
              
          }
}
export default unassignedForm;
