import React from 'react';
import { useState, useEffect } from "react";
import Heading from "../../layout/Heading";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
// import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from "../../../images/bg_form.png";
import DeleteEnquiry from "./DeleteEnquiry";

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

			{enquiries.length === 0 && <p className="empty--enquiries">No enquiry!</p>}
				<Row>
					{enquiries.map((enquiry) => {

						const format = { year: 'numeric', month: 'short', day: 'numeric' };
						const newFormat = new Intl.DateTimeFormat('en-GB', format);
						const checkIn = new Date(enquiry.checkIn);
						const checkOut = new Date(enquiry.checkOut);
						const createdAt = new Date(enquiry.created_at);
						const newCheckIn = newFormat.format(checkIn);
						const newCheckOut = newFormat.format(checkOut);
						const newCreatedAt = newFormat.format(createdAt);

						return (
							<>
								<Col sm={12} md={5} className="enquirie--table">
									<div key={enquiry.id}>
									<p className="sent">Sent: {newCreatedAt}</p>
									<h5>From: {enquiry.full_name}</h5>
									<p className="email">Email: {enquiry.email}</p>
									<p>Check In: {newCheckIn}</p>
									<p>Check Out: {newCheckOut}</p>
									<DeleteEnquiry id={enquiry.id} />
									<Link to={`/admin/viewEnquiries/${enquiry.id}`} className="enquirie--link">View details</Link>
									{/* <Button href={`/admin/viewEnquiries/${enquiry.id}`} className="enquirie--link" variant="info" type="submit">View details</Button> */}
									</div>
								</Col>
							</>
						);
					})}
				</Row>
		</Container>
	</div>
    )
}

export default EnquiriesAdmin
