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

class ChangePassword extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            newPassword:{value:'', valid:false},
            confirmPassword: {value:'',valid:false},
            
        }
        
    }
    
    
    handleClick(event){


 


        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
        var apiBaseUrl = "http://localhost:5000/routes/api/users/changePassword";
        var payload={
            "newPassword": this.state.newPassword.value,
            "confirmPassword":this.state.confirmPassword.value
          }
            
            axios.post(apiBaseUrl, payload,{headers: { "Authorization": localStorage.getItem('jwtToken') }})
           .then(function (response) {
             console.log(response);
             if(response.data.code === 200){
              alert('Password updated Succesfully') ;
             }
           })
           .catch(function (error) {
             console.log(error);
           });
          }
      
      changeHandler = event => {
        this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
      };
      validatePassword() {
        return this.state.newPassword.value.length >=8 && this.state.newPassword.value.length <=20
        && this.state.newPassword.value===this.state.confirmPassword.value
    }

    render() {
      return (
        <div>
          <MuiThemeProvider>
            <div>
            <AppBar title="Update your password"/>

               <br/>
               <MDBRow>
               <MDBCol>
              <MDBInput
                label="New Password"                
                value={this.state.newPassword.value}
                className={this.state.newPassword.valid?"is-valid" : "is-invalid"}
                name="newPassword"
                
                onChange={this.changeHandler}
                type="password"
                id="materialFormRegisterNameEx" 
                required
              >
                 <div className="valid-feedback">Note: It should be more than 8 characters and less than 20 characters</div>
                
              </MDBInput>
              </MDBCol>
              </MDBRow>
           <br/>
           <MDBRow>
               <MDBCol>
              <MDBInput
                label="Confirm Password"                
                value={this.state.confirmPassword.value}
                name="confirmPassword"
                onChange={this.changeHandler}
                type="password"
                id="materialFormRegisterNameEx" 
                required
              >

              </MDBInput>
              </MDBCol>
              </MDBRow>

              <RaisedButton label="Submit" primary={true} style={style}
               disabled={!this.validatePassword()}
               onClick={(event) => (this.handleClick(event) , alert('The password has been updated successfully'))}/>
           </div>
           </MuiThemeProvider>
        </div>
      );
    }
  }
  const style = {
   margin: 15,
  };

  

ReactDOM.render(<ChangePassword />, document.getElementById('root'));


export default ChangePassword;










