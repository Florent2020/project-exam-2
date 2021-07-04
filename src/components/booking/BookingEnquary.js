import React from 'react';
import { useParams } from "react-router-dom";
 import { useState, useEffect } from "react";




import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import BookingForm from "../booking/BookingForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg from "../../images/bg_form.png";
import { Card } from 'react-bootstrap';
import axios from "axios";
import { BASE_URL } from "../../constants/api";

function Booking() {

    const { id } = useParams();

	const url = BASE_URL + `/accommodations/${id}`;

    const emptyInit = {};
    const [accommodation, setAccommodation] = useState(emptyInit);

	useEffect(
		function () {
			async function getDetail() {


				try {
					const response = await axios.get(url);
					console.log("response", response.data);
					setAccommodation(response.data);
				} catch (error) {
					// console.log(error);
					// setError(error.toString());
				} finally {
					// setLoading(false);
				}

			}
			getDetail();

		},
		// eslint-disable-next-line
		[]
	);


    return (
            <div className="booking" style={{ backgroundImage: `url(${bg})` }}>
                <Container className="booking__bg">
                    <Row>
                        <Col xs={12} md={5} className="booking__bg--left">
                            <h2>Book now at "<span>{accommodation.name}</span> "</h2>
                            <Card.Text>Please fill out the form to book your accommodation!</Card.Text>
                        </Col>
                        <Col xs={12} md={7} className="booking__bg--right">
                            <div className="booking__logo">
                                <Heading content="Booking Enquiry" />
                            </div>
                            <BookingForm  accName={accommodation.name}/>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Booking
