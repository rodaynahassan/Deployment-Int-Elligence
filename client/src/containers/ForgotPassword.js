import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {
	LinkButtons,
	SubmitButtons,
	registerButton,
	homeButton,
	forgotButton,
	inputStyle,
	HeaderBar
} from '../containers';
import { MDBInput } from 'mdbreact';

const title = {
	pageTitle: 'Forgot Password Screen'
};

class ForgotPassword extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			showError: false,
			messageFromServer: '',
			showNullError: false
		};
	}

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	};

	sendEmail = (e) => {
		e.preventDefault();
		const { email } = this.state;
		if (email === '') {
			this.setState({
				showError: false,
				messageFromServer: '',
				showNullError: true
			});
		} else {
			axios
				.post('/routes/api/users/forgotPassword', {
					email
				})
				.then((response) => {
					console.log(response.data);
					if (response.data === 'recovery email sent') {
						this.setState({
							showError: false,
							messageFromServer: 'recovery email sent',
							showNullError: false
						});
					}
				})
				.catch((error) => {
					console.error(error.response.data);
					if (error.response.data === 'email not in db') {
						this.setState({
							showError: true,
							messageFromServer: '',
							showNullError: false
						});
					}
				});
		}
	};

	render() {
		const { email, messageFromServer, showNullError, showError } = this.state;

		return (
			<div style={{ paddingLeft: '100 px', justifyItems: 'center' }}>
				<HeaderBar title={title} />
				<form className="profile-form" onSubmit={this.sendEmail}>
					<MDBInput
						style={{ width: '300px' }}
						id="email"
						label="Email"
						value={email}
						onChange={this.handleChange('email')}
						placeholder="Email Address"
					/>
					<SubmitButtons
						// buttonStyle={forgotButton}
						buttonText="Send Password Reset Email"
						className="btn blue-gradient btn-block btn-rounded z-depth-1a"
					/>
				</form>
				{showNullError && (
					<div>
						<p>The email address cannot be null.</p>
					</div>
				)}
				{showError && (
					<div>
						<p>That email address isn&apos;t recognized. Please try again or register for a new account.</p>
						<LinkButtons buttonText="Register" buttonStyle={registerButton} link="/register" />
					</div>
				)}
				{messageFromServer === 'recovery email sent' && (
					<div>
						<h3>Password Reset Email Successfully Sent!</h3>
					</div>
				)}
				<br />
				<LinkButtons
					buttonText="Go Home"
					// href="/register"
					buttonStyle={homeButton}
					link="/"
					className="btn blue-gradient btn-block btn-rounded z-depth-1a"
				/>
			</div>
		);
	}
}

export default ForgotPassword;
