import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Redirect } from 'react-router-dom'
import Footer from '../layout/footer'


class form extends Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div>
      <div>
      <div>
       <Row >
       {/* <Col > 
       </Col> */}
       <Col > 
        <br> 
        </br>
        <br> 
        </br>
        <br> 
        </br>
        <br>
        </br>
        <br> 
        </br>
        <br> 
        </br>  
     <Dropdown>

        <Dropdown.Toggle variant="dark" id="dropdown-basic" align="middle" >
          Choose Your Form
          </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="http://www.google.com">
          SSCForm
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/SPC">
          SPCForm
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">
          Other Forms
          </Dropdown.Item>
          <Dropdown.Divider />
        </Dropdown.Menu> 
     </Dropdown>;
     </Col>
     {/* <Col >
     </Col> */}
     </Row>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
     </div>
    
    </div>
    <br />
    <br />
    </div>
    );
  }

}

export default form