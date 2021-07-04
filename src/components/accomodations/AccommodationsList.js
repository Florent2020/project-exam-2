import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import SubHeading from "../layout/SubHeading";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import bg from "../../images/bg_texture1.png";
import SearchBox from '../search/SearchBox';



function AccommodationList() {
    const [accommodations, setAccommodations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchField, setSearchField] = useState("");

	const url = BASE_URL + `/accommodations`;


	useEffect(function () {
		async function getAccommodations() {
			try {
				const response = await axios.get(url);
				console.log("response", response);
				setAccommodations(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getAccommodations();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (error) return <div>{}</div>;

	const filteredHotel = accommodations.filter(item => (
		item.name.toLowerCase().includes(searchField.toLowerCase())
	))


    return (
            <div className="admin">
				<Container className="accommodations--page">

					<SearchBox placeholder="Search accommodation ..." handleChange={(e) => setSearchField(e.target.value)} />

					<SubHeading  content="Accommodations Page" />
                    <Row>
                    <div className="pages">
                        {filteredHotel.map((accommodation) => {

                            return (
                                <div className="col-lg-4 col-md-6 col-12" key={accommodation.id}>
                                            <Card >
                                            <Card.Text className="type">{accommodation.type}</Card.Text>
                                            <Card.Text className="trips"><i className="far fa-heart"></i></Card.Text>
                                                <Card.Img variant="top" src={accommodation.image_url} />
                                                    <Card.Title>
                                                        <h5>{accommodation.name}</h5>
                                                    </Card.Title>
                                                    <Card.Text className="location"><i className="fas fa-map-marker-alt"></i>{accommodation.location}</Card.Text>
                                                    <Card.Text className="stay">{accommodation.stay}</Card.Text>
                                                    <Card.Text className="price">NOK {accommodation.price}</Card.Text>
                                                    <Link to={`/accommodation/detail/${accommodation.id}`} className="accommodation--button" ><Button variant="primary">View More!</Button></Link>
                                            </Card>
                                </div>
                            );
                        })}
                        </div>
                    </Row>
				</Container>
		    </div>
    )
}

export default AccommodationList





