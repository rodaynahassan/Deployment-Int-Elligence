import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import Footer from '../layout/footer'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';



class Reviewer extends Component {

    constructor(){
        super()
      }

    render (){
        return (

            <div>
            {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" media="all" />
            <DropdownMenu userName="Chris Smith">
            <MenuItem text="Home" location="/home" />
            <MenuItem text="Edit Profile" location="/profile" />
            <MenuItem text="Change Password" location="/change-password" />
            <MenuItem text="Privacy Settings" location="/privacy-settings" />
            <MenuItem text="Delete Account" onClick={this.deleteAccount} />
            <MenuItem text="Logout" onClick={this.logout} />
            </DropdownMenu> */}

            <Footer />
            </div>
        )
    }

}
export default Reviewer