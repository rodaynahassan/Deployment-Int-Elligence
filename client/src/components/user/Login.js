import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import UploadScreen from '../pages/UploadScreen'
const axios = require('axios');


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  password:''
  //fields:''
  }
 }
 validateForm() {
      //  let emailValid=email.match.('/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i')
      return this.state.email.length >= 3 && this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && this.state.email.length <= 50&& this.state.password.length >= 8 && this.state.password.length <= 20

 }

render() {

    return (
      <div>
        <MuiThemeProvider>
          <div>
          {/* <AppBar
             title="Login"
           /> */}
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Email"
             type="email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             
             <RaisedButton label="Sign in" primary={true} style={style} 
             disabled={!this.validateForm()}
             onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:5000/routes/api/users/";
    var self = this;
    var payload={

     
        // this.state.email.map(x => <li key={x._id}></li>
        //     this.state.password.map(x => <li key={x._id}></li>)}
    "email":this.state.email,
    "password":this.state.password

    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if(response.status === 200){
    console.log("Login successfull");
    alert("Login successfull");
    var uploadScreen=[];
    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else if(response.status === 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Email does not exist");
    alert("Email does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }
}
const style = {
 margin: 15,
};
export default Login;