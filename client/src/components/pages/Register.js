import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import Login from './Login';
import Badge from 'react-bootstrap/Badge'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';








class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      userType:'Investor',
      name:'',
      gender:'Male',
      nationality:'Egypt',
      identificationType:'National ID',
      identificationNumber:'',
      birthdate:'',
      address:'',
      email:'',
      password:'',
      telephone:'',
      fax:'',
      investorType:'Person'


    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  
  handleChange(event, index, newValue) {
    //set selection to the value selected
    
    this.setState({nationality:newValue})
    
  }
  handleChange1(event, index, newValue) {
    //set selection to the value selected
    
    this.setState({gender:newValue})
    
  }
  handleChange2(event, index, newValue) {
    //set selection to the value selected
   
    this.setState({investorType:newValue})

  }
  handleChange3(event, index, newValue) {
    //set selection to the value selected
 
    this.setState({investorType:newValue})

  }

  validateForm() {
    
    return this.state.email.length >= 3 && this.state.email.length <= 50 && this.state.password.length >= 8 && this.state.password.length <= 16
    && this.state.gender.length>=4 && this.state.gender.length<=6 &&  
    this.state.identificationNumber.length>=8 &&  this.state.identificationNumber.length<=50 && this.state.address.length>=5 && this.state.address.length<=50
    && this.state.telephone.length>=4 && this.state.telephone.length<=15 && this.state.fax.length>=5 &&
    this.state.fax.length<=20 && this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) 

  }

  handleClick(event){
    var apiBaseUrl = "http://localhost:5000/routes/api/users";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "userType":this.state.userType,
    "name": this.state.name,
    "gender": this.state.gender,
    "nationality":this.state.nationality,
    "identificationType":this.state.identificationType,
    "identificationNumber":this.state.identificationNumber,
    "birthdate":this.state.birthdate,
    "address":this.state.address,
    "email":this.state.email,
    "password":this.state.password,
    "telephone":this.state.telephone,
    "fax":this.state.fax,
    "investorType":this.state.investorType
    }

    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
      console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }






  
  render() {

    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           {/* <TextField
             hintText="Enter your Type"
             floatingLabelText="Investor Type"
             onChange = {(event,newValue) => this.setState({userType:newValue})}
             />
           <br/> */}
           <TextField
             
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           
           
           <br/>
          <br/>

           <InputLabel htmlFor="demo-controlled-open-select">Nationality</InputLabel>
           <br/>
           <DropDownMenu 
            value={this.state.nationality} 
            onChange={this.handleChange}
            //onChange = {(event,newValue) => this.setState({nationality:newValue})}  
          >
          
          <MenuItem value={"Egypt"} primaryText="Egypt"  />
          <MenuItem value={"Germany"} primaryText="Germany" />
          <MenuItem value={"France"} primaryText="France" />

        </DropDownMenu> 
        

           
            <br/>
           <br/>
           <InputLabel htmlFor="demo-controlled-open-select">Gender</InputLabel>
           <br/>
           <DropDownMenu 
            value={this.state.gender} 
            onChange={this.handleChange1}
            //onChange = {(event,newValue) => this.setState({nationality:newValue})}  
          >
          
          <MenuItem value={"Male"} primaryText="Male"  />
          <MenuItem value={"Female"} primaryText="Female" />
          

        </DropDownMenu> 
        
            <br/>
           <br/>
           <InputLabel htmlFor="demo-controlled-open-select">Identification Type</InputLabel>
           <br/>
           <DropDownMenu 
            value={this.state.identificationType} 
            onChange={this.handleChange2}
            //onChange = {(event,newValue) => this.setState({nationality:newValue})}  
          >
          
          <MenuItem value={"National ID"} primaryText="National ID"  />
          <MenuItem value={"Passport"} primaryText="Passport" />
          

        </DropDownMenu> 
           <br/>

           <TextField
             hintText="Enter your Identification Number"
             floatingLabelText="Identification Number"
             onChange = {(event,newValue) => this.setState({identificationNumber:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Birthdate"
             floatingLabelText="Birthdate"
             onChange = {(event,newValue) => this.setState({birthdate:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Address"
             floatingLabelText="Address"
             onChange = {(event,newValue) => this.setState({address:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Telephone"
             floatingLabelText="Telephone"
             onChange = {(event,newValue) => this.setState({telephone:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Fax"
             floatingLabelText="Fax"
             onChange = {(event,newValue) => this.setState({fax:newValue})}
             />
           <br/>
           <br/>
           <br/>
           <InputLabel htmlFor="demo-controlled-open-select">Investor Type</InputLabel>
           <br/>
           <DropDownMenu 
            value={this.state.investorType} 
            onChange={this.handleChange3}
            //onChange = {(event,newValue) => this.setState({nationality:newValue})}  
          >
          
          <MenuItem value={"Person"} primaryText="Person"  />
          
          

        </DropDownMenu> 
           <br/>
           <RaisedButton label="Submit" 
           primary={true} 
           style={style} 
           disabled={!this.validateForm()}
           onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;