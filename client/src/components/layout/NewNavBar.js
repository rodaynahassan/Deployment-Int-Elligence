import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import Footer from './footer';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Badge, ListGroup } from 'react-bootstrap';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Button } from 'mdbreact';
import { red100 } from 'material-ui/styles/colors';
import { blue100 } from 'material-ui/styles/colors';
import { blue200 } from 'material-ui/styles/colors';
import berry from '../layout/berry.png';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var $ = require('jquery')(window);

class NewNavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formTypes: [],
			formType: '',
<<<<<<< HEAD
			formTypeArrays: [],
			formTypeArray:''
=======
			formTypeArrays: []
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		};
	}
	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/formTypes/getAllFormTypes/', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				this.setState({ formTypes: res.data.data });
			})
			.catch((err) => {});
		axios
			.get('/routes/api/formTypes/getAllFormTypeArrays/', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				this.setState({ formTypeArrays: res.data.data });
			})
			.catch((err) => {});
	}
	logOut() {
		localStorage.setItem('isLoggedIn', 'false');
		localStorage.setItem('jwtToken', '');
		localStorage.setItem('type', '');
		document.location.href = '/';
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		localStorage.setItem('formType', event.target.value);
<<<<<<< HEAD
		document.location.href = '/createANewCompany';
=======
		// console.log(event.target.name)
		//  console.log(event.target.value)
		document.location.href = '/createNewForm';
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
	};

	changeHandler2 = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		localStorage.setItem('formTypeArray', event.target.value);
