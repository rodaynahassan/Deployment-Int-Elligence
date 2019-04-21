import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import {Button} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
import FlippingCard from '../form/FlippingCard'
import trans from '../translations/companiesTranslation'
class Companies extends Component {
    state = {
      companies:[]
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/forms/getApprovedCompany')
      .then(res => {
        if(Array.isArray(res.data.data)){
          this.setState({companies: res.data.data})
      }})}
      tabRow = () => {
        return this.state.companies.map((company,i)=>{
          return <FlippingCard lang={this.props.lang} company={company} key={i}/>  
       
        });
      }
      render(){
        trans.setLanguage(this.props.lang)
        return ( 
         <div >
          <div style={{backgroundColor:"#a3dbf1" , textAlign:"center", fontSize:"50px" , color:"white" ,paddingLeft:'60px',flexDirection: 'row', justifyContent: 'flex-end'}} ><h2 style={{fontSize:"50px"}}>{trans.title}</h2></div>  
            <div style={{display:"flex" , flexWrap:"wrap",alignItems:"right" , justifyContent:"right"}}>
              {this.tabRow()}
            </div>
         </div>
        )  
      }
    }
export default Companies