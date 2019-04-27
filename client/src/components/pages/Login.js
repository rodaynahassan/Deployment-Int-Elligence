import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authentication';
import classnames from 'classnames';
import trans from '../translations/loginTranslation';
import { Button } from 'react-bootstrap';
import { MDBInput } from 'mdbreact';
<<<<<<< HEAD
=======

>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
import { InputAdornment, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { RemoveRedEye } from '@material-ui/icons';

const styles = (theme) => ({
	eye: {
		cursor: 'pointer'
	}
});

class PasswordInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			passwordIsMasked: true
		};
	}

	togglePasswordMask = () => {
		this.setState((prevState) => ({
			passwordIsMasked: !prevState.passwordIsMasked
		}));
	};

	render() {
		const { classes } = this.props;
		const { passwordIsMasked } = this.state;

		return (
			<div className="md-form pb-3">
				<TextField
<<<<<<< HEAD
					placeholder={trans.password}
=======
					placeholder="Your Password"
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
					type={passwordIsMasked ? 'password' : 'text'}
					{...this.props}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<RemoveRedEye className={classes.eye} onClick={this.togglePasswordMask} />
							</InputAdornment>
						)
					}}
				/>
			</div>
		);
	}
}

PasswordInput.propTypes = {
	classes: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.func.isRequired
};

PasswordInput = withStyles(styles)(PasswordInput);

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange1 = this.onChange1.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(user);
		//handle the redirect to the corresponding page --omar
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange1 = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { errors } = this.state;
		const { password } = this.state;
		trans.setLanguage(this.props.lang);

		return (
			<div>
				<div className="modal-dialog" role="document">
					{/* <form onSubmit={this.handleSubmit}> */}
					<div className="modal-content form-elegant">
<<<<<<< HEAD
=======
						{/*Header*/}
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
						<div className="modal-header text-center">
							<h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">
								<strong> {trans.loginTitle}</strong>
							</h3>
						</div>

						<div className="modal-body mx-4">
							<div className="md-form mb-5">
								<MDBInput
									type="email"
									hint="example@hotmail.com"
									className={
										this.state.email.length === 0 ||
										this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? (
											'is-valid'
										) : (
											'is-invalid'
										)
									}
									id="Form-email1"
									//className="form-control validate"
									name="email"
									onChange={this.handleInputChange}
									value={this.state.email}
								>
<<<<<<< HEAD
									<div className="valid-feedback">{trans.valid}</div>
									<div className="invalid-feedback">{trans.invalid}</div>
=======
									<div className="valid-feedback">Looks good!</div>
									<div className="invalid-feedback">Please enter a valid email</div>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
								</MDBInput>

								{/* <label data-error="wrong" data-success="right" htmlFor="Form-email1">
									{trans.hintemail}
								</label> */}
							</div>
							<div className="md-form pb-3">
								<PasswordInput
									//type="password"
									id="Form-pass1"
									//className="form-control validate"
									className={this.state.password.length > 0 ? 'is-valid' : 'is-invalid'}
									onChange={this.onChange1}
									name="password"
									value={this.state.password}
									style={{ width: '100%' }}
								>
									<div className="valid-feedback">Looks good!</div>
									<div className="invalid-feedback">Please enter your password</div>
								</PasswordInput>
								{/* <label data-error="wrong" data-success="right" htmlFor="Form-pass1">
									{trans.hintpassword}
								</label> */}
								<p className="font-small blue-text d-flex justify-content-end">
									{' '}
									<a href="forgotPassword" className="blue-text ml-1">
<<<<<<< HEAD
										{trans.forgot}
=======
										Forgot Password?
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
									</a>
								</p>
							</div>
							<div className="text-center mb-3">
<<<<<<< HEAD
								<Button
									variant="omar"
									style={{ width: '120px', height: '55px',backgroundColor:"#a3dbf1" }}  
									onClick={(e) => this.handleSubmit(e)}
									type="submit"
								>
									{trans.loginbutton}
								</Button>
=======
								<button
									onClick={(e) => this.handleSubmit(e)}
									type="submit"
									className="btn blue-gradient btn-block btn-rounded z-depth-1a"
								>
									{trans.loginbutton}
								</button>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
							</div>
						</div>

						<div className="modal-footer mx-5 pt-3 mb-1">
							<p className="font-small grey-text d-flex justify-content-end">
<<<<<<< HEAD
								{trans.member}{' '}
								<a href="/register" className="blue-text ml-1">
									{trans.signup}
=======
								Not a member?{' '}
								<a href="/register" className="blue-text ml-1">
									Sign Up
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
								</a>
							</p>
						</div>
					</div>
					{/* </form> */}
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	errors: state.errors
});

<<<<<<< HEAD
export default connect(mapStateToProps, { loginUser })(Login);
=======
export default connect(mapStateToProps, { loginUser })(Login);
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
