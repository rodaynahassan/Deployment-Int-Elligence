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

var mongoose = require('mongoose')

class EditProfile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            gender: '',
            nationality:'',
            identificationType:'',
            identificationNumber:'',
            birthdate:'',
            address:'',
            email:'',
            telephone:'',
            fax:''
       };

      axios.get('http://localhost:5000/routes/api/users/CertainAttributes/5caf48d59197285f9c7587a2')
          .then(response => {
                    
              this.setState({ 
                name: response.data.Username, 
                gender: response.data.Gender,
                nationality: response.data.Nationality,
                identificationType: response.data.IdentificationType,
                identificationNumber: response.data.IdentificationNumber,
                birthdate: response.data.Birthdate,
                address: response.data.Address,
                email:response.data.Email,
                telephone: response.data.Telephone,
                fax: response.data.Fax
            });
            
          })
      
    }
    
    
    handleClick(error) {
        error.preventDefault();
        const obj = {
          name: this.state.name,
          gender: this.state.gender,
          nationality: this.state.nationality,
          identificationType: this.state.identificationType,
          identificationNumber: this.state.identificationNumber,
          birthdate: this.state.birthdate,
          address: this.state.address,
          telephone: this.state.telephone,
          fax: this.state.fax
        };
        var apiBaseUrl = "http://localhost:5000/routes/api/users/5caf48d59197285f9c7587a2";
            var payload={
              "name": this.state.name,
              "gender": this.state.gender,
              "nationality": this.state.nationality,
              "identificationType": this.state.identificationType,
              "identificationNumber": this.state.identificationNumber,
              "birthdate": this.state.birthdate,
              "address": this.state.address,
              "telephone" : this.state.telephone,
              "fax" : this.state.fax
            }
            
            axios.put(apiBaseUrl, payload)
           .then(function (response) {
             console.log(response);
             if(response.data.code === 200){
              alert('Your profile has been updated successfully') ;
             }
           })
           .catch(function (error) {
            alert('Something is wrong with your entries.Please check the constraints on each field again');     
               });
        
      }
      
      changeHandler = event => {
        this.setState({ [event.target.name]:  event.target.value });
      };
      validateForm() {
        return this.state.name.length >=3 && this.state.name.length <=50 
        && this.state.identificationType.length >=8 && this.state.identificationType.length <=20
        && this.state.identificationNumber.length >=8 && this.state.identificationNumber.length <=50
        && this.state.address.length >=5 && this.state.address.length <=50
        && this.state.email.length >=3 && this.state.email.length <=254
    }

    render() {
      return (
        <div>
          <MuiThemeProvider>
            <div>
            <AppBar
               title="Update your profile"
             />
               <br/>
               <MDBRow>
               <MDBCol>
              <MDBInput
                label="Name"                
                value={this.state.name}
                name="name"
                className={this.state.name.length>=3 && this.state.name.length <=50 ?"is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx" 
                required
              >
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be more than or equal 3 characters and less than or equal 50 characters</div> 
            </MDBInput>
            </MDBCol>
            </MDBRow>
           <br/>

           <MDBRow>
           <MDBCol>
           <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-control" 
            id="exampleFormControlSelect1" name="gender"
                onChange={this.changeHandler} 
                value={this.state.gender}  >
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
             </MDBCol>
             </MDBRow>
            <br/>
           
            <MDBRow>
            <MDBCol>
            
              <MDBInput
                value={this.state.nationality}
                name="nationality"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="Nationality"
                required
              >
               
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>


            <MDBRow>
            

            
          <MDBCol>
          <MDBInput
                 value={this.state.identificationType}
                 name="identificationType"
                 className={this.state.identificationType.length<=20 && this.state.identificationType.length>=8?"is-valid" : "is-invalid"}
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label="Identification Type"
                 required
               >
               <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be more than or equal 8 characters and less than or equal 20 characters</div>
                </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>


            <MDBRow>
     
            <MDBCol>
            <MDBInput
                 value={this.state.identificationNumber}
                 name="identificationNumber"
                 className={this.state.identificationNumber.length<=50 && this.state.identificationNumber.length>=5?"is-valid" : "is-invalid"}
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label="Identification Number"
                 required
               >
               <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be more than or equal 5 characters and less than or equal 50 characters</div>
               </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
     
     <MDBCol>
     <MDBInput
                  value={this.state.birthdate}
                  name="birthdate"
                  className={this.state.birthdate.length>0?"is-valid" : "is-valid"}
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterNameEx"
                  label="Birthdate"
                  required
                >
                <div className="valid-feedback">It should be in the format of: YYYY-MM-DD</div>
                </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
     
     <MDBCol>
     <MDBInput
                  value={this.state.email}
                  name="email"
                  className={this.state.email.length>=3 && this.state.email.length<=254?"is-valid" : "is-valid"}
                  onChange={this.changeHandler}
                  type="email"
                  id="materialFormRegisterNameEx"
                  label="Label"
                  required
                >
                <div className="valid-feedback">Looks Good!</div>
                <div className="invalid-feedback">Note: It should be more than or equal 3 characters and less than or equal 254 characters</div>

                </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
            <MDBCol>
            <MDBInput
                 value={this.state.address}
                 name="companyNameInEnglish"
                 className={this.state.address.length<=50 && this.state.address.length>=5?"is-valid" : "is-invalid"}
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label="Address"
                 required
               >
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>

            <MDBRow>
            <MDBCol>
            <MDBInput
                 value={this.state.telephone}
                 
                 name="telephone"
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label="Telephone"
                 required
               >
                <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be more than or equal 8 characters and less than or equal 15 characters</div>
                 </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
     
     <MDBCol>
     <MDBInput
                label="Fax"                
                value={this.state.fax}
                
                name="fax"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx" 
                required
              >
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be more than or equal 5 characters and less than or equal 20 characters</div>
             </MDBInput>
            </MDBCol>
            </MDBRow>

               
           
            
               <RaisedButton label="Submit" primary={true} style={style}
               disabled={!this.validateForm()}
               onClick={(event) => (this.handleClick(event) , alert('SSCForm Updated Succesfully'))}/>
           </div>
           </MuiThemeProvider>
        </div>
      );
    }
  }
  const style = {
   margin: 15,
  };

  

ReactDOM.render(<EditProfile />, document.getElementById('root'));


export default EditProfile;