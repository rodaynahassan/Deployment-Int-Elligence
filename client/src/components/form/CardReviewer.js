import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import {ButtonGroup} from 'react-bootstrap'
import axios from 'axios';
import { MDBProgress } from 'mdbreact'
import AddCommentsReviewer from '../pages/AddCommentsReviewer'
import { Link, animateScroll as Scroll } from "react-scroll";
const mongoose = require('mongoose')

class Cardd extends Component{

    constructor(props)
     {
         super(props)
         this.state = { modalShow: false };
     }

    accept = (formId) => {
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
        axios.put('http://localhost:5000/routes/api/users/accept/'+mongoose.Types.ObjectId(formId),{headers: { "Authorization": localStorage.getItem('jwtToken') }})
        }

   
        
    reject = (formId) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
            axios.put('http://localhost:5000/routes/api/users/reject/' + mongoose.Types.ObjectId(formId),{headers: { "Authorization": localStorage.getItem('jwtToken') }} )
        }    


    render()
    {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div>
            <Card border="dark" >
            <Card.Header style={{fontSize:'35px'}}><h1>{this.props.company.companyName}</h1> </Card.Header>
            <Card.Body>
               <div  style={{textAlign:'left'}}>
                <h3><i class="fas fa-circle"></i> Name in English : {this.props.company.companyNameInEnglish}</h3>
                <h3><i class="fas fa-circle"></i> Governorate : {this.props.company.companyGovernorate} </h3>
                <h3><i class="fas fa-circle"></i> City : {this.props.company.companyCity} </h3>
                <h3><i class="fas fa-circle"></i> Address : {this.props.company.companyAddress} </h3>
                <h3><i class="fas fa-circle"></i> Telephone : {this.props.company.companyTelephone} </h3>
                <h3><i class="fas fa-circle"></i> Fax : {this.props.company.companyFax} </h3>
                <h3><i class="fas fa-circle"></i> Currency : {this.props.company.currency} </h3>
                <h3><i class="fas fa-circle"></i> Equity Capital : {this.props.company.equityCapital}</h3>
                <h3><i class="fas fa-circle"></i> Type : {this.props.company.type}</h3>
                <h3><i class="fas fa-circle"></i> Creation Date : {this.props.company.creationDate}</h3>
                <h3><i class="fas fa-circle"></i> Fees :{this.props.company.fees}</h3>
                </div>
                <div  style={{textAlign:'right'}}>
                <ButtonGroup size="lg">
                <Button variant="outline-blue"  block style={{width:"250px",height:"115px"}} onClick={()=>this.accept(this.props.company._id)} ><h3><i class="fas fa-handshake" style={{fontSize:'1em'}}></i> <br />ACCEPT CASE</h3></Button> <br />
                <Button variant="outline-blue" block  style={{width:"250px",height:"115px"}}  onClick={()=>this.reject(this.props.company._id)} ><h3><i class="fas fa-ban" style={{fontSize:'1em'}}></i><br /> REJECT CASE</h3></Button>
                <ButtonToolbar>
                    <Button
                    variant="outline-blue"
                    block
                    onClick={() => this.setState({ modalShow: true })}
                    style={{width:"250px",height:"115px"}}
                    >
                    <h3>
                    <i class="fas fa-comment" style={{fontSize:'1em'}}></i>
                    <br />
                    Add Comments
                    </h3>
                    </Button>
                    <AddCommentsReviewer
                    show={this.state.modalShow}
                    onHide={modalClose}
                    formId={this.props.company._id}
                    />
                    </ButtonToolbar><br />
                <Button variant="outline-blue" block style={{width:"250px",height:"115px"}} onClick={()=>this.calculateFees(this.props.company._id)} ><h3>Calculate The Fees</h3></Button>
                </ButtonGroup>
                </div>
                <br />
            <MDBProgress  material value={25} color="dark" height="35px">
               <h3> In progress Reviewer </h3>
            </MDBProgress>
            </Card.Body>
            </Card>
            <br />
            </div>
        )
    }
}
export default Cardd