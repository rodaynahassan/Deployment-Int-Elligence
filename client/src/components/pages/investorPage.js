import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import Form from '../form/form'
import Footerr from '../layout/footerrr'
import ReactDOM from 'react-dom';

class Investor extends Component {

    constructor(){
        super()
      }

    render (){
        return (   
         <div> 
         <Form />
         <br />
         <br />
         <Footerr />
         </div>
        )
    }

}
ReactDOM.render(<Investor />, document.getElementById('root'));
export default Investor
