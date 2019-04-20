import  React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import "mdbreact/dist/css/mdb.css";
import Flippy , {FrontSide , BackSide} from 'react-flippy'
const mongoose = require('mongoose');
class FlippingUnassignedForms extends Component {
  AssignCase = (formId) => {
      axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
      axios.put('http://localhost:5000/routes/api/users/takingForm/'+mongoose.Types.ObjectId(formId),{headers: { "Authorization": localStorage.getItem('jwtToken') }})
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    }
    render()
    {
        return(
            <Flippy
            flipOnHover={false} 
            flipOnClick={true} 
            flipDirection="horizontal" 
            ref={(r) => this.flippy = r} 
            style={{ width: "100%" , height: '425px' }} 
          >
            <FrontSide
                style={{
                    borderStyle: 'solid',
                    borderWidth:'5px',
                    backgroundSize: "464px 400px"
                   }}
                 >
                 <div style={{textAlign:'center' ,fontSize:'70px' , textShadow:'-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'}}>
                
                 <h1 style = {{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', fontSize:'100px'}}>{this.props.unassigned.companyName} </h1><br/>
                   <h5 style={{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', color:'#2e5a7c'}}>Press here to view details</h5> 
                   <Button type="button" variant="omar" onClick={()=>(this.AssignCase(this.props.unassigned._id), alert('This Case is assigned to YOU!!'))}class="btn btn-info">Pick Case</Button>
                   {/* <Button variant="nada" block onClick={()=>(this.AssignCase(this.props.unassigned._id), alert('This Case is assigned to YOU!!'))}><h3>PICK CASE</h3></Button> */}
                   </div>
            </FrontSide>
            <BackSide
             style={{ backgroundColor: '#e8e6da', borderStyle: 'solid',borderWidth:'5px',paddingLeft:'60px'}}>
            
           <h3> <i class="fas fa-genderless"></i>Name In English :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.companyNameInEnglish}</span> </h3> 
           <h5> <i class="fas fa-genderless"></i>Governorate :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.companyGovernorate}</span> </h5>
           <h5> <i class="fas fa-genderless"></i>City :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.companyCity}</span> </h5>
           <h5><i class="fas fa-genderless"></i> Address :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.companyAddress}</span> </h5>
           <h5><i class="fas fa-genderless"></i> Telephone :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.companyTelephone}</span> </h5>
           <h5><i class="fas fa-genderless"></i> Fax :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.companyFax}</span> </h5>
           <h5><i class="fas fa-genderless"></i> Currency :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.currency}</span> </h5>
           <h5><i class="fas fa-genderless"></i> Equity Capital :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.equityCapital}</span> </h5>
           <h5> <i class="fas fa-genderless"></i>Type :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.type}</span> </h5>
           <h5> <i class="fas fa-genderless"></i>creation Date :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.unassigned.creationDate}</span> </h5>

            </BackSide>
          </Flippy>
        )   
    }
}
export default FlippingUnassignedForms;