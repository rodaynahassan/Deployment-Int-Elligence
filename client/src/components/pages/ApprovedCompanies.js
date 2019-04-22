import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import ApprovedCompaniesFields from '../user/ApprovedCompaniesFields';
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
import {Button} from"react-bootstrap"
//import egypt from '../../egypt.jpeg'
//import gafi from '../../gafi.jpeg'


class ApprovedCompanies extends Component {
	state = {
		approvedCompanies: []
	};
	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/users/getApprovedCompanies', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				if (Array.isArray(res.data.data)) {
					this.setState({ approvedCompanies: res.data.data, sscManagers: [] });
				}
			});
	}

	tabRow = () => {
		return this.state.approvedCompanies.map((approvedCompany, i) => {
			return <ApprovedCompaniesFields approvedCompany={approvedCompany} key={i} />;
		});
	};

     
     

      printDocument() {
        const input = document.getElementById('divToPrint');
        
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg');
            // const img = new Image();
            // var path = require("path");
            // img.src = path.resolve(egypt);
            // const img2 = new Image();
            // var path2 = require("path");
            // img2.src = path2.resolve(gafi);
             var pdf = new jsPDF({
              orientation: 'landscape',
              unit: 'in',
              format: [800, 1100]
            }) 

            
            pdf.addImage(imgData, 'JPEG', 1, 1);
            // pdf.addImage(img, 'JPEG', 1, 1);
            // pdf.addImage(img2, 'JPEG', 13.2, 1);

            pdf.setFont("helvetica");
            pdf.setFontType("bold");
            pdf.setFontSize(30);
            pdf.text(6.2, 3, 'Your Company');
           
            pdf.setFont("helvetica");
            pdf.setFontType("normal");
            pdf.setFontSize(15);
            pdf.text(1, 10, '© 2019 Copyright: GAFI');

            // pdf.output('dataurlnewwindow')
            pdf.save("download.pdf")
          })
        
      }
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
              
              <Button label="Save As PDF" variant='dark'
               onClick={this.printDocument} >Save As PDF<i class="far fa-file-pdf" style={{fontSize:"1.6em",left:"7%"}}></i></Button>
              
              </MuiThemeProvider>

              </div>
              <div id="divToPrint" className="mt4" {...css({
                backgroundColor: '#f5f5f5',
                width: '210mm',
                minHeight: '297mm',
                marginLeft: 'auto',
                marginRight: 'auto',
                
                })}>
 
                {this.state.approvedCompanies.map(el => {
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
                 
                 </Table>

                    </div>
                    
                })}
                 
                
                 </div>
              
            </div>)
        
          </div>
          )
      }
    }
    export default ApprovedCompanies
