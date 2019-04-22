import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import ApprovedCompaniesFields from '../user/ApprovedCompaniesFields';
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
      
      tabRow = () => {
        return this.state.approvedCompanies.map((approvedCompany,i)=>{
            return <ApprovedCompaniesFields approvedCompany={approvedCompany} key={i}/>  
         })
        }

      render(){
        trans.setLanguage(this.props.lang)
        return (
          <div>
          <div style={{backgroundColor:"#a3dbf1" ,marginTop:"80px",paddingBottom:"20px", paddingTop:"20px",textAlign:"center", fontSize:"60px" , color:"dark" ,flexDirection: 'row', justifyContent: 'flex-end'}} ><h2 style={{fontSize:"50px"}}>{trans.title}</h2></div>   
              <div  style={{display:"flex" , flexWrap:"wrap",alignItems:"right" , justifyContent:"right"}}>
              {this.tabRow()}
              </div>
          
          </div>
          )
      }
    }
    export default ApprovedCompanies