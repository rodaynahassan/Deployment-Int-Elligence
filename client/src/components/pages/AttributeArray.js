import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
	MDBRow,
	MDBCol,
	MDBInput,
	MDBBtn,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownItem,
	MDBDropdownMenu
} from 'mdbreact';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import trans from '../translations/spcTranslation';
//import {Dropdown} from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Footer from '../layout/footer';
import { Button } from 'react-bootstrap';
import { conditionalExpression } from '@babel/types';

var mongoose = require('mongoose');

class AttributeArray extends Component {
	constructor(props) {
		super(props);
		this.state = {
			attributes: [],
			validations: [],
			certainFormType: [],
<<<<<<< HEAD
			nationalities: [],
			nationality:''
=======
			formTypeArray: localStorage.getItem('formTypeArray'),
			nationalities: []
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		};
	}
	componentDidMount = () => {
		axios
			.get('/routes/api/formTypes/getByFormTypeArray/' + localStorage.getItem('formTypeArray'), {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
<<<<<<< HEAD
=======
				console.log(res.data.data);
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
				this.setState({
					certainFormType: res.data.data
				});
			});
	};
	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	getAttributes = () => {
		const keys = Object.keys(this.state.certainFormType);
		var formType = this.state.certainFormType[keys];
		var KEYS = [];
		for (var key in formType) {
			KEYS.push(key);
		}
<<<<<<< HEAD
=======
		console.log(KEYS);
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		return KEYS.map((key, index) => {
			if (key !== '_id' && key !== '__v') {
				var constraints = formType[key];
				constraints = constraints.split(',');
<<<<<<< HEAD
=======
				console.log(constraints);
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
				if (constraints[5] === 'dropdownlist') {
					if (key === 'gender') {
						return (
							<div style={{ marginBottom: '60px' }}>
								<MDBCol>
									<div className="form-group">
										<label htmlFor={key}>{key}</label>
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											name={key}
											onChange={this.changeHandler}
											value={this.state[key]}
<<<<<<< HEAD
											style={{width:"300px"}}
										>
											<option>Please choose your gender</option>
=======
										>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
											<option>Female</option>
											<option>Male</option>
										</select>
									</div>
								</MDBCol>
							</div>
						);
					}

					if (key === 'nationality') {
						axios.get('/routes/api/nationalities/').then((res) => {
							this.setState({ nationalities: res.data.data });
						});
						return (
							<div style={{ marginBottom: '60px' }}>
								<MDBCol>
									<div className="form-group">
										<label htmlFor={key}>{key}</label>
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											name={key}
											onChange={this.changeHandler}
											value={this.state[key]}
<<<<<<< HEAD
											style={{width:"300px"}}
										>
												<option>Please choose your nationality</option>
												{this.state.nationalities.map((nat) => (
=======
										>
											{this.state.nationalities.map((nat) => (
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
												<option value={nat.name}>{nat.name}</option>
											))};
										</select>
									</div>
								</MDBCol>
							</div>
						);
					}
					if (key === 'type') {
						return (
							<div style={{ marginBottom: '60px' }}>
								<MDBCol>
									<div className="form-group">
										<label htmlFor={key}>{key}</label>
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											name={key}
											onChange={this.changeHandler}
											value={this.state[key]}
<<<<<<< HEAD
											style={{width:"300px"}}
										>
											<option>Please choose your type</option>
=======
										>
											<option>Please check your type</option>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
											<option>Person</option>
										</select>
									</div>
								</MDBCol>
							</div>
						);
					}
					if (key === 'identificationType') {
						return (
							<div style={{ marginBottom: '60px' }}>
								<MDBCol>
									<div className="form-group">
										<label htmlFor={key}>{key}</label>
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											name={key}
											onChange={this.changeHandler}
											value={this.state[key]}
<<<<<<< HEAD
											style={{width:"300px"}}
=======
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
										>
											<option>Please choose your Identification Type</option>
											<option>National ID</option>
											<option>Passport</option>
										</select>
									</div>
								</MDBCol>
							</div>
						);
					}
					if (key === 'typeOfManagers') {
						return (
							<div style={{ marginBottom: '60px' }}>
								<MDBCol>
									<div className="form-group">
										<label htmlFor={key}>{key}</label>
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											name={key}
											onChange={this.changeHandler}
											value={this.state[key]}
<<<<<<< HEAD
											style={{width:"300px"}}
=======
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
										>
											<option>Please choose the type of the manager</option>
											<option>President</option>
											<option>Vice President</option>
											<option>CEO</option>
											<option>General Manager</option>
											<option>Branch Manager</option>
											<option>Department Manager</option>
											<option>Supervisor</option>
											<option>CFO</option>
											<option>COO</option>
											<option>CTO</option>
											<option>Section Lead</option>
											<option>Forman</option>
										</select>
									</div>
								</MDBCol>
							</div>
						);
					}
				} else {
					return (
						<div style={{ marginBottom: '60px' }}>
							<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
								<MDBCol>
									<MDBInput
										label={key}
										value={this.state[key]}
										name={key}
										onChange={this.changeHandler}
										type="text"
										id="materialFormRegisterNameEx"
										required
									/>
								</MDBCol>
							</MDBRow>
						</div>
					);
				}
			}
		});
	};

	handleClick = (error) => {
		error.preventDefault();
		const keys = this.state.certainFormType['0'];
		var KEYS = [];
		for (var key in keys) {
			KEYS.push(key);
		}
		var payload2 = {};
		KEYS.map((key, index) => {
			if (key !== '__proto__' && key !== '_id' && key !== '__v') {
				//payload2.push({ [key] : this.state[key] })
				// key : this.state.key,
				payload2[key] = this.state[key];
			}
		});
		///CHANGE THIS PART WITH THE NEW ROUTE

		var apiBaseUrl = '/routes/api/userDynamicForms/addAttributeToArray';

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.put(apiBaseUrl, payload2, { headers: { Authorization: localStorage.getItem('jwtToken') } })
			.then(function(response) {
<<<<<<< HEAD
				alert('The SSC Manager has been created successfully');
=======
				alert('The profile has been updated successfully');
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
			})
			.catch((error) => {
				alert(error.response.data.errmsg || error.response.data);
				console.log(error);
			});
	};

	render() {
		//  trans.setLanguage(this.props.lang)
		return (
			<div style={{ paddingLeft: '60px', justifyItems: 'center' }}>
				<MuiThemeProvider>
					{this.getAttributes()}
					<RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClick} />
				</MuiThemeProvider>
			</div>
		);
	}
}
const style = {
	margin: 15
};

export default AttributeArray;
