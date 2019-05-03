import React, { Component } from 'react';
import Page from 'react-page-loading';
import { Provider } from 'react-redux'; //new stuff
import store from './store'; //new stuff
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './App.scss';
import LandingBody from './components/pages/landingBody';
import Profile from './components/pages/profilePage';
import Footer from './components/layout/footer';
import Companies from './components/pages/Companies';
import Side from './components/layout/Side';
import NewNavBar from './components/layout/NewNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/NavBar';
import AdminProfile from './components/pages/AdminProfile';
import adminPage from './components/pages/adminPage';
import Register1 from './components/Register';
import Login from './components/pages/Login';
import Home from './components/Home';
import DropdownTrial from './components/form/DropdownNationalities';
import DropdownCities from './components/form/DropdownCities';
import DropdownGovernorates from './components/form/DropdownGovernorates';
import UnassignedForm from './components/pages/unassignedForm';
import AssignToReviewer from './components/pages/assignToReviewer';
import GetCaseReviewer from './components/pages/GetCaseReviewer';
import EditProfile from './components/pages/EditProfile';
import ChangePassword from './components/pages/ChangePassword';
import GetFormByCompanyName from './components/form/GetFormByCompanyName';
import GetCaseLawyer from './components/pages/getCaseLawyer';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';
import About from './components/pages/about';
import ApprovedCompanies from './components/pages/ApprovedCompanies';
import companyPDF from './components/pages/companyPdf';
import CreateANewCompany from './components/pages/CreateANewCompany';
import AttributeArray from './components/pages/AttributeArray';
import InProgressInvestorCases from './components/pages/inProgressInvestorCases';
import EditInvCompany from './components/pages/EditInvCompany';
import EditLawyerCompany from './components/pages/editLawyerForms';

class App extends Component {
	constructor() {
		super();
		localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
		//this.connecToServer = this.connecToServer.bind(this);
	}
	// connecToServer() {
	// 	fetch('/');
	// }

	// componentDidMount() {
	// 	this.connecToServer();
	// }

	state = {
		lang: localStorage.getItem('lang'),
		formId: {}
	};
	changelang = (lang) => {
		localStorage.setItem('lang', lang);
		this.setState({ lang: lang });
		console.log(lang);
	};

	componentDidMount() {
		document.title = 'GAFI';
	}

	setFormId = (formId) => {
		this.setState({ formId: formId });
		if (formId.status === 'Unassigned') document.location.href = '/editUnassigned';
		else if (formId.type === 'SSCForm') document.location.href = '/editsscform';
		else document.location.href = '/editspcform';
	};

	render() {
		var currentLocation = window.location.pathname;
		return (
			<div>
				<Page loader={"bubble-spin"} color={"#A9A9A9"} size={12}>
			<body
				style={{
					position: 'relative',
					minHeight: '100vh'
				}}
			>
				<Provider store={store}>
					<div style={{ paddingBottom: '7rem' }}>
						<Router>
							<div>
								<Route
									exact
									path="/"
									render={(props) => <LandingBody {...props} lang={this.state.lang} />}
								/>

								<Route
									exact
									path="/profile"
									render={(props) => <Profile {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/changePassword"
									render={(props) => <ChangePassword {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/about"
									render={(props) => <About {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/approvedCompanies"
									render={(props) => <ApprovedCompanies {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/journal"
									render={(props) => <Companies {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/register"
									render={(props) => <Register1 {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/login"
									render={(props) => <Login {...props} lang={this.state.lang} />}
								/>
								<Route exact path="/registerAdmin" component={adminPage} />
								<Route exact path="/dropDown" component={DropdownTrial} />
								<Route exact path="/dropDownCity" component={DropdownCities} />
								<Route exact path="/dropDownGovernorate" component={DropdownGovernorates} />
								<Route
									exact
									path="/unassignedForm"
									render={(props) => <UnassignedForm {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/lawyerAcceptedForms"
									render={(props) => <AssignToReviewer {...props} lang={this.state.lang} />}
								/>
								<Route exact path="/GetReviewer" component={GetCaseReviewer} />

								<Route
									exact
									path="/editprofile"
									render={(props) => <EditProfile {...props} lang={this.state.lang} />}
								/>
								{/* <Route
									exact
									path="/showsscform"
									render={(props) => (
										<InProgressSSCCases
											{...props}
											lang={this.state.lang}
											setFormId={this.setFormId}
										/>
									)}
								/>
								<Route
									exact
									path="/showspcform"
									render={(props) => (
										<InProgressSPCCases
											{...props}
											lang={this.state.lang}
											setFormId={this.setFormId}
										/>
									)}
								/> */}
								<Route
									exact
									path="/companyName"
									render={(props) => <GetFormByCompanyName {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/getCaseLawyer"
									render={(props) => <GetCaseLawyer {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/companyPdf"
									render={(props) => <companyPDF {...props} lang={this.state.lang} />}
								/>

								<Route
									exact
									path="/forgotPassword"
									render={(props) => <ForgotPassword {...props} lang={this.state.lang} />}
								/>
								<Route exact path="/reset/:token" component={ResetPassword} />
								<Route
									exact
									path="/CreateANewCompany"
									render={(props) => <CreateANewCompany {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/attributeInArray"
									render={(props) => <AttributeArray {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/investorInProgressform"
									render={(props) => (
										<InProgressInvestorCases
											{...props}
											lang={this.state.lang}
											setFormId={this.setFormId}
										/>
									)}
								/>
								<Route
									exact
									path="/adminprofile"
									render={(props) => <AdminProfile {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/editinvcompany"
									render={(props) => <EditInvCompany {...props} lang={this.state.lang} />}
								/>
								<Route
									exact
									path="/editlawyercompany"
									render={(props) => <EditLawyerCompany {...props} lang={this.state.lang} />}
								/>
							</div>

							{currentLocation === '/' ? (
								<Side changelang={this.changelang} />
							) : (
								<NewNavBar changelang={this.changelang} />
							)}
							{currentLocation === '/' ? null : <Footer />}
						</Router>
					</div>
				</Provider>
			</body>
			</Page>
			</div>
		);
	}
}

export default App;
