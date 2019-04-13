import  React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Mongoose from 'mongoose';
import axios from 'axios';
import "mdbreact/dist/css/mdb.css";
import comp2 from '../layout/comp2.jpg'
import Flippy , {FrontSide , BackSide} from "react-flippy";
class FlippingAssignReviewer extends Component
 {
    AssignReviewer = (formId) => 
    {
        axios.put('http://localhost:5000/routes/api/users/takingForm/'+Mongoose.Types.ObjectId('5cb0ae38f5081445302a3016') +'/'+Mongoose.Types.ObjectId(formId))
    }
    render()
    {
        return(
        <Flippy
            flipOnHover={true} 
            flipOnClick={true} 
            flipDirection="horizontal" 
            ref={(r) => this.flippy = r} 
            style={{ width: "450px" , height: '400px' }} 
          >
            <FrontSide
               style={{
                borderStyle: 'solid',
                borderWidth:'5px',
                backgroundImage: "url(" +  comp2  + ")",
                backgroundSize: "464px 400px"
               }}
             >
             <div style={{textAlign:'center' ,fontSize:'50px' , textShadow:'-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'}}>
            
               {this.props.assignToReviewer.companyName} <br/> <br/><br/> <br/> 
               <h5 style={{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'}}>Hover here to Pick Case</h5> 
               </div>
            </FrontSide>
            <BackSide
               style={{ backgroundColor: '#e8e6da', borderStyle: 'solid',borderWidth:'5px'}}>
                <div style={{textAlign:'center'}}>
                Name In English : {this.props.assignToReviewer.companyNameInEnglish} <br/>
                Governate : {this.props.assignToReviewer.companyGovernorate} <br/>
                City : {this.props.assignToReviewer.companyCity} <br/>
                Address : {this.props.assignToReviewer.companyAddress} <br/>
                Telephone : {this.props.assignToReviewer.companyTelephone} <br/>
                Fax : {this.props.assignToReviewer.companyFax} <br/>
                Currency : {this.props.assignToReviewer.currency} <br/>
                Equity Capital : {this.props.assignToReviewer.equityCapital}<br/>
                Type : {this.props.assignToReviewer.type}<br/>
                Creation Date : {this.props.assignToReviewer.creationDate}<br/>
                <Button variant="nada" block onClick={()=>(this.AssignReviewer(this.props.assignToReviewer._id), alert('You can Review this Case'))}><h3>PICK CASE</h3></Button>
                       
                 </div>
            </BackSide>
          </Flippy>
        )
      }
}
export default FlippingAssignReviewer