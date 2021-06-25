import React from 'react';
import { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { BASE_URL } from "../../constants/api";
// import { NavLink } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from "../../images/bg_form.png";

function EnquiriesAdmin() {

	const [enquiries, setEnquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = BASE_URL + `/enquiries`;


	useEffect(function () {
		async function getMessage() {
			try {
				const response = await axios.get(url);
				console.log("response", response.data);
				setEnquiries(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMessage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (error) return <div>{}</div>;

    return (
		<div className="admin enquiries--admin" style={{ backgroundImage: `url(${bg})` }}>
		<Container className="hotels--admin enquiries--page">
			<Heading content="Enquiries Page" />

			{enquiries.length === 0 && <p className="empty--enquiries">No enquiries!</p>}
				<Row>
					{enquiries.map((enquirie) => {

						const format = { year: 'numeric', month: 'short', day: 'numeric' };
						const newFormat = new Intl.DateTimeFormat('en-GB', format);
						const createdAt = new Date(enquirie.created_at);
						const newCreatedAt = newFormat.format(createdAt);
						return (
							<>
								<div className="enquirie--table" key={enquirie.id}>
									<Link to={`/admin/viewEnquirie/${enquirie.id}`} className="enquirie--link">
										<Col sm={12} md={3}>

											<h5>{enquirie.full_name}</h5>
										</Col>
										<Col sm={12} md={7}>
											<p>{enquirie.email}</p>
										</Col>
										<Col sm={12} md={2}>
											<p>{newCreatedAt}</p>
										</Col>
									</Link>
								</div>
							</>
						);
					})}
				</Row>
		</Container>
	</div>
    )
}

export default EnquiriesAdmin
