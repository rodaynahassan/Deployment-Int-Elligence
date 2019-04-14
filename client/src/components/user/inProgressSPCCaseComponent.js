import  React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import { Table } from 'semantic-ui-react';

class inProgressSPCCaseComponents extends Component {
    render=()=>{
        return (
            <Table.Row>
                <Table.HeaderCell>{this.props.inProgressSPCCase.companyName} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.companyNameInEnglish} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.type} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.companyGovernorate} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.companyCity} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.companyAddress} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.companyTelephone} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.companyFax} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.currency} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.equityCapital} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.type} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.creationDate} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.lawyerComments} </Table.HeaderCell>
                <Table.HeaderCell>{this.props.inProgressSPCCase.reviewerComments} </Table.HeaderCell>
                <Table.HeaderCell><Button variant="white" block onClick={()=>this.props.setFormId(this.props.inProgressSPCCase)} ><h3>EDIT</h3></Button></Table.HeaderCell>
            </Table.Row>
        )
    }
}
export default inProgressSPCCaseComponents