<<<<<<< HEAD
=======
		// console.log(event.target.name)
		// console.log(event.target.value)
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		document.location.href = '/attributeInArray';
	};

	render() {
<<<<<<< HEAD
		var currentLocation = window.location.pathname;
=======
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		var Investor = (
			<div>
				<nav
					class="navbar navbar-expand-sm bg-dark navbar-dark"
					style={{
<<<<<<< HEAD
						position: 'fixed',
=======
						position: 'absolute',
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
						padding: '0.5px',
						listStyle: 'none',
						margin: ' 0 auto',
						left: '0',
						top: '0',
						zIndex: '1',
						width: '100%'
					}}
				>
					<img src={berry} width="80" style={{ color: blue100 }} alt="" />
					<ul class="navbar-nav nav-fill w-100">
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-home"
								href="/"
								title="Home"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-user"
								href="/profile"
								title="Profile"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fas fa-newspaper"
								href="/journal"
								title="Electronic Journal"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-info-circle"
<<<<<<< HEAD
								href="/about"
=======
								href="/aboutContactUsPage"
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
								title="About us"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Language" variant="omar" id="dropdown-basic">
									<i className="fas fa-language" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										onClick={() => this.props.changelang('en')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										English
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={() => this.props.changelang('ar')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										Arabic
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
<<<<<<< HEAD
						<li class="nav-item" color="white">
							<a
								className="fa fa-building"
								title="To create a new form,choose a form type"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
]						<li class="nav-item dropdown" style={{width:"100px", paddingTop: '10px'}}>
=======
						<li class="nav-item dropdown">
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
							<select
								className="form-control"
								id="exampleFormControlSelect1"
								name="ali"
								onChange={this.changeHandler}
								value={this.state.formType}
<<<<<<< HEAD
								style={{color: blue200,border:"solid"}}
=======
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
							>
								<option>Choose a form type</option>
								{this.state.formTypes.map((city) => <option value={city}>{city}</option>)};
							</select>
						</li>
<<<<<<< HEAD
						<li class="nav-item dropdown" style={{width:"75px", paddingTop: '10px'}}>
=======
						<li class="nav-item dropdown">
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
							<select
								className="form-control"
								id="exampleFormControlSelect1"
								name="ali"
								onChange={this.changeHandler2}
<<<<<<< HEAD
								value={this.state.formTypeArray}
								style={{color: blue200,border:"solid"}}
=======
								value={this.state.formTypeArrays}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
							>
								<option>Choose an array</option>
								{this.state.formTypeArrays.map((city) => <option value={city}>{city}</option>)};
							</select>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Your Forms" variant="omar" id="dropdown-basic">
									<i className="fa fa-fw fa-list-alt" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										href="/approvedCompanies"
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Show Approved Companies
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										href="/investorInProgressform"
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Track your forms
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Settings" variant="omar" id="dropdown-basic">
									<i className="fas fa-cog" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
<<<<<<< HEAD
									<Dropdown.Item href="/editprofile" style={{ textAlign: 'left', color: blue200 }}>
=======
									<Dropdown.Item href="/editprofile" style={{ textAlign: 'left', color: '#3e484d' }}>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
										{' '}
										Edit your profile
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										href="/changepassword"
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Change your password
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={this.logOut}
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Logout
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
				</nav>
			</div>
		);
		var Lawyer = (
			<div>
				<nav
					class="navbar navbar-expand-sm bg-dark navbar-dark"
					style={{
<<<<<<< HEAD
						position: 'fixed',
=======
						position: 'absolute',
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
						padding: '0.5px',
						listStyle: 'none',
						margin: ' 0 auto',
						left: '0',
						top: '0',
						zIndex: '1',
						width: '100%'
					}}
				>
					<img src={berry} width="80" style={{ color: blue100 }} alt="" />
					<ul class="navbar-nav nav-fill w-100">
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-home"
								href="/"
								title="Home"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-user"
								href="/profile"
								title="Profile"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fas fa-newspaper"
								href="/journal"
								title="Electronic Journal"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-info-circle"
<<<<<<< HEAD
								href="/about"
=======
								href="/aboutContactUsPage"
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
								title="About us"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Language" variant="omar" id="dropdown-basic">
									<i className="fas fa-language" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										onClick={() => this.props.changelang('en')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										English
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={() => this.props.changelang('ar')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										Arabic
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
<<<<<<< HEAD
						<li class="nav-item" color="white">
							<a
								className="fa fa-building"
								title="To create a new form,choose a form type"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
]						<li class="nav-item dropdown" style={{width:"100px", paddingTop: '10px'}}>
=======
						<li class="nav-item dropdown">
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
							<select
								className="form-control"
								id="exampleFormControlSelect1"
								name="ali"
								onChange={this.changeHandler}
								value={this.state.formType}
<<<<<<< HEAD
								style={{color: blue200,border:"solid"}}
							>
=======
							>
								Create a new form
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
								<option>Choose a form type</option>
								{this.state.formTypes.map((city) => <option value={city}>{city}</option>)};
							</select>
						</li>
<<<<<<< HEAD
						<li class="nav-item dropdown" style={{width:"75px", paddingTop: '10px'}}>
=======
						<li class="nav-item dropdown">
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
							<select
								className="form-control"
								id="exampleFormControlSelect1"
								name="ali"
								onChange={this.changeHandler2}
<<<<<<< HEAD
								value={this.state.formTypeArray}
								style={{color: blue200,border:"solid"}}
=======
								value={this.state.formTypeArrays}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
							>
								<option>Choose an array</option>
								{this.state.formTypeArrays.map((city) => <option value={city}>{city}</option>)};
							</select>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Your Forms" variant="omar" id="dropdown-basic">
									<i className="fa fa-fw fa-list-alt" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
<<<<<<< HEAD
										href="/GetCaseLawyer"
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										View your cases
=======
										href="/getCaseLawyerSPC"
										style={{ textAlign: 'left', color: '#3e484d' }}
									>
										{' '}
										Track your forms
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										href="/unassignedForm"
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Pick a Task
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Settings" variant="omar" id="dropdown-basic">
									<i className="fas fa-cog" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
<<<<<<< HEAD
									<Dropdown.Item href="/editprofile" style={{ textAlign: 'left', color: blue200 }}>
=======
									<Dropdown.Item href="/editprofile" style={{ textAlign: 'left', color: '#3e484d' }}>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
										{' '}
										Edit your profile
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										href="/changepassword"
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Change your password
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={this.logOut}
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Logout
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
				</nav>
				<br />
				<br />
				<br />
			</div>
		);

		var Reviewer = (
			<div>
				<nav
					class="navbar navbar-expand-sm bg-dark navbar-dark"
					style={{
<<<<<<< HEAD
						position: 'fixed',
=======
						position: 'absolute',
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
						padding: '0.5px',
						listStyle: 'none',
						margin: ' 0 auto',
						left: '0',
						top: '0',
						zIndex: '1',
						width: '100%'
					}}
				>
					<img src={berry} width="80" alt="" />
					<ul class="navbar-nav nav-fill w-100">
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-home"
								href="/"
								title="Home"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-user"
								href="/profile"
								title="Profile"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fas fa-newspaper"
								href="/journal"
								title="Electronic Journal"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-info-circle"
<<<<<<< HEAD
								href="/about"
=======
								href="/aboutContactUsPage"
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
								title="About us"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Language" variant="omar" id="dropdown-basic">
									<i className="fas fa-language" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										onClick={() => this.props.changelang('en')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										English
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={() => this.props.changelang('ar')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										Arabic
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Your Forms" variant="omar" id="dropdown-basic">
									<i className="fa fa-fw fa-list-alt" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										href="/lawyerAcceptedForms"
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Pick a Task
									</Dropdown.Item>
									<Dropdown.Divider />
<<<<<<< HEAD
									<Dropdown.Item href="/GetReviewer" style={{ textAlign: 'left', color: blue200 }}>
										{' '}
										View your cases
=======
									<Dropdown.Item href="/GetReviewer" style={{ textAlign: 'left', color: '#3e484d' }}>
										{' '}
										View your tasks
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Settings" variant="omar" id="dropdown-basic">
									<i className="fas fa-cog" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
<<<<<<< HEAD
									<Dropdown.Item href="/editprofile" style={{ textAlign: 'left', color: blue200 }}>
=======
									<Dropdown.Item href="/editprofile" style={{ textAlign: 'left', color: '#3e484d' }}>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
										{' '}
										Edit your profile
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										href="/changepassword"
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Change your password
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={this.logOut}
<<<<<<< HEAD
										style={{ textAlign: 'left', color: blue200 }}
=======
										style={{ textAlign: 'left', color: '#3e484d' }}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									>
										{' '}
										Logout
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
				</nav>
				<br />
				<br />
				<br />
			</div>
		);

		var admin = (
			<div>
				<nav
					class="navbar navbar-expand-sm bg-dark navbar-dark"
					style={{
<<<<<<< HEAD
						position: 'fixed',
=======
						position: 'absolute',
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
						padding: '0.5px',
						listStyle: 'none',
						margin: ' 0 auto',
						left: '0',
						top: '0',
						zIndex: '1',
						width: '100%'
					}}
				>
					<img src={berry} width="70" alt="" />
					<ul class="navbar-nav nav-fill w-100">
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-home"
								href="/"
								title="Home"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-user"
								href="/profile"
								title="Profile"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fas fa-newspaper"
								href="/journal"
								title="Electronic Journal"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-info-circle"
<<<<<<< HEAD
								href="/about"
=======
								href="/aboutContactUsPage"
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
								title="About us"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fas fa-search"
								href="/companyName"
								title="Find a company"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fas fa-sign-in-alt"
<<<<<<< HEAD
								href="/registerAdmin"
=======
								href="/adminPage"
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
								title="Register a new lawyer or reviewer"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Language" variant="omar" id="dropdown-basic">
									<i className="fas fa-language" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										onClick={() => this.props.changelang('en')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										English
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={() => this.props.changelang('ar')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										Arabic
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Settings" variant="omar" id="dropdown-basic">
									<i className="fas fa-cog" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href="/editprofile" style={{ textAlign: 'left', color: blue200 }}>
										{' '}
										Edit your profile
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item href="/changepassword" style={{ textAlign: 'left', color: blue200 }}>
										{' '}
										Change your password
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item onClick={this.logOut} style={{ textAlign: 'left', color: blue200 }}>
										{' '}
										Logout
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
				</nav>
				<br />
				<br />
				<br />
			</div>
		);
<<<<<<< HEAD
		var ElectronicJournal = (
			<div>
				<nav
					class="navbar navbar-expand-sm bg-dark navbar-dark"
					style={{
						position: 'fixed',
						padding: '0.5px',
						listStyle: 'none',
						margin: ' 0 auto',
						left: '0',
						top: '0',
						zIndex: '1',
						width: '100%'
					}}
				>
					<img src={berry} width="80" alt="" />
					<ul class="navbar-nav nav-fill w-100">
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-home"
								href="/"
								title="Home"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fas fa-newspaper"
								href="/journal"
								title="Electronic Journal"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fa fa-info-circle"
								href="/about"
								title="About us"
								style={{ color: blue100, paddingTop: '15px', fontSize: '1.5em' }}
							/>
						</li>
						<li class="nav-item dropdown">
							<Dropdown>
								<Dropdown.Toggle title="Language" variant="omar" id="dropdown-basic">
									<i className="fas fa-language" style={{ color: blue100, fontSize: '1.5em' }} />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										onClick={() => this.props.changelang('en')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										English
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={() => this.props.changelang('ar')}
										style={{ textAlign: 'left', color: blue200 }}
									>
										{' '}
										Arabic
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
				</nav>
				<br />
				<br />
				<br />
			</div>
		);
=======
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524

		return (
			<div style={{ paddingLeft: '60px', justifyItems: 'center' }}>
				{localStorage.getItem('type') === 'Investor' ? Investor : null}
				{localStorage.getItem('type') === 'Lawyer' ? Lawyer : null}
				{localStorage.getItem('type') === 'Admin' ? admin : null}
				{localStorage.getItem('type') === 'Reviewer' ? Reviewer : null}
<<<<<<< HEAD
				{currentLocation === '/journal' ? ElectronicJournal : null}
				{currentLocation === '/register' ? ElectronicJournal : null}

=======
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
			</div>
		);
	}
}

export default NewNavBar;
