import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import 'mdbreact/dist/css/mdb.css';
import GetAllReviewerForms from '../form/GetAllReviewerForms';

class Companies extends Component {
	state = {
		companies: []
	};
	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/users/getUserForms', { headers: { Authorization: localStorage.getItem('jwtToken') } })
			.then((res) => {
				if (Array.isArray(res.data.data)) {
					this.setState({ companies: res.data.data });
				}
			});
	}

	sort = () => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/users/SpecificFormSortedByFormId', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				this.setState({ forms: res.data.data });
				alert('Cases have been sorted');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	tabRow() {
		return this.state.companies.map(function(company, i) {
			return <GetAllReviewerForms company={company} key={i} />;
		});
	}
	render() {
		return (
			<div>
				<Button variant="nada" block disabled>
					<h1>specific reviewer cases</h1>
				</Button>
				<Button variant="dark" onClick={() => this.sort()}>
					Sort the cases by ID{' '}
				</Button>
				<Table stripped bordered hover variant="dark" size="sm">
					<thead>
						<tr>
							<th>Name</th>
							<th>Name In English </th>
							<th>Governorate</th>
							<th>City </th>
							<th>Address </th>
							<th>Telephone </th>
							<th>Fax </th>
							<th>Currency </th>
							<th>Capital </th>
							<th>Type </th>
							<th>Creation Date </th>
							<th>Accept Case</th>
							<th>Reject Case</th>
							<th>Add Comments</th>
						</tr>
					</thead>
					<tbody>{this.tabRow()}</tbody>
				</Table>
			</div>
		);
	}
}
export default Companies;
