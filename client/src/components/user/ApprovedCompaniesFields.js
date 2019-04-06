import  React, { Component } from 'react';

class ApprovedCompaniesFields extends Component {
    render(){
        return (
            <tr>
                <td>{this.props.approvedCompany.companyName} </td>
                <td>{this.props.approvedCompany.companyNameInEnglish} </td>
                <td>{this.props.approvedCompany.companyGovernorate} </td>
                <td>{this.props.approvedCompany.companyCity} </td>
                <td>{this.props.approvedCompany.companyAddress} </td>
                <td>{this.props.approvedCompany.companyTelephone} </td>
                <td>{this.props.approvedCompany.companyFax} </td>
                <td>{this.props.approvedCompany.currency} </td>
                <td>{this.props.approvedCompany.equityCapital} </td>
                <td>{this.props.approvedCompany.type} </td>
                <td>{this.props.approvedCompany.creationDate} </td>
                </tr>
        )
    }
}
export default ApprovedCompaniesFields