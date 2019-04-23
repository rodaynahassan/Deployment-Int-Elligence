import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import Footer from '../layout/footer';
import ReactDOM from 'react-dom';
import axios from "axios";
import {Badge,ListGroup} from 'react-bootstrap'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Button } from 'mdbreact';
import { red100 } from 'material-ui/styles/colors';
import { blue100 } from 'material-ui/styles/colors';
import { blue200 } from 'material-ui/styles/colors';

class AdminProfile extends Component{

    constructor(props){
        super(props);
        this.state = {
            adminName: '',
            adminGender: '',
            adminNationality:'',
            adminIdentificationType:'',
            adminIdentificationNumber:'',
            adminBirthdate:'',
            adminAddress:'',
            adminEmail:'',
            adminTelephone:'',
            adminFax:''
       };

       axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
       axios.get('http://localhost:5000/routes/api/admins/CertainAttributes',{headers: { "Authorization": localStorage.getItem('jwtToken') }})
           .then(response => {
             this.setState({ 
                 adminName: response.data.Username, 
                 adminGender: response.data.Gender,
                 adminNationality: response.data.Nationality,
                 adminIdentificationType: response.data.IdentificationType,
                 adminIdentificationNumber: response.data.IdentificationNumber,
                 adminBirthdate: response.data.Birthdate,
                 adminAddress: response.data.Address,
                 adminEmail:response.data.Email,
                 adminTelephone: response.data.Telephone,
                 adminFax: response.data.Fax
             });
             
           })
    }

    render()
    {  
        var Admin = (
            <div>
                <br/> 
                <br/> 
                <br/>
            <div class="container emp-profile">
            <form method="post">
            <div class="row">
                <div class="col-md-6">
                <div class="container" >
                <div class="jumbotron" style={{width:"300px",height:"130px",paddingTop:"10px"}}>
                    <h3> <i className="far fa-user" style={{color:blue200}}/> {this.state.adminName}</h3>
                    <h4> <i className="fas fa-at" style={{color:blue200}}/> {this.state.adminEmail}</h4>
    
                </div>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>                
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                        <label><i class="fas fa-venus-mars" style={{color:blue200}}/> Gender</label>
                                        </div>
                                        <div class="col-md-6">
                                        <p>{this.state.adminGender}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <label><i class="fas fa-birthday-cake" style={{color:blue200}}/> Birthdate</label>
                                        </div>
                                        <div class="col-md-6">
                                        <p>{this.state.adminBirthdate}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label><i className="fas fa-globe" style={{color:blue200}}/> Nationality</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.adminNationality}</p>
                                        </div>
                                    </div>
                                    <div class="row" >
                                        <div class="col-md-6">
                                        <label><i className="fas fa-id-badge" style={{color:blue200}}/> Identification Type</label>
                                        </div>
                                        <div class="col-md-6">
                                        <p>{this.state.adminIdentificationType}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <label><i class="fas fa-sort-numeric-down" style={{color:blue200}}/> Identification Number</label>
                                        </div>
                                        <div class="col-md-6">
                                        <p>{this.state.adminIdentificationNumber}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <label><i class="fas fa-map-marked-alt" style={{color:blue200}}/> Address</label>
                                        </div>
                                        <div class="col-md-6">
                                        <p>{this.state.adminAddress}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <label><i class="fas fa-phone" style={{color:blue200}}/> Telephone</label>
                                        </div>
                                        <div class="col-md-6">
                                        <p>{this.state.adminTelephone}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <label><i class="fas fa-fax" style={{color:blue200}}/> Fax</label>
                                        </div>
                                        <div class="col-md-6">
                                        <p>{this.state.adminFax}</p>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>           
    </div>
            
</div>
        );
    

        return(
            <div style={{ paddingLeft:'60px',justifyItems:"center"}}>
            
            {localStorage.getItem('type')==='Admin'? Admin:null}
          </div>
        );
    }
}

ReactDOM.render(<AdminProfile />, document.getElementById('root'));
export default AdminProfile

