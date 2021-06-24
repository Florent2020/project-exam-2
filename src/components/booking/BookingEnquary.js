import React from 'react';
// import { useState, useEffect } from "react";


import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import BookingForm from "../booking/BookingForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg from "../../images/bg_form.png";
import { Card } from 'react-bootstrap';
// import axios from "axios";
// import { BASE_URL } from "../../constants/api";
// import { useParams } from "react-router-dom";


function Booking() {

    // let { id } = useParams();


	// const url = BASE_URL + `/hotels/${id}`;

    // const emptyInit = any;
    // const [accommodation, setAccommodation] = useState(emptyInit);

	// useEffect(
	// 	function () {
	// 		async function getDetail() {

	// 			try {
	// 				const response = await axios.get(url);
	// 				console.log("response", response.data);
	// 				setAccommodation(response.data);
	// 			} catch (error) {
	// 				// console.log(error);
	// 				// setError(error.toString());
	// 			} finally {
	// 				// setLoading(false);
	// 			}

	// 		}
	// 		getDetail();

	// 	},
	// 	// eslint-disable-next-line
	// 	[]
	// );


    return (
        <div className="booking" style={{ backgroundImage: `url(${bg})` }}>
                <Container className="booking__bg">
                    <Row>
                        <Col xs={12} md={5} className="booking__bg--left">
                            <SubHeading content="Book now at  "  />
                            <Card.Text>Please fill out the form to book your accommodation!</Card.Text>
                        </Col>
                        <Col xs={12} md={7} className="booking__bg--right">
                            <div className="booking__logo">
                                <Heading content="Booking Enquiry" />
                            </div>
                            <BookingForm />
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Booking
