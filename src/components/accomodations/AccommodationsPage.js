import React from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { useState, useEffect } from "react";
import Heading from "../layout/Heading"
import SubHeading from "../layout/SubHeading"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


function AccommodationsPage() {

    const [hotels, setHotels] = useState([]);
    const [bbs, setBbs] = useState ([]);
    const [guesthouses, setGuesthouses] = useState ([]);

    const fetchData = () => {
        const urlHotels = BASE_URL + `/hotels`;
        const urlBbs = BASE_URL + `/b-and-bs`;
        const urlGuesthouses = BASE_URL + `/guesthouses`;

        const getHotels = axios.get(urlHotels);
        const getBbs = axios.get(urlBbs);
        const getGuesthouses = axios.get(urlGuesthouses);

        axios.all([getHotels, getBbs, getGuesthouses])
        .then(axios.spread((...allData) => {

            const allDataHotels = allData[0].data
            const allDataBbs = allData[1].data
            const allDataGuesthouses = allData[2].data

            setHotels(allDataHotels);
            setBbs(allDataBbs);
            setGuesthouses(allDataGuesthouses);
        })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <Container>
						<Heading  content="Accommodations page" />
						<Row>
							<Col sm={12} md={4}>
                                {hotels.map((hotel) => {
                                    return (
                                        <>
                                        <h2>{hotel.name}</h2>
                                        </>
                                        );
                                })}
							</Col>
							<Col sm={12} md={4}>
                                {bbs.map((bb) => {
                                    return (
                                        <>
                                        <h2>{bb.name}</h2>
                                        </>
                                        );
                                    })}
							</Col>
							<Col sm={12} md={4}>
                                {guesthouses.map((guesthouse) => {
                                    return (
                                        <>
                                        <h2>{guesthouse.name}</h2>
                                        </>
                                        );
                                    })}
							</Col>
						</Row>
					</Container>


                    <Container>


                        <SubHeading content="Hotels" />
                        <div className="pages">
                            {hotels.map((hotel) => {

                                return (
                                    <div className="col-md-4 col-12" key={hotel.id}>
                                            <Card >
                                                <Card.Text className="type">{hotel.type}</Card.Text>
                                                <Card.Text className="trips"><i className="far fa-heart"></i></Card.Text>
                                                    <Card.Img variant="top" src={hotel.image_url} />
                                                        <Card.Title>
                                                            <h5>{hotel.name}</h5>
                                                        </Card.Title>
                                                        <Card.Text className="location"><i className="fas fa-map-marker-alt"></i>{hotel.location}</Card.Text>
                                                        <Card.Text className="stay">{hotel.stay}</Card.Text>
                                                        <Card.Text className="price">NOK {hotel.price}</Card.Text>
                                                        <Link to={`/home/hotels/${hotel.id}`} className="accommodation--button" ><Button variant="primary">View More!</Button></Link>
                                            </Card>
                                    </div>
                                );
                            })}
                        </div>

                        <SubHeading content="B&B's" />
                        <div className="pages">
                            {bbs.map((bb) => {

                                return (
                                    <div className="col-md-4 col-12" key={bb.id}>
                                            <Card >
                                                <Card.Text className="type">{bb.type}</Card.Text>
                                                <Card.Text className="trips"><i className="far fa-heart"></i></Card.Text>
                                                    <Card.Img variant="top" src={bb.image_url} />
                                                        <Card.Title>
                                                            <h5>{bb.name}</h5>
                                                        </Card.Title>
                                                        <Card.Text className="location"><i className="fas fa-map-marker-alt"></i>{bb.location}</Card.Text>
                                                        <Card.Text className="stay">{bb.stay}</Card.Text>
                                                        <Card.Text className="price">NOK {bb.price}</Card.Text>
                                                        <Link to={`/home/hotels/${bb.id}`} className="accommodation--button" ><Button variant="primary">View More!</Button></Link>
                                            </Card>
                                    </div>
                                );
                            })}
                        </div>

                        <SubHeading content="Guesthouses" />
                        <div className="pages">
                            {guesthouses.map((guesthouse) => {

                                return (
                                    <div className="col-md-4 col-12" key={guesthouse.id}>
                                            <Card >
                                                <Card.Text className="type">{guesthouse.type}</Card.Text>
                                                <Card.Text className="trips"><i className="far fa-heart"></i></Card.Text>
                                                    <Card.Img variant="top" src={guesthouse.image_url} />
                                                        <Card.Title>
                                                            <h5>{guesthouse.name}</h5>
                                                        </Card.Title>
                                                        <Card.Text className="location"><i className="fas fa-map-marker-alt"></i>{guesthouse.location}</Card.Text>
                                                        <Card.Text className="stay">{guesthouse.stay}</Card.Text>
                                                        <Card.Text className="price">NOK {guesthouse.price}</Card.Text>
                                                        <Link to={`/home/hotels/${guesthouse.id}`} className="accommodation--button" ><Button variant="primary">View More!</Button></Link>
                                            </Card>
                                    </div>
                                );
                            })}
                        </div>

                    </Container>





        </div>
    )
}

export default AccommodationsPage
