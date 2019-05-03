import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect } from 'mdbreact';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import trans from '../translations/editProfileTranslation'
import swal from 'sweetalert';
var mongoose = require('mongoose');

class EditProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			gender: '',
			nationality: '',
			identificationType: '',
			identificationNumber: '',
			birthdate: '',
			address: '',
			email: '',
			telephone: '',
			fax: '',
			nationalities: []
		};

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/users/CertainAttributes', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((response) => {
				this.setState({
					name: response.data.Username,
					gender: response.data.Gender,
					nationality: response.data.Nationality,
					identificationType: response.data.IdentificationType,
					identificationNumber: response.data.IdentificationNumber,
					birthdate: response.data.Birthdate.substring(0, 10),
					address: response.data.Address,
					email: response.data.Email,
					telephone: response.data.Telephone,
					fax: response.data.Fax
				});
			});
	}

	handleClick(error) {
		error.preventDefault();
		const obj = {
			name: this.state.name,
			gender: this.state.gender,
			nationality: this.state.nationality,
			identificationType: this.state.identificationType,
			identificationNumber: this.state.identificationNumber,
			birthdate: this.state.birthdate,
			address: this.state.address,
			telephone: this.state.telephone,
			fax: this.state.fax
		};
		var apiBaseUrl = '/routes/api/users/updateUser';
		var payload = {
			name: this.state.name,
			gender: this.state.gender,
			nationality: this.state.nationality,
			identificationType: this.state.identificationType,
			identificationNumber: this.state.identificationNumber,
			birthdate: this.state.birthdate,
			address: this.state.address,
			telephone: this.state.telephone,
			fax: this.state.fax
		};

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.put(apiBaseUrl, payload, { headers: { Authorization: localStorage.getItem('jwtToken') } })
			.then(function(response) {
				swal('The profile has been updated successfully');
			})
			.catch((error) => {
				swal(error.response.data.errmsg || error.response.data);
				console.log(error);
			});
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	componentDidMount() {
		axios.get('/routes/api/nationalities').then((res) => {
			this.setState({ nationalities: res.data.data });
		});
	}
	validateForm() {
		return (
			this.state.name.length >= 3 &&
			this.state.name.length <= 50 &&
			this.state.identificationType.length >= 8 &&
			this.state.identificationType.length <= 20 &&
			this.state.identificationNumber.length >= 8 &&
			this.state.identificationNumber.length <= 50 &&
			this.state.address.length >= 5 &&
			this.state.address.length <= 50 &&
			this.state.email.length >= 3 &&
			this.state.email.length <= 254
		);
	}

	render() {
		trans.setLanguage(this.props.lang);
		return (
			<div style={{ paddingLeft: '60px', justifyItems: 'center' }}>
				<div
					style={{
						backgroundColor: '#123456',
						textAlign: 'center',
						fontSize: '50px',
						color: 'white',
						width: '100%'
					}}
				>
					{trans.title}
				</div>
				<MuiThemeProvider>
					<div>
						<br />
						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<MDBInput
									label={trans.name}
									value={this.state.name}
									name="name"
									className={
										this.state.name.length >= 3 && this.state.name.length <= 50 ? (
											'is-valid'
										) : (
											'is-invalid'
										)
									}
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterNameEx"
									required
								>
									<div className="valid-feedback">{trans.validfeedback}</div>
									<div className="invalid-feedback">
										{trans.invalidfeedbackName}
									</div>
								</MDBInput>
							</MDBCol>
						</MDBRow>
						<br />

						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="gender">{trans.gender}</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="gender"
										onChange={this.changeHandler}
										value={this.state.gender}
									>
										<option>{trans.male}</option>
										<option>{trans.female}</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>
						<br />

						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="Nationality">{trans.nationality}</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="nationality"
										onChange={this.changeHandler}
										value={this.state.nationality}
									>
										{this.state.nationalities.map((nat) => (
											<option value={nat.name}>{nat.name}</option>
										))};
									</select>
								</div>
							</MDBCol>
						</MDBRow>
						<br />

						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<MDBInput
									value={this.state.identificationType}
									name="identificationType"
									className={
										this.state.identificationType.length <= 20 &&
										this.state.identificationType.length >= 8 ? (
											'is-valid'
										) : (
											'is-invalid'
										)
									}
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterNameEx"
									label={trans.identificationType}
									required
								>
									<div className="valid-feedback">{trans.validfeedback}</div>
									<div className="invalid-feedback">
										{trans.invalidfeedbackIdentificationType}
									</div>
								</MDBInput>
							</MDBCol>
						</MDBRow>
						<br />

						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<MDBInput
									value={this.state.identificationNumber}
									name="identificationNumber"
									className={
										this.state.identificationNumber.length <= 50 &&
										this.state.identificationNumber.length >= 5 ? (
											'is-valid'
										) : (
											'is-invalid'
										)
									}
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterNameEx"
									label={trans.identificationNumber}
									required
								>
									<div className="valid-feedback">{trans.validfeedback}</div>
									<div className="invalid-feedback">
										{trans.invalidfeedbackIdentificationNumber}
									</div>
								</MDBInput>
							</MDBCol>
						</MDBRow>
						<br />
						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<MDBInput
									value={this.state.birthdate}
									name="birthdate"
									className={this.state.birthdate.length > 0 ? 'is-valid' : 'is-valid'}
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterNameEx"
									label={trans.birthdate}
									required
								>
									<div className="valid-feedback">{trans.validfeedbackBirthdate}</div>
								</MDBInput>
							</MDBCol>
						</MDBRow>
						<br />
						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<MDBInput
									value={this.state.email}
									name="email"
									className={
										this.state.email.length >= 3 && this.state.email.length <= 254 ? (
											'is-valid'
										) : (
											'is-valid'
										)
									}
									onChange={this.changeHandler}
									type="email"
									id="materialFormRegisterNameEx"
									label={trans.email}
									required
								>
									<div className="valid-feedback">{trans.validfeedback}</div>
									<div className="invalid-feedback">
										{trans.invalidfeedbackEmail}
									</div>
								</MDBInput>
							</MDBCol>
						</MDBRow>
						<br />
						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<MDBInput
									value={this.state.address}
									name="address"
									className={
										this.state.address.length <= 50 && this.state.address.length >= 5 ? (
											'is-valid'
										) : (
											'is-invalid'
										)
									}
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterNameEx"
									label={trans.address}
									required
								/>
							</MDBCol>
						</MDBRow>
						<br />

						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<MDBInput
									value={this.state.telephone}
									name="telephone"
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterNameEx"
									label={trans.telephone}
									required
								>
									<div className="valid-feedback">{trans.validfeedback}</div>
									<div className="invalid-feedback">
										{trans.invalidfeedbackTelephone}
									</div>
								</MDBInput>
							</MDBCol>
						</MDBRow>
						<br />
						<MDBRow style={{ paddingLeft: '30px', justifyItems: 'center' }}>
							<MDBCol>
								<MDBInput
									label={trans.fax}
									value={this.state.fax}
									name="fax"
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterNameEx"
									required
								>
									<div className="valid-feedback">{trans.validfeedback}</div>
									<div className="invalid-feedback">
										{trans.invalidfeedbackFax}
									</div>
								</MDBInput>
							</MDBCol>
						</MDBRow>

						<div style={{ paddingLeft: '50%' }}>
							<RaisedButton
								label={trans.submit}
								primary={true}
								style={style}
								disabled={!this.validateForm()}
								onClick={(event) => (
									this.handleClick(event), alert('Your request to update has been submitted')
								)}
							/>
						</div>
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}
const style = {
	margin: 15
};

// ReactDOM.render(<EditProfile />, document.getElementById('root'));

export default EditProfile;
