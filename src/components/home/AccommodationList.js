import React from 'react';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BASE_URL } from "../../constants/api";
import Button from "react-bootstrap/Button";

function AccommodationList({accommodations}) {
    return (
        <div className="pages">
            {accommodations.map((accommodation) => {

            return (
                 <>
                        <Col xs={12} md={4}>
                            <Card key={accommodation.id} >
                                <p  className="type">{accommodation.type}</p>
                                <p  className="trips"><i className="far fa-heart"></i></p>
                                <Card.Img variant="top" src={`${BASE_URL}${accommodation.image[0].url}`} />
                                    <Card.Title>
                                        <h5>{accommodation.name}</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <p  className="location"><i className="fas fa-map-marker-alt"></i>{accommodation.location}</p>
                                        <p  className="stay">{accommodation.stay}</p>
                                        <p  className="price">NOK {accommodation.price}</p>
                                    </Card.Text>
                                    <Link to={`/home/hotels/${accommodation.id}`} className="accommodation--button" ><Button variant="primary">View More!</Button></Link>
                            </Card>
                        </Col>
                </>
            );
        })}
    </div>
    )
}

export default AccommodationList
