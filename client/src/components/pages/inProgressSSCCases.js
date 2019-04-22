import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import InProgressSSCCasesComponents from '../user/inProgressSSCCasesComponents';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
class InProgressSSCCases extends Component {
	state = {
		inProgressSSCCases: []
	};
	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/users/getInProgressSSCCases/', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				if (Array.isArray(res.data.data)) {
					this.setState({ inProgressSSCCases: res.data.data });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	tabRow = () => {
		return this.state.inProgressSSCCases.map((inProgressSSCCase, i) => {
			return (
				<InProgressSSCCasesComponents
					inProgressSSCCase={inProgressSSCCase}
					setFormId={this.props.setFormId}
					key={i}
				/>
			);
		});
	};
	render() {
		return (
			<div style={{ paddingLeft: '60px', justifyItems: 'center' }}>
				<h2 align="center">
					<Badge variant="dark">Your In progress Cases</Badge>
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
								<th>Type</th>
								<th>Creation Date</th>
								<th>Lawyer Comments</th>
								<th>Reviewer Comments</th>
								<th>Edit</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</Table>
				</Navbar>
			</div>
		);
	}
}
export default InProgressSSCCases;
