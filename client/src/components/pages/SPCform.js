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

class SPCform extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // userId: {
            //   value : '',
            //  },
            companyName:'',
            companyGovernorate:'',
            companyAddress:'',
            companyCity:'' ,
            companyTelephone: '',
            companyFax: '',
            companyNameInEnglish: '',
            currency: '',
            type:'',
            equityCapital:'',
            governorate:[],
            cities:[]

        };
        
    }
    componentDidMount(){
      axios.get('http://localhost:5000/routes/api/governorates/')        
      .then(res => {
            this.setState({governorate: res.data.data})
            
        })}
        
        tabRow(){
          return this.state.governorate.map(function(gov,i){
              return <option>key={i} ><h6>{gov}</h6></option>
              
          });
        }
    
    
      handleClick(event){

        var apiBaseUrl = "http://localhost:5000/routes/api/users/CreatingForm/" + mongoose.Types.ObjectId('5ca7b4748be2725704f230bc');
        var payload={
         //"userId":mongoose.Types.ObjectId('5ca7b4748be2725704f230bc'),
          "companyName": this.state.companyName,
          "companyGovernorate": this.state.companyGovernorate,
          "companyAddress": this.state.companyAddress,
          "companyCity": this.state.companyCity,
          "companyTelephone": this.state.companyTelephone,
          "companyFax": this.state.companyFax,
          "companyNameInEnglish": this.state.companyNameInEnglish,
          "currency": this.state.currency,
          "type" : 'SPCForm',
          "equityCapital" : this.state.equityCapital,
          "lawyerComments" : [],
          "reviewerComments" : [],
          "creationDate": "2018-4-7",
          "status" : "Unassigned"
        }
        
        axios.post(apiBaseUrl, payload)
       .then(function (response) {
         console.log(response);
         if(response.data.code === 200){
          alert('SPCForm Created Succesfully') ;
         }
       })
       .catch(function (error) {
         alert('Something is wrong with your entries.Please check the constraints on each field again');
       });
      }
      
      changeHandler = event => {
        
          this.setState({ [event.target.name] :event.target.value});
      
      };
      validateForm() {
        return this.state.companyName.length >=3 &&
        this.state.companyName.length <=50 
        && this.state.companyAddress.length >=5 && this.state.companyAddress.length <=50
        && this.state.companyNameInEnglish.length <=50
        }

    render() {
      return (
        <div>
          <MuiThemeProvider>
            <div>
            <AppBar
               title="Create your SPCForm"
               />
               
               <br/>
               <MDBRow>
               <MDBCol>
              <MDBInput
                label="Company Name"                
                value={this.state.companyName}
                className={this.state.companyName.length >=3 &&this.state.companyName.length <=50 ? "is-valid" : "is-invalid"}
                name="companyName"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx" 
                required
              >
              <div className="valid-feedback">Looks good!</div>
             <div className="invalid-feedback">name must be in arabic and min 3 characters!</div>
              </MDBInput>
              
            </MDBCol>
           <br/>
              
           <MDBCol>
               
               <MDBInput
                 value={this.state.companyTelephone}
                 className={this.state.companyTelephone.length<=15 && 
                  this.state.companyTelephone.length>=8?"is-valid" : "is-invalid"}
                 name="companyTelephone"
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label="Company Telephone"
       
               >
                <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be more than or equal 8 
              characters and less than or equal 15 characters</div>
               </MDBInput>
             </MDBCol>

            <br/>
            <MDBCol>
              <MDBInput
                value={this.state.companyAddress}
                className={this.state.companyAddress.length<=50 && 
                  this.state.companyAddress.length>=5?"is-valid" : "is-invalid"}
                name="companyAddress"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="Company Address"
                required
              >
                 <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be more than or equal 5 characters 
              and less than or equal 50 characters</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
            

            
          <MDBCol>
        <div className="form-group">
            <label htmlFor="companyGovernorate">Company Governorate</label>
            <select className="form-control" 
            //className={this.state.companyGovernorate.valid ? "is-valid" : "is-invalid"} 
            id="exampleFormControlSelect1" name="companyGovernorate"
                onChange={this.changeHandler} 
                value={this.state.companyGovernorate}  >
              {this.tabRow()}
            </select>
          </div>
          </MDBCol>


          <MDBCol>
        <div className="form-group">
            <label htmlFor="companyCity">Company City</label>
            <select className="form-control" id="exampleFormControlSelect1" name="companyCity"
                onChange={this.changeHandler} value={this.state.companyCity}>
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
                  <label htmlFor="currency">Currency</label>
                  <select className="form-control"  
                  id="exampleFormControlSelect1" name="currency"
                      onChange={this.changeHandler} 
                      value={this.state.currency}  >
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
                  value={this.state.companyFax}
                  name="companyFax"
                  className={this.state.companyFax.length<=20 && this.state.companyFax.length>=5?"is-valid" : "is-invalid"}
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterNameEx"
                  label="Company Fax"
                  required
                >
                <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be more than or equal 5 
              characters and less than or equal 20 characters</div>
                </MDBInput>
                </MDBCol>
               <MDBCol>              
               <MDBInput
                 value={this.state.companyNameInEnglish}
                 className={this.state.companyNameInEnglish.length<=50?"is-valid" : "is-invalid"}
                 name="companyNameInEnglish"
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label="Company Name In English"
                 required
               >
                <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Note: It should be less than or equal 50 characters</div>
               </MDBInput>
               </MDBCol>

                <br/>

               <MDBCol>              
               <MDBInput
                 value={this.state.equityCapital}
                 className={this.state.equityCapital<100000?"is-valid" : "is-valid"}
                 name="equityCapital"
                 onChange={this.changeHandler}
                 type="text"
                 id="materialFormRegisterNameEx"
                 label="Equity Capital"
                 required
               >
                 <div className="valid-feedback">Note: if you are not Egyptian,
                  the equity capital should be more than or equal 10000</div>
               </MDBInput>
               </MDBCol>
               </MDBRow>

               <RaisedButton label="Submit" primary={true} style={style}
               disabled={!this.validateForm()}
               onClick={(event) => (this.handleClick(event) , alert('SPCForm Created Succesfully'))}/>
           </div>
           </MuiThemeProvider>
        </div>
      );
    }
  }
  const style = {
   margin: 15,
  };

  

ReactDOM.render(<SPCform />, document.getElementById('root'));


export default SPCform;

