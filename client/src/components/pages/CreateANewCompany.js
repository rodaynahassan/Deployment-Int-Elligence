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

class CreateANewCompany extends Component {
	constructor(props) {
		super(props);
		this.state = {
			attributes: [],
			validations: [],
			certainFormType: [],
			formType: localStorage.getItem('formType'),
			tmp: '',
			formTypeArray: '',
			governorate: [],
			cities: [],
			city: '',
			nationalities: []
		};
	}
	componentDidMount = () => {
		const formType = localStorage.getItem('formType');
		axios
			.get('/routes/api/formTypes/getByFormType/' + localStorage.getItem('formType'), {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				this.setState({
					certainFormType: res.data.data
				});
			});
	};
	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	changeHandler2 = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		axios.get('/routes/api/governorates/getByGovernorateName/' + event.target.value).then((res) => {
			this.setState({ cities: res.data.data });
		});
	};
	getAttributes = () => {
		const keys = Object.keys(this.state.certainFormType);
		var formType = this.state.certainFormType[keys];
		var KEYS = [];
		for (var key in formType) {
			KEYS.push(key);
		}
<<<<<<< HEAD
		// var trial=[]
		// for (var i=0;i<KEYS.length;i++){
		// 	var now=KEYS[i]
		// 	console.log(now)
		// 	var temp=""
		// 	for(var j=0;j<now.length;j++){
		// 		if(now.charCodeAt(j)>=65 && now.charCodeAt(j)<=90){
		// 			temp=temp+" "
		// 			temp=temp+now.charAt(j)
		// 		}
		// 		else{
		// 			temp=temp+now.charAt(j)
		// 		}
				
		// 	}
			//console.log(temp)
		// 	trial.push(temp)
		// }
		// var size=KEYS.length
		// for(var k=0;k<size;k++){
		// 	KEYS.pop()
		// 	KEYS.push(trial.pop)
		// }
		// console.log(KEYS)
		// console.log("ay 7aga")
		// var s = 'Z';
		// console.log(s.charCodeAt(0));
=======
		//console.log(KEYS)
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		return KEYS.map((key, index) => {
			if (key !== '_id' && key !== '__v') {
				var constraints = formType[key];
				constraints = constraints.split(',');
				//console.log(constraints)
				if (constraints[0] === 'array') {
					return (
						<div>
							<h2>{key}</h2>
							<h3>Please Insert Array of {key} in the Array page</h3>
						</div>
					);
				} else if (constraints[5] === 'dropdownlist') {
					if (key === 'companyGovernorate') {
						axios.get('/routes/api/governorates/').then((res) => {
							this.setState({ governorate: res.data.data });
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
											onChange={this.changeHandler2}
											value={this.state[key]}
<<<<<<< HEAD
											style={{width:"300px"}}
										>
											<option>Please choose a governorate</option>
											{this.state.governorate.map((gov) => (
												 <option value={gov.name}>{gov.name}</option>
=======
										>
											<option>Please choose a governorate</option>
											{this.state.governorate.map((gov) => (
												<option value={gov.name}>{gov.name}</option>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
											))};
										</select>
									</div>
								</MDBCol>
								<MDBCol>
									<div className="form-group">
										<label htmlFor="companyCity">companyCity</label>
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											name="companyCity"
											onChange={this.changeHandler}
											value={this.state.companyCity}
<<<<<<< HEAD
											style={{width:"300px"}}

=======
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
										>
											<option>Please choose a city </option>
											{this.state.cities.map((city) => <option value={city}>{city}</option>)};
										</select>
									</div>
								</MDBCol>
							</div>
						);
					}
					if (key === 'investorNationality') {
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

=======
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
										>
											<option>Please choose a nationality </option>
											{this.state.nationalities.map((nat) => (
												<option value={nat.name}>{nat.name}</option>
											))};
										</select>
									</div>
								</MDBCol>
							</div>
						);
					}
					if (key === 'currency') {
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
											<option>Please choose the currency</option>
											<option>Euro</option>
											<option>Egp</option>
											<option>Pound</option>
											<option>Franc</option>
											<option>SA</option>
											<option>U.D</option>
											<option>U.S</option>
											<option>Yen</option>
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
	getArrayAtt = async (input) => {
		var arrConstraints = await axios
			.get('/routes/api/formTypes/getByFormTypeArray/' + input, {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				return res.data.data;
				//console.log(formTypeArray)
			});
		arrConstraints = arrConstraints['0'];
<<<<<<< HEAD
=======
		console.log(arrConstraints);
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		var arrInputs = [];
		for (var prop in arrConstraints) {
			arrInputs.push(prop);
		}
<<<<<<< HEAD
=======
		console.log(arrInputs);
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		return arrInputs.map((key, index) => {
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
		});
		// var formTypeArray = this.state.formTypeArray[keysArray]
		// var KEYSARRAY = []
		// for (var key in formTypeArray) {
		//     KEYSARRAY.push(key)
		// }
		// KEYSARRAY.map((key, index) => {
		//     return <div style={{ marginBottom: "60px" }}>
		//         <MDBRow style={{ paddingLeft: '30px', justifyItems: "center" }}>
		//             <MDBCol>
		//                 <MDBInput
		//                     label={key}
		//                     value={this.state[key]}
		//                     name={key}
		//                     onChange={this.changeHandler}
		//                     type="text"
		//                     id="materialFormRegisterNameEx"
		//                     required
		//                 >
		//                 </MDBInput>
		//             </MDBCol>
		//         </MDBRow>
		//     </div>

		// })
	};

	handleClick = (error) => {
		error.preventDefault();
<<<<<<< HEAD
		const keys = this.state.certainFormType['0'];
=======
		// console.log(this.state.certainFormType)
		const keys = this.state.certainFormType['0'];
		//const keys = Object.keys(this.state.certainFormType)
		//  console.log(keys)
		// var formType = this.state.certainFormType[keys]
		// console.log(formType)
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		var KEYS = [];
		for (var key in keys) {
			KEYS.push(key);
		}
<<<<<<< HEAD
		var payload2 = {};
		KEYS.map((key, index) => {
			if (key !== '__proto__' && key !== '_id' && key !== '__v') {
				payload2[key] = this.state[key];
			}
		});
		var apiBaseUrl = '/routes/api/userDynamicForms/CreatingForm';
=======
		//var payload = []
		var payload2 = {};
		//payload2.push({formType: localStorage.getItem('formType')})
		KEYS.map((key, index) => {
			if (key !== '__proto__' && key !== '_id' && key !== '__v') {
				//payload2.push({ [key] : this.state[key] })
				// key : this.state.key,
				payload2[key] = this.state[key];
			}
		});

		//console.log(KEYS)

		var apiBaseUrl = '/routes/api/userDynamicForms/CreatingForm';

		////console.log(payload2)

>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
		axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('jwtToken');
		axios
			.post(apiBaseUrl, payload2, { headers: { Authorization: localStorage.getItem('jwtToken') } })
			.then(function(response) {
				alert('The Form has been created successfully');
			})
			.catch((error) => {
				// alert(error.response.data.errmsg||error.response.data);
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

//ReactDOM.render(<CreateANewCompany />, document.getElementById('root'));

export default CreateANewCompany;
