import  React, { Component } from 'react';

class inProgressCaseComponents extends Component {
    render(){
        return (
            <tr>
                <td>{this.props.inProgressCase.companyName} </td>
                <td>{this.props.inProgressCase.companyNameInEnglish} </td>
                <td>{this.props.inProgressCase.type} </td>
                <td>{this.props.inProgressCase.companyGovernorate} </td>
                <td>{this.props.inProgressCase.companyCity} </td>
                <td>{this.props.inProgressCase.companyAddress} </td>
                <td>{this.props.inProgressCase.companyTelephone} </td>
                <td>{this.props.inProgressCase.companyFax} </td>
                <td>{this.props.inProgressCase.currency} </td>
                <td>{this.props.inProgressCase.equityCapital} </td>
                <td>{this.props.inProgressCase.type} </td>
                <td>{this.props.inProgressCase.creationDate} </td>
                <td>{this.props.inProgressCase.lawyerComments} </td>
                <td>{this.props.inProgressCase.reviewerComments} </td>
            </tr>
        )
    }
}
export default inProgressCaseComponents