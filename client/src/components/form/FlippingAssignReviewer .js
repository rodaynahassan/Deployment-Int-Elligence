import  React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Mongoose from 'mongoose';
import axios from 'axios';
import "mdbreact/dist/css/mdb.css";
import Flippy , {FrontSide , BackSide} from "react-flippy";
class FlippingAssignReviewer extends Component
 {

  

    AssignReviewer = (formId) => 
    {
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
        axios.put('http://localhost:5000/routes/api/users/takingForm/'+Mongoose.Types.ObjectId(formId),{headers: { "Authorization": localStorage.getItem('jwtToken') }})
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
             <div style={{textAlign:'center' ,fontSize:'50px' , textShadow:'-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'}}>
             <h1 style = {{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', fontSize:'100px'}}>{this.props.assignToReviewer.companyName} </h1><br/>
             <h5 style={{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', color:'#2e5a7c'}}>Press here to view details</h5> 
             <Button type="button" variant="omar" onClick={()=>(this.AssignReviewer(this.props.assignToReviewer._id), alert('This Case is assigned to YOU!!'))}class="btn btn-info">Pick Case</Button>
            
             </div>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#e8e6da', borderStyle: 'solid',borderWidth:'5px' , paddingLeft:'60px'}}>
              {/* <div style={{textAlign:'center'}}> */}
            <h3><i class="fas fa-genderless"></i> Name In English :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.companyNameInEnglish}</span> </h3> 
            <h5> <i class="fas fa-genderless"></i>Governorate :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.companyGovernorate}</span> </h5>
            <h5> <i class="fas fa-genderless"></i>City :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.companyCity}</span> </h5>
            <h5><i class="fas fa-genderless"></i> Address :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.companyAddress}</span> </h5>
            <h5><i class="fas fa-genderless"></i> Telephone :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.companyTelephone}</span> </h5>
            <h5><i class="fas fa-genderless"></i> Fax :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.companyFax}</span> </h5>
            <h5><i class="fas fa-genderless"></i> Currency :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.currency}</span> </h5>
            <h5><i class="fas fa-genderless"></i> Equity Capital :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.equityCapital}</span> </h5>
            <h5> <i class="fas fa-genderless"></i>Type :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.type}</span> </h5>
            <h5> <i class="fas fa-genderless"></i>creation Date :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.assignToReviewer.creationDate}</span> </h5>
 {/* borderInLineStartWidth */}
           {/* </div> */}
            </BackSide>
          </Flippy>
        )
      }
}
export default FlippingAssignReviewer