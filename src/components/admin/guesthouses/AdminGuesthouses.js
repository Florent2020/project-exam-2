import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import Heading from "../../layout/Heading";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import bg from "../../../images/bg_form.png";



function AdminGuesthouses() {
    const [ghs, setGhs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = BASE_URL + `/guesthouses`;


	useEffect(function () {
		async function getBBs() {
			try {
				const response = await axios.get(url);
				console.log("response", response);
				setGhs(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getBBs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (error) return <div>{}</div>;


    return (
            <div className="admin" style={{ backgroundImage: `url(${bg})` }}>
				<Container className="hotels--admin">
					<Heading  content="B&B's" />
                    <Row>
                        {ghs.map((gh) => {
                            return (

                                <Col sm={12} md={6} lg={4} key={gh.id}>
                                    <Card >
                                        <Card.Img variant="top" src={`${BASE_URL}${gh.image[0].url}`} />
                                        <Card.Body>
                                            <Card.Title>
                                                <h5>{gh.name}</h5>
                                            </Card.Title>
                                            <Link to={`/home/guesthouses/${gh.id}`} className="accommodation--button" ><Button variant="primary"><i className="fas fa-edit"></i>Edit</Button></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            );
                        })}
                    </Row>
				</Container>
		    </div>
    )
}

export default AdminGuesthouses
