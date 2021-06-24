import React from 'react';
import { Link } from "react-router-dom";
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { BASE_URL } from "../../constants/api";
import Button from "react-bootstrap/Button";

function AccommodationList({accommodations}) {
    return (
        <div className="pages">
            {accommodations.map((accommodation) => {

            return (
                 <div className="col-md-4 col-12" key={accommodation.id}>
                        {/* <Col xs={12} md={4}> */}
                            <Card >
                            <Card.Text className="type">{accommodation.type}</Card.Text>
                            <Card.Text className="trips"><i className="far fa-heart"></i></Card.Text>
                                                          {/* Here you need to change */}
                                <Card.Img variant="top" src={accommodation.image_url} />
                {/* Here you need to change -> now its getting the url from strapi, not the uploaded file */}
                                    <Card.Title>
                                        <h5>{accommodation.name}</h5>
                                    </Card.Title>
                                    <Card.Text className="location"><i className="fas fa-map-marker-alt"></i>{accommodation.location}</Card.Text>
                                    <Card.Text className="stay">{accommodation.stay}</Card.Text>
                                    <Card.Text className="price">NOK {accommodation.price}</Card.Text>
                                    <Link to={`/home/hotels/${accommodation.id}`} className="accommodation--button" ><Button variant="primary">View More!</Button></Link>
                            </Card>
                        {/* </Col> */}
                </div>
            );
        })}
    </div>
    )
}

export default AccommodationList
