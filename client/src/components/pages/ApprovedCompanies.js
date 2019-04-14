import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import ApprovedCompaniesFields from '../user/ApprovedCompaniesFields';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import {Badge} from 'react-bootstrap'
import trans from '../translations/approvedTranslation'

class ApprovedCompanies extends Component {
    state = {
      approvedCompanies:[]
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/users/getApprovedCompanies/5ca6300113e5d0343c6e2a01')
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({approvedCompanies: res.data.data,sscManagers:[]})
           
         }
      })
    }
      tabRow(){
       return (
        this.state.approvedCompanies.map(function(approvedCompany,i){
        return <ApprovedCompaniesFields approvedCompany={approvedCompany} key={i}/>})
        )
      }
      render(){
        trans.setLanguage(this.props.lang)
        return (
          <div  style={{paddingLeft:'60px',flexDirection: 'row', justifyContent: 'flex-end'}} >
           <div style={{backgroundColor:"#123456" , textAlign:"center", fontSize:"50px" , color:"white" }} >{trans.title}</div>
          <Table striped bordered hover variant="gamed" size="sm">
            <thead>
              <tr>
                <th>{trans.name}</th>
                <th>{trans.nameInEnglish}</th>
                <th>{trans.governorate}</th>
                <th>{trans.city}</th>
                <th>{trans.address}</th>
                <th>{trans.telephone}</th>
                <th>{trans.fax}</th>
                <th>{trans.currency}</th>
                <th>{trans.capital}</th>
                <th>{trans.type}</th>
                <th>{trans.date}</th>
              </tr>
              </thead>
              <tbody>
              {this.tabRow()}
            </tbody>
          </Table>
        
          </div>
          )
      }
    }
    export default ApprovedCompanies