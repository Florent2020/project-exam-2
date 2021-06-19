import React from 'react';
import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import BookingForm from "../booking/BookingForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg from "../../images/bg_form.png";

function Booking() {
    return (
        <div className="booking" style={{ backgroundImage: `url(${bg})` }}>
                <Container className="booking__bg">
                    <Row>
                        <Col xs={12} md={5} className="booking__bg--left">
                            <SubHeading content='Book now at "Hotel Name"' />
                            <div>Please fill out the form to book your accommodation!</div>
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
