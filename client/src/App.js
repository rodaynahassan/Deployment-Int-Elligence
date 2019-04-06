import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Redirect } from 'react-router-dom'
import Form from './components/form/form.js';
import Footer from './components/layout/footer.js';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './components/pages/aboutContactUsPage'
import Investor from './components/pages/investorPage'
import Lawyer from './components/pages/lawyerPage'
import Reviewer from './components/pages/reviewerPage'
import Profile from './components/pages/profilePage'
import Footerr from './components/layout/footerrr'
import './App.css';

class App extends Component {

constructor(){
  super()
}

  // {/* <Dropdown>
  //       <Dropdown.Toggle variant="success" id="dropdown-basic" >
  //         Choose Your Form
  //         </Dropdown.Toggle>

  //       <Dropdown.Menu>
  //         <Dropdown.Item href="#/action-1">SSCForm
  //         </Dropdown.Item>
  //         <Dropdown.Divider />
  //         <Dropdown.Item href="#/action-2">SPCForm
  //         </Dropdown.Item>
  //         <Dropdown.Divider />
  //         <Dropdown.Item href="#/action-3">Other Forms
  //         </Dropdown.Item>
  //         <Dropdown.Divider />
  //       </Dropdown.Menu>
  //    </Dropdown>; */}

 
  render() {
    return (
      <Router>
      <div>  
          <Route exact path="/"  />
          <Route path='/Form' component={Form}/>
          <Route path='/About' component={About}/>
          <Route path='/Lawyer' component={Lawyer}/>
          <Route path='/Investor' component={Investor}/>
          <Route path='/Reviewer' component={Reviewer}/>
          <Route path='/Profile' component={Profile}/>
          <Route path='/Footerr' component={Footerr}/>
    </div>
    {/* <Footer /> */}
    </Router>
//         {this.renderRedirectSSC()}
//         {this.renderRedirectSPC()}
//           <form className="form">
//           <Button variant="primary" size="sm" onClick={this.setRedirectSSC}>
//           SSCForm
//           </Button>
//           <Button variant="primary" size="sm" onClick={this.setRedirectSPC}>
//           SPCForm
//           </Button>
//           </form>
//        
     );
   }
 }

 ReactDOM.render(<App />, document.getElementById('root'));
export default App;
