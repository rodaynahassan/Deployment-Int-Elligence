import  React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { MDBProgress } from 'mdbreact'

class ApprovedCompaniesFields extends Component {
    render(){
        return (
            <div>
            <Card border="dark" >
            <Card.Header style={{fontSize:'35px'}}><h1>{this.props.approvedCompany.companyName}</h1> </Card.Header>
            <Card.Body>
            <div  style={{textAlign:'left'}}>
                <h3><i class="fas fa-genderless"></i> Name in English : {this.props.approvedCompany.companyNameInEnglish}</h3>
                <h3><i class="fas fa-genderless"></i> Governorate : {this.props.approvedCompany.companyGovernorate} </h3>
                <h3><i class="fas fa-genderless"></i> City : {this.props.approvedCompany.companyCity} </h3>
                <h3><i class="fas fa-genderless"></i> Address : {this.props.approvedCompany.companyAddress} </h3>
                <h3><i class="fas fa-genderless"></i> Telephone : {this.props.approvedCompany.companyTelephone} </h3>
                <h3><i class="fas fa-genderless"></i> Fax : {this.props.approvedCompany.companyFax} </h3>
                <h3><i class="fas fa-genderless"></i> Currency : {this.props.approvedCompany.currency} </h3>
                <h3><i class="fas fa-genderless"></i> Equity Capital : {this.props.approvedCompany.equityCapital}</h3>
                <h3><i class="fas fa-genderless"></i> Type : {this.props.approvedCompany.type}</h3>
                <h3><i class="fas fa-genderless"></i> Creation Date : {this.props.approvedCompany.creationDate}</h3>
                </div>
                <MDBProgress  material value={25} color="dark" height="35px">
               <h3> Lawyer accepted </h3>
            </MDBProgress>
            </Card.Body>
            </Card>
            </div>
        )
    }
}
export default ApprovedCompaniesFields