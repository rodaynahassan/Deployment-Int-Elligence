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
		return KEYS.map((key, index) => {
			if (key !== '_id' && key !== '__v') {
				var constraints = formType[key];
				constraints = constraints.split(',');
				//console.log(constraints)
				if (constraints[0] === 'array') {
					return (
						<div>
							<h2>{key}</h2>
							<h3>Please choose and insert {key} from the 2nd DropDown Menu</h3>
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
											style={{width:"300px"}}
										>
											<option>Please choose a governorate</option>
											{this.state.governorate.map((gov) => (
												 <option value={gov.name}>{gov.name}</option>
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
											style={{width:"300px"}}

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
											style={{width:"300px"}}

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
											style={{width:"300px"}}

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
		var arrInputs = [];
		for (var prop in arrConstraints) {
			arrInputs.push(prop);
		}
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
		const keys = this.state.certainFormType['0'];
		
		var KEYS = [];
		for (var key in keys) {
			KEYS.push(key);
		}
		var payload2 = {};
		KEYS.map((key, index) => {
			if (key !== '__proto__' && key !== '_id' && key !== '__v') {
				payload2[key] = this.state[key];
			}
		});
		var apiBaseUrl = '/routes/api/userDynamicForms/CreatingForm';
		axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('jwtToken');
		axios
			.post(apiBaseUrl, payload2, { headers: { Authorization: localStorage.getItem('jwtToken') } })
			.then(function(response) {
				alert('The Form has been created successfully');
			})
			.catch((error) => {
				//console.log(error.response.data.error.details['0'].message)
				
			//	alert(error.response.data.error.details['0'].message)
			if(error.response.data.error.details)
				alert(error.response.data.error.details['0'].message || error.response.data.error || error.response.data.errmsg||error.response.data);
				else
				alert(error.response.data.errmsg||error.response.data.error||error.response.data)
				//console.log(error);
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
