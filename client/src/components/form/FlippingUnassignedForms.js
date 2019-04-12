import  React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import "mdbreact/dist/css/mdb.css";
import comp1 from '../layout/comp2.jpg'
import Flippy , {FrontSide , BackSide} from 'react-flippy'
const mongoose = require('mongoose');
class FlippingUnassignedForms extends Component {
    AssignCase = (formId) => {axios.put('http://localhost:5000/routes/api/users/takingForm/'+ mongoose.Types.ObjectId('5cb0d52cabcd7f2820f50bfd') +'/'+mongoose.Types.ObjectId(formId))
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
                    backgroundImage: "url(" +  comp1  + ")",
                    backgroundSize: "464px 400px"
                   }}
                 >
                 <div style={{textAlign:'center' ,fontSize:'50px' , textShadow:'-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'}}>
                
                   {this.props.unassigned.companyName} <br/> <br/><br/> <br/> 
                   <h5 style={{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'}}>Hover here to Pick Case</h5> 
                   </div>
            </FrontSide>
            <BackSide
               style={{ backgroundColor: '#e8e6da', borderStyle: 'solid',borderWidth:'5px'}}>
                <div style={{textAlign:'center'}}>
                Name In English : {this.props.unassigned.companyNameInEnglish} <br/>
                Governate : {this.props.unassigned.companyGovernorate} <br/>
                City : {this.props.unassigned.companyCity} <br/>
                Address : {this.props.unassigned.companyAddress} <br/>
                Telephone : {this.props.unassigned.companyTelephone} <br/>
                Fax : {this.props.unassigned.companyFax} <br/>
                Currency : {this.props.unassigned.currency} <br/>
                Equity Capital : {this.props.unassigned.equityCapital}<br/>
                Type : {this.props.unassigned.type}<br/>
                Creation Date : {this.props.unassigned.creationDate}<br/>
                <Button variant="nada" block onClick={()=>(this.AssignCase(this.props.unassigned._id), alert('This Case is assigned to YOU!!'))}><h3>PICK CASE</h3></Button>
                       
                 </div>
            </BackSide>
          </Flippy>
        )   
    }
}
export default FlippingUnassignedForms;