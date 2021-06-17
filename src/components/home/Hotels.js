import React from 'react';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BASE_URL } from "../../constants/api";
import Button from "react-bootstrap/Button";

function Hotels({hotels}) {
    return (
        <div className="pages">
            {hotels.map((hotel) => {

            return (
                 <>
                        <Col xs={12} md={4}>
                            <Card key={hotel.id} >
                                <p  className="type">{hotel.type}</p>
                                <p  className="trips"><i className="far fa-heart"></i></p>
                                <Card.Img variant="top" src={`${BASE_URL}${hotel.image[0].url}`} />
                                    <Card.Title>
                                        <h5>{hotel.name}</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <p  className="location"><i className="fas fa-map-marker-alt"></i>{hotel.location}</p>
                                        <p  className="stay">{hotel.stay}</p>
                                        <p  className="price">NOK {hotel.price}</p>
                                    </Card.Text>
                                    <Link to="#" className="accommodation--button" ><Button variant="primary">View More!</Button></Link>
                            </Card>
                        </Col>
                    {/* <Pagination hotelsPerPage={hotelsPerPage} totalHotels={hotels.length} paginate={paginate} /> */}
                </>
            );
        })}
    </div>
    )
}

export default Hotels
