import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import Footer from '../layout/footer';
import ReactDOM from 'react-dom';
import {Badge,ListGroup} from 'react-bootstrap'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Button } from 'mdbreact';


class Profile extends Component{

    constructor()
    {
        super();
    }


    render()
    {   
        var Investor = (
            <div>
            <Button href='/profileI'>Show Profile</Button>
            <Button href='/approvedCompanies'>Show Approved Companies</Button>
            <Button href='/showspcform'>Show Your SPC companies</Button>
            <Button href='/showsscform'>Show Your SSC companies</Button>
            <Button href='/form'>Create a company</Button>
            </div>
            
            );
        var Lawyer = (
                <div>
                <Button href='/profileLR'>Show Profile</Button>
                <Button href='/approvedCompanies'>Show Approved Companies</Button>
                <Button href='/getCaseLawyerSPC'>Show Your SPC companies</Button>
                <Button href='/getCaseLawyerSSC'>Show Your SSC companies</Button>
                <Button href='/unassignedForm'>Pick Task</Button>
                <Button href='/form'>Create a company</Button>
                
                </div>
                
                );

        var Reviewer = (
            <div>
            <Button href='/profileLR'>Show Profile</Button>
            <Button href='/approvedCompanies'>Show Approved Companies</Button>
            {/* <Button href='/caseSpecified'>Show cases specified</Button> */}
            <Button href='/lawyerAcceptedForms'>Pick Task</Button>
            <Button href='/GetReviewer'>view Task</Button>
            </div>
        );

        var admin = (
            <div>
            {/* <Button href='/approvedCompanies'>Show Approved Companies</Button> */}
            {/* <Button href='/caseSpecified'>Show cases specified</Button> */}
            {/* <Button href='/form'>Create a company</Button> */}
            <Button href='/companyName'>Search by Company Name</Button>
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

ReactDOM.render(<Profile />, document.getElementById('root'));
export default Profile