import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import UnassignedComponent from '../user/UnassignedComponent';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
var mongoose = require('mongoose');

class ShowUnassignedForms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ShowUnassignedForms: []
		};
		this.delete = this.delete.bind(this);
	}

	delete(UnassignedForm) {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');

		axios
			.delete('/routes/api/forms/deleteUnassignedForm/' + mongoose.Types.ObjectId(UnassignedForm._id), {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				console.log(res.data);
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
				axios
					.get('/routes/api/forms/getUnAssignedForm', {
						headers: { Authorization: localStorage.getItem('jwtToken') }
					})
					.then((res) => {
						console.log(res);
						if (Array.isArray(res.data.data)) {
							this.setState({ ShowUnassignedForms: res.data.data });
						}
					})
					.catch((err) => alert(err.response.data.errmsg || err.response.data));
				alert('Form Deleted');
			})
			.catch((err) => alert(err.response.data.errmsg || err.response.data));
	}

	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/forms/getUnAssignedForm', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				console.log(res);
				if (Array.isArray(res.data.data)) {
					this.setState({ ShowUnassignedForms: res.data.data });
				}
			})
			.catch((err) => alert(err.response.data.errmsg || err.response.data));
	}
	tabRow = () => {
		return this.state.ShowUnassignedForms.map((ShowUnassignedForm, i) => {
			return (
				<UnassignedComponent
					ShowUnassignedForm={ShowUnassignedForm}
					setFormId={this.props.setFormId}
					key={i}
					delete={this.delete}
				/>
			);
		});
	};
	render() {
		return (
			<div style={{ paddingLeft: '60px', justifyItems: 'center' }}>
				<h2 align="center">
					<Badge variant="dark">Your Unassigned forms</Badge>
				</h2>
				<Navbar bg="dark">
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>Name</th>
								<th>Name In English</th>
								<th>Type</th>
								<th>Governorate</th>
								<th>City</th>
								<th>Address</th>
								<th>Telephone</th>
								<th>Fax</th>
								<th>Currency</th>
								<th>Capital</th>
								<th>Creation Date</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</Table>
				</Navbar>
			</div>
		);
	}
}
export default ShowUnassignedForms;
