import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import trans from '../translations/sscTranslation'
var mongoose = require('mongoose')

class SSCForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // userId: {
            //   value : '',
            //  },
            companyName:{
             value : '',
             valid : false,
            },
            companyGovernorate:{
              value : '',
              valid : false,
             },
            companyAddress:{
              value : '',
              valid : false,
             },
            companyCity: {
              value:'',
              valiid:false
            },
            companyTelephone: '',
            companyFax: '',
            companyNameInEnglish: '',
            currency: {
              value : '',
              valid : false,
             },
            type:'',
            equityCapital:{
              value : '',
              valid : false,
             },
             SSCManagerName: {
                value : '',
                valid : false,
               },
             SSCManagerType: {
                value : '',
                valid : false,
               },
             SSCManagerGender:{
                value : '',
                valid : false,
               },
             SSCManagerNationality: {
                value : '',
                valid : false,
               },
             SSCManagerIdentificationType: {
                value : '',
                valid : false,
               },
             SSCManagerIdentificationNumber:{
                value : '',
                valid : false,
               },
             SSCManagerBirthdate:{
                value : '',
                valid : false,
               },
             SSCManagerAddress:{
                value : '',
                valid : false,
               },
             typeOfManagers:{
                value : '',
                valid : false,
               }
        };
        
    }
    
    
      handleClick(event){

        var apiBaseUrl = "http://localhost:5000/routes/api/users/CreatingForm/" + mongoose.Types.ObjectId('5ca7b4c9de707c37f8113097');
        var payload={
         //"userId":mongoose.Types.ObjectId('5ca7b4748be2725704f230bc'),
          "companyName": this.state.companyName.value,
          "companyGovernorate": this.state.companyGovernorate.value,
          "companyAddress": this.state.companyAddress.value,
          "companyCity": this.state.companyCity.value,
          "companyTelephone": this.state.companyTelephone.value,
          "companyFax": this.state.companyFax.value,
          "companyNameInEnglish": this.state.companyNameInEnglish.value,
          "currency": this.state.currency.value,
          "type" : 'SSCForm',
          "equityCapital" : this.state.equityCapital.value,
          "lawyerComments" : [],
          "reviewerComments" : [],
          "SSCManagers":[{"name":this.state.SSCManagerName.value,"type":this.state.SSCManagerType.value,"gender":this.state.SSCManagerGender.value,"nationality":this.state.SSCManagerNationality.value,"identificationType":this.state.SSCManagerIdentificationType.value,"identificationNumber":this.state.SSCManagerIdentificationNumber.value,"birthdate":this.state.SSCManagerBirthdate.value,"address":this.state.SSCManagerAddress.value,"typeOfManagers":this.state.typeOfManagers.value}],
       
          "creationDate": "2018-4-7",
          "status" : "Unassigned"
          }
        
        axios.post(apiBaseUrl, payload)
       .then(function (response) {
         console.log(response);
         if(response.data.code === 200){
          alert('SSCForm Created Succesfully') ;
         }
       })
       .catch(function (error) {
         console.log(error);
       });
      }
      
      changeHandler = event => {
        this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
      };
      
      validateForm() {
        return this.state.companyName.value.length >=3 && this.state.companyName.value.length <=50 

        }

    render() {
      // console.log(this.props)
      //  trans.setLanguage(this.props.lang)
      return (
        <div style={{ paddingLeft:'64px',justifyItems:"center"}} >
          <MuiThemeProvider >
            <div >
            <div style={{backgroundColor:"#123456" , textAlign:"center", fontSize:"50px" , color:"white" }} >{trans.title}</div>
               <br/>
               <MDBRow >
               <MDBCol>
              <MDBInput
                label={trans.name}              
                value={this.state.companyName.value}
                className={this.state.companyName.valid ? "is-valid" : "is-invalid"}
                name="companyName"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx" 
                required
              >
              <div className="valid-feedback">Looks good!</div>
             <div className="invalid-feedback">Provide a valid name!</div>
              </MDBInput>
              
            </MDBCol>
           <br/>
              
           <MDBCol>
               
               <MDBInput
                 value={this.state.companyTelephone.value}
                 name="companyTelephone"
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label={trans.telephone}
                 required
               >
               </MDBInput>
             </MDBCol>

            <br/>
            <MDBCol>
              <MDBInput
                value={this.state.companyAddress.value}
                className={this.state.companyAddress.valid ? "is-valid" : "is-invalid"}
                name="companyAddress"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label={trans.address}
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid Address!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
            

            
          <MDBCol>
        <div className="form-group">
            <label htmlFor="companyGovernorate">{trans.governorate}</label>
            <select className="form-control" 
            //className={this.state.companyGovernorate.valid ? "is-valid" : "is-invalid"} 
            id="exampleFormControlSelect1" name="companyGovernorate"
                onChange={this.changeHandler} 
                value={this.state.companyGovernorate.value}  >
              <option>Alexandria</option>
              <option>Cairo</option>
              <option>Portsaid</option>
              <option>Suez</option>
            </select>
          </div>
          </MDBCol>


          <MDBCol>
        <div className="form-group">
            <label htmlFor="companyCity">{trans.city}</label>
            <select className="form-control" id="exampleFormControlSelect1" name="companyCity"
                onChange={this.changeHandler} value={this.state.companyCity.value}>
              <option>Agamy</option> 
              <option>Bahary</option>
              <option>Maamora</option>
              <option>Montazah</option>
              <option>Sidi Gaber</option>
              <option>Stanly</option>

              <option>Agouza</option>
              <option>Dokki</option>
              <option>El-Sheikh Zayed</option>
              <option>Giza</option>
              <option>Heliopolis</option>
              <option>Maadi</option>
              <option>Nasr City</option>
              <option>New Cairo</option>

              <option>Al Arab District</option>
              <option>Al Dawahy District</option>
              <option>Al Manakh District</option>
              <option>Al Sharq District</option>
              <option>Al Zohour District</option>
              <option>Portfouad</option>

              <option>Al Salam</option>

            </select>
          </div>
          </MDBCol>


        
               <br/>

               <MDBCol>
              <div className="form-group">
                  <label htmlFor="currency">{trans.currency}</label>
                  <select className="form-control"  
                  id="exampleFormControlSelect1" name="currency"
                      onChange={this.changeHandler} 
                      value={this.state.currency.value}  >
                    <option>Euro</option>
                    <option>Egp</option>
                    <option>Pound</option>
                    <option>Franc</option>
                    <option>SA</option>
                    <option>U.D</option>
                    <option>U.S</option>
                    <option>Yen</option>
                  </select>
                </div>
              </MDBCol>
              </MDBRow>
              <br/>

              <MDBRow>
               <br/>
               <MDBCol>

                <MDBInput
                  value={this.state.companyFax.value}
                  name="companyFax"
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterNameEx"
                  label={trans.fax}
                  required
                >
                </MDBInput>
                </MDBCol>
               <MDBCol>              
               <MDBInput
                 value={this.state.companyNameInEnglish.value}
                 name="companyNameInEnglish"
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label={trans.nameInEnglish}
                 required
               >
               </MDBInput>
               </MDBCol>

                <br/>

               <MDBCol>              
               <MDBInput
                 value={this.state.equityCapital.value}
                 className={this.state.equityCapital.valid ? "is-valid" : "is-invalid"}
                 name="equityCapital"
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label={trans.capital}
                 required
               >
                 <div className="valid-feedback">Looks good!</div>
                 <div className="invalid-feedback">Provide a valid equity!</div>
               </MDBInput>
               </MDBCol>
               </MDBRow>
               <MDBRow>
               <MDBCol>
              <MDBInput
                label={trans.managerName}              
                value={this.state.SSCManagerName.value}
                className={this.state.SSCManagerName.valid ? "is-valid" : "is-invalid"}
                name="SSCManagerName"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx" 
                required
              >
              <div className="valid-feedback">Looks good!</div>
             <div className="invalid-feedback">Provide a valid name!</div>
              </MDBInput>
              
            </MDBCol>
           <br/>
              
           <MDBCol>
               
           <MDBInput
           label={trans.managerType}                
           value={this.state.SSCManagerType.value}
           className={this.state.SSCManagerType.valid ? "is-valid" : "is-invalid"}
           name="SSCManagerType"
           onChange={this.changeHandler}
           type="text"
           id="materialFormRegisterNameEx" 
           required
         >
         <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Provide a valid type!</div>
         </MDBInput>
             </MDBCol>
             

            <br/>
            <MDBCol>
              <MDBInput
                value={this.state.SSCManagerGender.value}
                className={this.state.SSCManagerGender.valid ? "is-valid" : "is-invalid"}
                name={trans.managerGender}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="Manager gender"
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid gender!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
               <MDBCol>
              <MDBInput
                label={trans.managerNationality}               
                value={this.state.SSCManagerNationality.value}
                className={this.state.SSCManagerNationality.valid ? "is-valid" : "is-invalid"}
                name="SSCManagerNationality"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx" 
                required
              >
              <div className="valid-feedback">Looks good!</div>
             <div className="invalid-feedback">Provide a valid nationality!</div>
              </MDBInput>
              
            </MDBCol>
           <br/>
              
           <MDBCol>
               
           <MDBInput
           label={trans.managerIdentityType}              
           value={this.state.SSCManagerIdentificationType.value}
           className={this.state.SSCManagerIdentificationType.valid ? "is-valid" : "is-invalid"}
           name="SSCManagerIdentificationType"
           onChange={this.changeHandler}
           type="text"
           id="materialFormRegisterNameEx" 
           required
         >
         <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Provide a valid Identification type!</div>
         </MDBInput>
             </MDBCol>

            <br/>
            <MDBCol>
              <MDBInput
                value={this.state.SSCManagerIdentificationNumber.value}
                className={this.state.SSCManagerIdentificationNumber.valid ? "is-valid" : "is-invalid"}
                name="SSCManagerIdentificationNumber"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label={trans.managerIdentityNumber}
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid Identification number!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
               <MDBCol>
              <MDBInput
                label={trans.birthdate}             
                value={this.state.SSCManagerBirthdate.value}
                className={this.state.SSCManagerBirthdate.valid ? "is-valid" : "is-invalid"}
                name="SSCManagerBirthdate"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx" 
                required
              >
              <div className="valid-feedback">Looks good!</div>
             <div className="invalid-feedback">Provide a valid date!</div>
              </MDBInput>
              
            </MDBCol>
           <br/>
              
           <MDBCol>
               
           <MDBInput
           label={trans.managerAddress}            
           value={this.state.SSCManagerAddress.value}
           className={this.state.SSCManagerAddress.valid ? "is-valid" : "is-invalid"}
           name="SSCManagerAddress"
           onChange={this.changeHandler}
           type="text"
           id="materialFormRegisterNameEx" 
           required
         >
         <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Provide a valid Address!</div>
         </MDBInput>
             </MDBCol>

            <br/>
            <MDBCol>
              <MDBInput
                value={this.state.typeOfManagers.value}
                className={this.state.typeOfManagers.valid ? "is-valid" : "is-invalid"}
                name="typeOfManagers"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label={trans.managerialType}
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid type!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
               <RaisedButton label={trans.button} primary={true} style={style}
               disabled={!this.validateForm()}
               onClick={(event) => (this.handleClick(event) , alert('SSCForm Created Succesfully'))}/>
           </div>
           </MuiThemeProvider>
        </div>
      );
    }
  }
  const style = {
   margin: 15,
  };

  

ReactDOM.render(<SSCForm />, document.getElementById('root'));


export default SSCForm;