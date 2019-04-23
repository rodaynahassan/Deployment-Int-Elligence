import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import Footer from './footer';
import ReactDOM from 'react-dom';
import axios from "axios";
import {Badge,ListGroup} from 'react-bootstrap'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Button } from 'mdbreact';
import { red100 } from 'material-ui/styles/colors';
import { blue100 } from 'material-ui/styles/colors';
import { blue200 } from 'material-ui/styles/colors';
import berry from '../layout/berry.png'
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'
var $ = require("jquery")(window);

class NewNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            formTypes:[],
            formType:'',
            formTypeArrays:[]
        }
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken')
        axios.get('http://localhost:5000/routes/api/formTypes/getAllFormTypes/',{headers: { "Authorization": localStorage.getItem('jwtToken') }})        
          .then(res => {
                this.setState({formTypes: res.data.data})
              })
        axios.get('http://localhost:5000/routes/api/formTypes/getAllFormTypeArrays/',{headers: { "Authorization": localStorage.getItem('jwtToken') }})        
        .then(res => {
              this.setState({formTypeArrays: res.data.data})
            })
        
    }
    logOut(){
        localStorage.setItem('isLoggedIn','false')
        localStorage.setItem('jwtToken','')
        localStorage.setItem('type','')
        document.location.href='/'
    }
     
    changeHandler = event => {
        
        this.setState({ [event.target.name] :event.target.value});
        localStorage.setItem('formType',event.target.value)
       // console.log(event.target.name)
      //  console.log(event.target.value)
        document.location.href='/createNewForm'
    };

    changeHandler2 = event => {
        
        this.setState({ [event.target.name] :event.target.value});
        localStorage.setItem('formTypeArray',event.target.value)
       // console.log(event.target.name)
       // console.log(event.target.value)
        document.location.href='/attributeInArray'
    };
     
    render()
    { 

        
        var Investor = (
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark"style={{position:"absolute",padding:"0.5px",listStyle: "none", margin:" 0 auto",left:"0" ,top: "0",zIndex:"1",width:"100%"}}>
                <img src={berry} width="80" style={{color:blue100}} alt=""></img>
                    <ul class="navbar-nav nav-fill w-100">
                        <li class="nav-item" color="white" >
                            <a class="nav-link" className="fa fa-home" href='/' title="Home" style={{color:blue100,paddingTop:"15px" , fontSize:"1.5em"}} ></a>
                        </li>
                        <li class="nav-item" color="white" >
                            <a class="nav-link" className="fa fa-user" href='/profile' title="Profile" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                        </li>
                        <li class="nav-item" color="white" >
                            <a class="nav-link" className="fas fa-newspaper" href='/journal' title="Electronic Journal" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                        </li>
                        <li class="nav-item" color="white" >
                            <a class="nav-link" className="fa fa-info-circle" href='/aboutContactUsPage' title="About us" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                        </li>
                        <li class="nav-item dropdown" >
                        <Dropdown >
                            <Dropdown.Toggle title= "Language" variant="omar" id="dropdown-basic"  >
                            <i className="fas fa-language"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>this.props.changelang('en')} style={{textAlign:'left',color:blue200}}> English</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={()=>this.props.changelang('ar')} style={{textAlign:'left',color:blue200}}> Arabic</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li class="nav-item dropdown" >
                        <select className="form-control"  
                        id="exampleFormControlSelect1" name="ali"
                        onChange={this.changeHandler}
                        value={this.state.formType}
                      >
                        <option>Choose a form type</option>
                        {this.state.formTypes.map((city)=>(
                        <option value={city}>{city}</option>
                        ))};    
                        </select>
                        </li>
                        <li class="nav-item dropdown" >
                        <select className="form-control"  
                        id="exampleFormControlSelect1" name="ali"
                        onChange={this.changeHandler2}
                        value={this.state.formTypeArrays}
                      >
                        <option>Choose an array</option>
                        {this.state.formTypeArrays.map((city)=>(
                        <option value={city}>{city}</option>
                        ))};    
                        </select>
                        </li>
                        <li class="nav-item dropdown" >
                        <Dropdown >
                        <Dropdown.Toggle title= "Your Forms" variant="omar" id="dropdown-basic"  >
                                <i className="fa fa-fw fa-list-alt"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href='/approvedCompanies' style={{textAlign:'left',color:blue200}}> Show Approved Companies</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href='/investorInProgressform'style={{textAlign:'left',color:'#3e484d'}} > Track your forms</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li class="nav-item dropdown">
                        <Dropdown >
                            <Dropdown.Toggle  title= "Settings" variant="omar" id="dropdown-basic"  >
                            <   i className="fas fa-cog"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href='/editprofile' style={{textAlign:'left',color:'#3e484d'}}> Edit your profile</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href='/changepassword'style={{textAlign:'left',color:'#3e484d'}}> Change your password</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={this.logOut} style={{textAlign:'left',color:'#3e484d'}}> Logout</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        );
        var Lawyer = (
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark"style={{position:"absolute",padding:"0.5px",listStyle: "none", margin:" 0 auto",left:"0" ,top: "0",zIndex:"1",width:"100%"}}>
                <img src={berry} width="80" style={{color:blue100}} alt=""></img>
                    <ul class="navbar-nav nav-fill w-100">
                
                        <li class="nav-item" color="white" >
                            <a class="nav-link" className="fa fa-home" href='/' title="Home" style={{color:blue100,paddingTop:"15px" , fontSize:"1.5em"}} ></a>
                        </li>
                        <li class="nav-item" color="white" >
                            <a class="nav-link" className="fa fa-user" href='/profile' title="Profile" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                        </li>
                        <li class="nav-item" color="white" >
                            <a class="nav-link" className="fas fa-newspaper" href='/journal' title="Electronic Journal" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                        </li>
                        <li class="nav-item" color="white" >
                            <a class="nav-link" className="fa fa-info-circle" href='/aboutContactUsPage' title="About us" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                        </li>
                        <li class="nav-item dropdown" >
                        <Dropdown >
                        <Dropdown.Toggle title= "Language" variant="omar" id="dropdown-basic"  >
                            <i className="fas fa-language"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>this.props.changelang('en')} style={{textAlign:'left',color:blue200}}> English</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={()=>this.props.changelang('ar')} style={{textAlign:'left',color:blue200}}> Arabic</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li class="nav-item dropdown">
                        <select className="form-control"  
                        id="exampleFormControlSelect1" name="ali"
                        onChange={this.changeHandler}
                        value={this.state.formType}
                      >
                      Create a new form
                        <option>Choose a form type</option>
                        {this.state.formTypes.map((city)=>(
                        <option value={city}>{city}</option>
                        ))};    
                        </select>
                        </li>
                        <li class="nav-item dropdown" >
                        <select className="form-control"  
                        id="exampleFormControlSelect1" name="ali"
                        onChange={this.changeHandler2}
                        value={this.state.formTypeArrays}
                      >
                        <option>Choose an array</option>
                        {this.state.formTypeArrays.map((city)=>(
                        <option value={city}>{city}</option>
                        ))};    
                        </select>
                        </li>
                        <li class="nav-item dropdown" >
                        <Dropdown >
                        <Dropdown.Toggle title= "Your Forms" variant="omar" id="dropdown-basic"  >
                                <i className="fa fa-fw fa-list-alt"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href='/approvedCompanies' style={{textAlign:'left',color:blue200}}> Show Approved Companies</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href='/getCaseLawyerSPC'style={{textAlign:'left',color:'#3e484d'}} > Track your forms</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href='/unassignedForm'style={{textAlign:'left',color:'#3e484d'}}> Pick a Task</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href='/getCaseLawyerSPC'style={{textAlign:'left',color:'#3e484d'}}> SPC cases</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li class="nav-item dropdown">
                        <Dropdown >
                            <Dropdown.Toggle title= "Settings" variant="omar" id="dropdown-basic"  >
                                <i className="fas fa-cog"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href='/editprofile' style={{textAlign:'left',color:'#3e484d'}}> Edit your profile</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href='/changepassword'style={{textAlign:'left',color:'#3e484d'}}> Change your password</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={this.logOut} style={{textAlign:'left',color:'#3e484d'}}> Logout</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        
                    </ul>
                </nav>
                <br/> 
                <br/>
                <br/>
            </div>

                
                );

        var Reviewer = (
            <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark"style={{position:"absolute",padding:"0.5px",listStyle: "none", margin:" 0 auto",left:"0" ,top: "0",zIndex:"1",width:"100%"}}>
            <img src={berry} width="80" alt=""></img>
                <ul class="navbar-nav nav-fill w-100">
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fa fa-home" href='/' title="Home" style={{color:blue100,paddingTop:"15px" , fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fa fa-user" href='/profile' title="Profile" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fas fa-newspaper" href='/journal' title="Electronic Journal" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fa fa-info-circle" href='/aboutContactUsPage' title="About us" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item dropdown" >
                        <Dropdown >
                            <Dropdown.Toggle title= "Language" variant="omar" id="dropdown-basic"  >
                                <i className="fas fa-language"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>this.props.changelang('en')} style={{textAlign:'left',color:blue200}}> English</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={()=>this.props.changelang('ar')} style={{textAlign:'left',color:blue200}}> Arabic</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    <li class="nav-item dropdown" >
                        <Dropdown >
                            <Dropdown.Toggle title= "Your Forms" variant="omar" id="dropdown-basic"  >
                                <i className="fa fa-fw fa-list-alt"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='/approvedCompanies' style={{textAlign:'left',color:'#3e484d'}}> Show Approved Companies</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href='/lawyerAcceptedForms'style={{textAlign:'left',color:'#3e484d'}}> Pick a Task</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href='/GetReviewer'style={{textAlign:'left',color:'#3e484d'}}> View your tasks</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item dropdown">
                        <Dropdown >
                            <Dropdown.Toggle title= "Settings" variant="omar" id="dropdown-basic"  >
                                <i className="fas fa-cog"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='/editprofile' style={{textAlign:'left',color:'#3e484d'}}> Edit your profile</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href='/changepassword'style={{textAlign:'left',color:'#3e484d'}}> Change your password</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={this.logOut} style={{textAlign:'left',color:'#3e484d'}}> Logout</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    
                </ul>
            </nav>
            <br/> 
            <br/>
            <br/>
        </div>
            
        );

        var admin = (
            <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark"style={{position:"absolute",padding:"0.5px",listStyle: "none", margin:" 0 auto",left:"0" ,top: "0",zIndex:"1",width:"100%"}}>
            <img src={berry} width="70" alt=""></img>
                <ul class="navbar-nav nav-fill w-100">
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fa fa-home" href='/' title="Home" style={{color:blue100,paddingTop:"15px" , fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fa fa-user" href='/profile' title="Profile" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fas fa-newspaper" href='/journal' title="Electronic Journal" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fa fa-info-circle" href='/aboutContactUsPage' title="About us" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fas fa-search" href='/companyName' title="Find a company" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item" color="white" >
                        <a class="nav-link" className="fas fa-sign-in-alt" href='/adminPage' title="Register a new lawyer or reviewer" style={{color:blue100,paddingTop:"15px", fontSize:"1.5em"}} ></a>
                    </li>
                    <li class="nav-item dropdown" >
                        <Dropdown >
                            <Dropdown.Toggle title= "Language" variant="omar" id="dropdown-basic"  >
                            <i className="fas fa-language"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>this.props.changelang('en')} style={{textAlign:'left',color:blue200}}> English</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={()=>this.props.changelang('ar')} style={{textAlign:'left',color:blue200}}> Arabic</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    <li class="nav-item dropdown">
                        <Dropdown >
                            <Dropdown.Toggle title= "Settings" variant="omar" id="dropdown-basic"  >
                                <i className="fas fa-cog"  style={{color:blue100,fontSize:"1.5em"}}></i>
                            </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='/editprofile' style={{textAlign:'left',color:blue200}}> Edit your profile</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href='/changepassword'style={{textAlign:'left',color:blue200}}> Change your password</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={this.logOut} style={{textAlign:'left',color:blue200}}> Logout</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                     </li>   
                </ul>
            </nav>
            <br/> 
            <br/>
            <br/>
        </div>
            
        );
    

        return(
            <div style={{ paddingLeft:'60px',justifyItems:"center"}}>
            {localStorage.getItem('type')==='Investor'? Investor:null}
           {localStorage.getItem('type')==='Lawyer'? Lawyer:null}
           {localStorage.getItem('type')==='Admin'? admin:null}
           {localStorage.getItem('type')==='Reviewer'? Reviewer:null}
          </div>
        );
    }
}

export default NewNavBar