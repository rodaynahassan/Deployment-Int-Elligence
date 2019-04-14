import  React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class inProgressSSCCasesComponents extends Component {
    render(){
        return (
            <tr>
                <td>{this.props.inProgressSSCCase.companyName} </td>
                <td>{this.props.inProgressSSCCase.companyNameInEnglish} </td>
                <td>{this.props.inProgressSSCCase.type} </td>
                <td>{this.props.inProgressSSCCase.companyGovernorate} </td>
                <td>{this.props.inProgressSSCCase.companyCity} </td>
                <td>{this.props.inProgressSSCCase.companyAddress} </td>
                <td>{this.props.inProgressSSCCase.companyTelephone} </td>
                <td>{this.props.inProgressSSCCase.companyFax} </td>
                <td>{this.props.inProgressSSCCase.currency} </td>
                <td>{this.props.inProgressSSCCase.equityCapital} </td>
                <td>{this.props.inProgressSSCCase.type} </td>
                <td>{this.props.inProgressSSCCase.creationDate} </td>
                <td>{this.props.inProgressSSCCase.lawyerComments} </td>
                <td>{this.props.inProgressSSCCase.reviewerComments} </td>
                <td><Button variant="white" block onClick={()=>this.props.setFormId(this.props.inProgressSSCCase)} ><h3>EDIT</h3></Button></td>
            </tr>
        )
    }
}
export default inProgressSSCCasesComponents