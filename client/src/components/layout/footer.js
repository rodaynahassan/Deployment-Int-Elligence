import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import { Link } from 'react-router';
import {Navbar} from 'react-bootstrap';
import {DropdownButton,Breadcrumb} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Nav, NavItem, NavDropdown} from  "react-bootstrap";
import {MenuItem} from 'react-bootstrap-dropdown-menu'
var Router = require('react-router');


var Navigation = require('react-router').Navigation;


class footer extends Component{

    constructor(){
        super()
      }

      state = {
          redirect :""
      }

      setRedirect = (x) =>{
          this.setState({
              redirect : x
          })
      }

      renderRedirect = ()=> {
          if(this.state.redirect ==='About')
          return <Redirect to ='/About'/>
      }

       
    //   <Navbar.Brand onClick={()=>this.setRedirect('About')}>About us</Navbar.Brand>
    //         {/* <Navbar.Brand onClick={()=>this.setRedirect('About')}>Contact us</Navbar.Brand> */}
    //         <Navbar.Toggle />

      render(){
          return (
            <Navbar bg="dark" variant="dark">
            {this.renderRedirect()}
            <Navbar.Brand >Sumerge</Navbar.Brand>
             
               <Navbar.Brand onClick={()=>this.setRedirect('About')}>About us</Navbar.Brand>
             {/* <Navbar.Brand onClick={()=>this.setRedirect('About')}>Contact us</Navbar.Brand> */}
            <Navbar.Toggle />

            
            
               <ButtonToolbar>
                {['up'].map(direction => (
                <DropdownButton
                    drop={direction}
                    variant="secondary"
                    title={'Contact us'}
                    id={`dropdown-button-drop-${direction}`}
                    key={direction}
                >
                    <Dropdown.Item eventKey="1">Email: info@sumerge.com</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Phone: +2 02 27545823</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Address: 75/77 Street 199,Maadi Cairo, Egypt</Dropdown.Item>
                    <Dropdown.Divider />
                    {/* <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
                </DropdownButton>
                ))}
            </ButtonToolbar>

            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Signed in as: <a href="#login">Name</a>
            <Navbar sticky="bottom" />
            </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>

           // className="nav-bar"
          // inverse collapseOnSelect 

        
           


          )
      }

    }

  export default footer