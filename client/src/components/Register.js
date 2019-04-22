import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';
import { MDBRow, MDBCol } from 'mdbreact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: 'Investor',
			name: '',
			gender: '',
			nationality: '',
			identificationType: '',
			identificationNumber: '',
			birthdate: '',
			address: '',
			email: '',
			password: '',
			telephone: '',
			fax: '',
			investorType: '',
			nationalities: [],
			errors: {},
			password_confirm: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		var payload = {
			userType: this.state.userType,
			name: this.state.name,
			gender: this.state.gender,
			nationality: this.state.nationality,
			identificationType: this.state.identificationType,
			identificationNumber: this.state.identificationNumber,
			birthdate: this.state.birthdate,
			address: this.state.address,
			email: this.state.email,
			password: this.state.password,
			telephone: this.state.telephone,
			fax: this.state.fax,
			investorType: this.state.investorType
		};
		this.props.registerUser(payload, this.props.history);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	componentDidMount() {
		axios.get('/routes/api/nationalities').then((res) => {
			this.setState({ nationalities: res.data.data });
		});
	}

	validateForm() {
		return (
			this.state.email.length >= 3 &&
			this.state.email.length <= 50 &&
			this.state.gender.length >= 4 &&
			this.state.gender.length <= 6 &&
			this.state.identificationNumber.length >= 8 &&
			this.state.identificationNumber.length <= 50 &&
			this.state.address.length >= 5 &&
			this.state.address.length <= 50 &&
			this.state.telephone.length >= 4 &&
			this.state.telephone.length <= 15 &&
			this.state.fax.length >= 5 &&
			this.state.fax.length <= 20 &&
			this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
			this.state.password.length >= 8 &&
			this.state.password_confirm.length <= 20 &&
			this.state.password === this.state.password_confirm
		);
	}

	render() {
		const { errors } = this.state;

		return (
			<MuiThemeProvider>
				<div className="container" style={{ marginTop: '50px', width: '700px' }}>
					<h2 style={{ marginBottom: '40px' }}>Registration</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								placeholder="Name"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.name
								})}
								name="name"
								// hintText="Enter your name"
								// floatingLabelText={'Email'}
								//id="materialFormRegisterNameEx"
								onChange={this.handleInputChange}
								value={this.state.name}
								required
							/>

							{errors.name && <div className="invalid-feedback">{errors.name}</div>}
						</div>

						<MDBRow>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="gender">Gender</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="gender"
										onChange={this.handleInputChange}
										value={this.state.gender}
									>
										<option>Male</option>
										<option>Female</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>

						<div className="form-group">
							<label htmlFor="Nationality">Nationality</label>
							<select
								className="form-control"
								id="exampleFormControlSelect1"
								name="nationality"
								onChange={this.changeHandler}
								value={this.state.nationality}
							>
								{this.state.nationalities.map((nat) => <option value={nat.name}>{nat.name}</option>)};
							</select>
						</div>

						<MDBRow>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="identificationType">Identification Type</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="identificationType"
										onChange={this.handleInputChange}
										value={this.state.identificationType}
									>
										<option>National ID</option>
										<option>Passport</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>

						<div className="form-group">
							<label htmlFor="identificationNumber">Identification Number</label>
							<input
								type="text"
								placeholder="identification Number"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.identificationNumber
								})}
								name="identificationNumber"
								onChange={this.handleInputChange}
								value={this.state.identificationNumber}
								required
							/>
							{errors.identificationNumber && (
								<div className="invalid-feedback">{errors.identificationNumber}</div>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="birthdate">Birthdate</label>
							<input
								type="text"
								placeholder="Birthdate"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.birthdate
								})}
								name="birthdate"
								onChange={this.handleInputChange}
								value={this.state.birthdate}
								required
							/>
							{errors.birthdate && <div className="invalid-feedback">{errors.birthdate}</div>}
						</div>

						<div className="form-group">
							<label htmlFor="address">Address</label>
							<input
								type="text"
								placeholder="Address"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.address
								})}
								name="address"
								onChange={this.handleInputChange}
								value={this.state.address}
								required
							/>
							{errors.address && <div className="invalid-feedback">{errors.address}</div>}
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								placeholder="Email"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.email
								})}
								name="email"
								onChange={this.handleInputChange}
								value={this.state.email}
								required
							/>
							{errors.email && <div className="invalid-feedback">{errors.email}</div>}
						</div>

						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								placeholder="Password"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.password
								})}
								//className={this.state.newPassword.valid?"is-valid" : "is-invalid"}
								name="password"
								onChange={this.handleInputChange}
								value={this.state.password}
								required
							/>

							{errors.password && <div className="invalid-feedback">{errors.password}</div>}
						</div>

						<div className="form-group">
							<label htmlFor="password_confirm">Confirm Password</label>
							<input
								type="password"
								placeholder="Confirm Password"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.password_confirm
								})}
								name="password_confirm"
								onChange={this.handleInputChange}
								value={this.state.password_confirm}
								required
							/>
							{errors.password_confirm && (
								<div className="invalid-feedback">{errors.password_confirm}</div>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="telephone">Telephone</label>
							<input
								type="text"
								placeholder="Telephone"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.telephone
								})}
								name="telephone"
								onChange={this.handleInputChange}
								value={this.state.telephone}
							/>
							{errors.telephone && <div className="invalid-feedback">{errors.telephone}</div>}
						</div>

						<div className="form-group">
							<label htmlFor="fax">Fax</label>
							<input
								type="text"
								placeholder="Fax"
								className={classnames('form-control form-control-lg', {
									'is-invalid': errors.fax
								})}
								name="fax"
								onChange={this.handleInputChange}
								value={this.state.fax}
							/>
							{errors.fax && <div className="invalid-feedback">{errors.fax}</div>}
						</div>

						<MDBRow>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="investorType">Investor Type</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="investorType"
										onChange={this.handleInputChange}
										value={this.state.investorType}
									>
										<option>Person</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>

						<div className="form-group">
							<button
								type="submit"
								disabled={!this.validateForm()}
								onClick={(e) => (
									this.handleSubmit(e), alert('The Account has been created successfully')
								)}
								className="btn btn-primary"
							>
								Register User
							</button>
						</div>
					</form>
				</div>
			</MuiThemeProvider>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
