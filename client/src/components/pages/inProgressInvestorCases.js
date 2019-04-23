import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Flippy , {FrontSide , BackSide} from 'react-flippy'
import "mdbreact/dist/css/mdb.css";
import Mongoose from 'mongoose'
import {MDBProgress} from 'mdbreact'
import {Button} from 'react-bootstrap'
import trans from '../translations/inProgressTranslation'
class InProgressInvestorCases extends Component {
    state = {
      certainFormType:[],
      isFlipped: true
    }
    componentDidMount(){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
      axios.get('http://localhost:5000/routes/api/userDynamicForms/getInvestorInProgressCases/',{headers: { "Authorization": localStorage.getItem('jwtToken') }} )
      .then(res => {
        console.log(res)
        if(Array.isArray(res.data.data)){
          this.setState({certainFormType: res.data.data})
      }})
      .catch(err=>console.log(err))
    }
    EditForm = (formId) => {
      axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
      axios.put('http://localhost:5000/routes/api/userDynamicForms/investorEditForm/' +Mongoose.Types.ObjectId(formId),{headers: { "Authorization": localStorage.getItem('jwtToken') }}).then (res=> {
             this.setState({certainFormType:res.data.data,isFlipped:false})
             document.getElementById("Flip").flipOnClick = false
          }).catch(err=>{console.log(err)});
        }
       DeleteForm = (formId) => {
          axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
          axios.delete('http://localhost:5000/routes/api/userDynamicForms/investorDeleteForm/' +Mongoose.Types.ObjectId(formId),{headers: { "Authorization": localStorage.getItem('jwtToken') }}).then (res=> {
                 
                 document.getElementById("Flip").flipOnClick = false
                 alert('Cases have been Deleted')
                 document.location.href='/investorInProgressform'         
                   }).catch(err=>{console.log(err)});
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
          id = "Flip"          
         flipOnHover={false} 
         flipOnClick={this.state.isFlipped} 
         flipDirection="horizontal" 
         ref={(r) => this.flippy = r} 
         style={{ width: "100%" , height: '500px' }}
          
       >
       <FrontSide
             style={{
               borderStyle: 'solid',
               borderWidth:'5px',
               backgroundSize: "464px 400px"
              }}
           >
           <div style={{textAlign:'center' ,fontSize:'50px' }}>
            <h1 style = {{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', fontSize:'80px'}}>{Form.companyName}</h1>
            <i class="fas fa-angle-double-left" title='click to view details' style={{paddingRight:'650px'}}></i>
            <i class="fas fa-angle-double-right" title='click to view details' style={{paddingLeft:'650px'}}></i><br/><br/>
          <div>
          {Form.status==='Unassigned'?<MDBProgress  material value={25} color="dark" height="63px"><h3 style={{color:"#64b9e0", fontSize:'30px'}}>Unassigned <br/> 25%</h3></MDBProgress>:null}
          {Form.status==='In progress Lawyer'?<MDBProgress  material value={35} color="dark" height="63px"><h3 style={{color:"#64b9e0", fontSize:'30px'}}>In Progress Lawyer <br/> 35%</h3></MDBProgress>:null}
          {Form.status==='Lawyer rejected'?<MDBProgress  material value={55} color="dark" height="63px"><h3 style={{color:"#64b9e0", fontSize:'30px'}}>Lawyer Rejected <br/> 55%</h3></MDBProgress>:null}
          {Form.status==='Lawyer accepted'?<MDBProgress  material value={75} color="dark" height="63px"><h3 style={{color:"#64b9e0", fontSize:'30px'}}>Lawyer Accepted <br/> 75%</h3></MDBProgress>:null}
          {Form.status==='In progress Reviewer'?<MDBProgress  material value={100} color="dark" height="63px"><h3 style={{color:"#64b9e0", fontSize:'30px'}}>In Progress Reviewer <br/> 100%</h3></MDBProgress>:null}
          {Form.status==='Approved'?<MDBProgress material value={65} color="dark" height="63px"><h3 style={{color:"#64b9e0", fontSize:'30px'}}>Approved</h3></MDBProgress>:null}
          {Form.status==='Unassigned'?<div><Button type="button"  variant="dark" onClick={()=>(this.EditForm(Form._id))} class="btn btn-info"><h3 style={{color:"#64b9e0", fontSize:'15px'}}>Edit Form<br/><i class="fas fa-edit"></i></h3></Button><Button variant="dark" type="button"  onClick={()=>(this.DeleteForm((Form._id)), alert('This case is deleted to YOU!!'))} class="btn btn-info"><h3 style={{color:"#64b9e0", fontSize:'15px'}}>Delete Form<br/><i class="fas fa-trash"></i></h3></Button></div>:null}
           </div>
           </div>
           </FrontSide>
       <BackSide
          style={{ backgroundColor: '#f7f7f7', borderStyle: 'solid',borderWidth:'5px',paddingLeft:'60px'}}>
          <div>
  {  KEYS.map((key,index)=>{
      if(key !== "_id" && key !=="formType" && key !=='investorId' && key !=='lawyerId' )
      {
        var constraints = Form[key]
        console.log(key,":",constraints ) 
        for (var i in constraints){
          if(Array.isArray(constraints) ) return constraints.map((att,index)=>{
          })
        return  <h5><i class="fas fa-circle" style={{fontSize:"13px"}}></i> {key} : <span style ={{textAlign:'center'}}></span> <span style = {{ color:'#9ad1e7'}}>{constraints}</span> </h5>
        }  
      }})}
    </div>
    </BackSide>    
    </Flippy>)
    })  
   }
      render(){
        trans.setLanguage(this.props.lang)
        return (
            <div>
            <div style={{backgroundColor:"#a3dbf1",paddingBottom:"20px", paddingTop:"20px",textAlign:"center", fontSize:"60px" , color:"dark" ,flexDirection: 'row', justifyContent: 'flex-end'}} ><h2 style={{marginTop:"30px",paddingTop:'50px',fontSize:"50px"}}>In Progress Cases</h2></div>   
            <div  style={{display:"flex" ,flexWrap:"wrap",alignItems:"right" , justifyContent:"right"}}>
            {this.getAttributes()} 
           </div>
           </div>
            
          )
      }
    }
    export default InProgressInvestorCases