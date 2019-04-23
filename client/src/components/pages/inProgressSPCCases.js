import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import InProgressSPCCasesComponents from '../user/inProgressSPCCaseComponent';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
class InProgressSPCCases extends Component {
	state = {
		inProgressSPCCases: []
	};
	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/users/getInProgressSPCCases/', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				console.log(res);
				if (Array.isArray(res.data.data)) {
					this.setState({ inProgressSPCCases: res.data.data });
				}
			})
			.catch((err) => alert(err.response.data.errmsg || err.response.data));
	}
	tabRow = () => {
		return this.state.inProgressSPCCases.map((inProgressSPCCase, i) => {
			return (
				<InProgressSPCCasesComponents
					inProgressSPCCase={inProgressSPCCase}
					setFormId={this.props.setFormId}
					key={i}
				/>
			);
		});
	};
	render() {
		return (
			<div style={{ justifyItems: 'center' }}>
				<h2 align="center">
					<Badge style={{ backgroundColor: '#64b9e0', marginTop: '80px' }} variant="dark">
						Your In progress Cases
					</Badge>
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
export default InProgressSPCCases;
