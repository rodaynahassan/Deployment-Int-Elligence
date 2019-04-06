import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import Footerr from '../layout/footerrr';
import ReactDOM from 'react-dom';
import {Badge,ListGroup} from 'react-bootstrap'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';


class Profile extends Component{

    constructor()
    {
        super();
    }


    render()
    {
        return(
          <div>
            
             <h1>
                Welcome to <Badge pill variant="dark">Your Profile</Badge>
            </h1>
             
            <ListGroup > 
            <ListGroup.Item action href="#link1" variant="dark">
            Notifications 
            </ListGroup.Item>
            <ListGroup.Item action href="#link2"  variant ="dark">
            My Info
            </ListGroup.Item>
            </ListGroup>
            
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footerr />
          </div>
        );
    }
}

ReactDOM.render(<Profile />, document.getElementById('root'));
export default Profile