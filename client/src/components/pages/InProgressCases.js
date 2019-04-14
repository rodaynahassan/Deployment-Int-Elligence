import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import InProgressCasesComponents from '../user/InProgressCasesComponents';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
import trans from '../translations/inProgressTranslation'

class InProgressCases extends Component {
    state = {
      inProgressCases:[]
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/users/getInProgressCases/5ca8b5f050bb3e4ce80c54ea')
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({inProgressCases: res.data.data})
      }})}
      tabRow(){
        return this.state.inProgressCases.map(function(inProgressCase, i){
            return <InProgressCasesComponents inProgressCase={inProgressCase} key={i} />;
        });
      }
      render(){
        trans.setLanguage(this.props.lang)
        return (
          <div style={{ paddingLeft:'60px',justifyItems:"center"}}>
      <div style={{backgroundColor:"#123456" , textAlign:"center", fontSize:"50px" , color:"white" , width:"100%" }} >{trans.title}</div>
          <Table striped bordered hover variant="gamed">
            <thead>
              <tr>
                <th>{trans.name}</th>
                <th>{trans.nameInEnglish}</th>
                <th>{trans.type}</th>
                <th>{trans.governorate}</th>
                <th>{trans.city}</th>
                <th>{trans.address}</th>
                <th>{trans.telephone}</th>
                <th>{trans.fax}</th>
                <th>{trans.currency}</th>
                <th>{trans.capital}</th>
                <th>{trans.type}</th>
                <th>{trans.date}</th>
                <th>{trans.lawyerComments}</th>
                <th>{trans.reviewerComments}</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </Table>
          </div>
          )
      }
    }
    export default InProgressCases