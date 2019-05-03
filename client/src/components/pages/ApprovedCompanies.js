import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
// import ApprovedCompaniesFields from '../user/ApprovedCompaniesFields';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import {Badge} from 'react-bootstrap'
import trans from '../translations/approvedTranslation'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import styled, { css } from 'styled-components'
import style from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {MDBIcon } from "mdbreact";
import {Button,Card} from"react-bootstrap"
import egypt from '../../egypt.jpeg'
import gafi from '../../gafi.jpeg'

   
class ApprovedCompanies extends Component {
    state = {
      approvedCompanies:[]
    }
    componentDidMount(){

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
      axios.get('/routes/api/userDynamicForms/getInvestorApprovedCompanies',{headers: { "Authorization": localStorage.getItem('jwtToken') }})
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

      printDocument() {
        const input = document.getElementById('divToPrint');
        
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg');
            const img = new Image();
            var path = require("path");
            img.src = path.resolve(egypt);
            const img2 = new Image();
            var path2 = require("path");
            img2.src = path2.resolve(gafi);
            var pdf = new jsPDF({
              orientation: 'landscape',
              unit: 'in',
              format: [900, 1100]
            }) 

            pdf.addImage(imgData, 'JPEG', 1, 1);
            pdf.addImage(img, 'JPEG', 1, 1);
            pdf.addImage(img2, 'JPEG', 13.2, 1);

            pdf.setFont("helvetica");
            pdf.setFontType("bold");
            pdf.setFontSize(30);
            pdf.text(6.2, 3, 'Your Company');
           
            pdf.setFont("helvetica");
            pdf.setFontType("normal");
            pdf.setFontSize(15);
            pdf.text(1, 12, '© 2019 Copyright: GAFI');

            // pdf.output('dataurlnewwindow')
            pdf.save("download.pdf")
          })
        
      }

      getAttributes = () => {
     
        return this.state.approvedCompanies.map((Form, index) => {
          var KEYS = [];
          // console.log(Form)
          for (var key in Form) {
            KEYS.push(key);
          }
          return(
            <Card >
              <Card.Body>
                {KEYS.map((key, index) => {
                  if (
                    key !== "_proto" &&
                    key !== "_id" &&
                    key !== "formType" &&
                    key !== "investorId" &&
                    key !== "lawyerId" &&
                    key !== "reviewerId" &&
                    key !== "__v" &&
                    key !== "reviewerComments"
                  ) {
                    var constraints = Form[key];
                    if (Array.isArray(constraints)) {
                     if(!constraints["0"]) return
                      var keys = []
                       for (var att in constraints["0"]) {
                        keys.push(att);
                         } 
                        }
                        return (
                          <div>
                            <div key={key}>
                              <h3>
                                <i class="fas fa-circle" style={{fontSize:'0.5em'}}/> {key} : {constraints}{" "}
                              </h3>
                            </div>
                            
                          </div>
                        );
                      }})
                      }
                       </Card.Body>
                       </Card>
                                    
          )
         }
        )}

      render(){
        trans.setLanguage(this.props.lang)
        return (
          <div  style={{paddingLeft:'60px',flexDirection: 'row', justifyContent: 'flex-end'}} >
           {/* <div style={{backgroundColor:"#123456" , textAlign:"center", fontSize:"50px" , color:"white" }} >{trans.title}</div>
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
          </Table> */}

          (<div>
              
              <div style={{paddingLeft:"44%"}}>

              <MuiThemeProvider >
              
              <Button label="Save As PDF" variant='omar' size="sm" width="60px" height="8px" style={{marginTop:"100px", width:"120px", height:"70px" ,backgroundColor:"#a3dbf1"}}
               onClick={this.printDocument} ><i class="far fa-file-pdf" style={{fontSize:"1.6em",left:"2%", color:"light blue"}}></i>
               <h5 style={{fontSize:"15px"}}> Save As PDF</h5></Button>
              
              </MuiThemeProvider>
              {/* <Button 
                      label="Save As PDF"
                      variant='omar' 
                      size="sm"
                      width="60px"
                      className="mt-3" 
                      height="2px"
                      textAlign= 'right' 
                      style={{marginTop:"100px", width:"120px", height:"70px" ,backgroundColor:"#a3dbf1",left:'0%',right:'100%'}}
                      onClick={this.printDocument}
                      >
                      <i class="far fa-file-pdf" style={{fontSize:"1.6em",left:"2%", color:"light blue"}}></i>
                      <h5 style={{fontSize:"15px"}}> Save As PDF</h5>
                      </Button> */}
              </div>
              <div id="divToPrint" className="mt4" {...css({
                backgroundColor: '#f5f5f5',
                width: '210mm',
                minHeight: '297mm',
                marginLeft: 'auto',
                marginRight: 'auto',
                
                })}>
                <br />
                <br/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {this.getAttributes()}
 
                {/* {this.state.approvedCompanies.map(el => {
                  return <div key={el.id}>
                  <br/>
                  <br/>
                  <br/> 
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                     <Table striped bordered hover >
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
                   <tr>
                     <td>{el.companyName}</td>
                     <td>{el.companyNameInEnglish}</td>
                     <td>{el.companyGovernorate}</td>
                     <td>{el.companyCity}</td>
                     <td>{el.companyAddress}</td>
                     <td>{el.companyTelephone}</td>
                     <td>{el.companyFax}</td>
                     <td>{el.currency}</td>
                     <td>{el.equityCapital}</td>
                     <td>{el.type}</td>
                     <td>{el.creationDate}</td>
                   </tr>
                   
                 </tbody>
                 
                 </Table> */}

                    {/* </div>
                    
                })} */}
                 
                
                 </div>
              
            </div>
        
          </div>
          )
      }
    }
    export default ApprovedCompanies


