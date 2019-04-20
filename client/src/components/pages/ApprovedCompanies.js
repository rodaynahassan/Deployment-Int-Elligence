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


      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
      axios.get('http://localhost:5000/routes/api/users/getApprovedCompanies',{headers: { "Authorization": localStorage.getItem('jwtToken') }})
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({approvedCompanies: res.data.data,sscManagers:[]})
           
         }
      })
    }
      // tabRow(){
      //  return (
      //   this.state.approvedCompanies.map(function(approvedCompany,i){
      //   return <ApprovedCompaniesFields approvedCompany={approvedCompany} key={i}/>})
      //   )
      // }

      tabRow = () => {
        return this.state.approvedCompanies.map((approvedCompany,i)=>{
            return <ApprovedCompaniesFields approvedCompany={approvedCompany} key={i}/>  
         })
        }

      render(){
        trans.setLanguage(this.props.lang)
        return (
          <div  style={{paddingLeft:'60px',flexDirection: 'row', justifyContent: 'flex-end'}} >
           <div style={{backgroundColor:"#123456" , textAlign:"center", fontSize:"50px" , color:"white" }} >{trans.title}</div>
          
              {this.tabRow()}
          
        
          </div>
          )
      }
    }
    export default ApprovedCompanies