// import React from 'react';
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
// import axios from "axios";
import { BASE_URL } from "../../constants/api";
import Heading from "../layout/Heading";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import bg from "../../images/bg_form.png";
import Alert from "react-bootstrap/Alert";


import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../forms/ValidationError";
import useAxios from "../../hooks/UseAxios";
import DeleteAccommodation from "./Delete";

const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
});

function EditHotel() {
    const [accommodation, setAccomodation] = useState(null);
    const [updated, setUpdated] = useState(false);
	const [fetchingHotel, setFetchingAccommodation] = useState(true);
	const [updatingAccommodation, setUpdatingAccommodation] = useState(false);
	const [updateError, setUpdateError] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    // const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

    const http = useAxios();

	let { id } = useParams();

	const url = BASE_URL + `/accommodations/${id}`;


	useEffect(function () {
		async function getAccommodation() {
			try {
				const response = await http.get(url);
				console.log("response", response.data);
				setAccomodation(response.data);
			} catch (error) {
				console.log(error);
				setFetchError(error.toString());
			} finally {
				setFetchingAccommodation(false);
			}
		}

		getAccommodation();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


    async function onSubmit(data) {
		setUpdatingAccommodation(true);
		setUpdateError(null);
		setUpdated(false);

		console.log(data);

		try {
			const response = await http.put(url, data);
			console.log("response", response.data);
			setUpdated(true);
		} catch (error) {
			console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingAccommodation(false);
		}
	}

	if (fetchingHotel) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (fetchError) return <div>{}</div>;


    return (
        <div className="admin edit--admin" style={{ backgroundImage: `url(${bg})` }}>
					<Container className="hotels--admin edit--page">
                        <Heading content="Edit Page" />

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {updated && <Alert variant="success">The Hotel was updated!</Alert>}

                            {updateError && <ValidationError>{updateError}</ValidationError>}

                            <fieldset disabled={updatingAccommodation}>


                                <Form.Row>
                                    <Col>
                                    <Col className="edit--line">
                                        <Form.Group>
                                            <Form.Label>Hotel</Form.Label>
                                            <Form.Control name="name" defaultValue={accommodation.name} placeholder="Hotel name" {...register("name")} />
                                            {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
                                        </Form.Group>
                                    </Col>

                                    <Col className="edit--line">
                                        <Form.Group>
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="number" name="price" defaultValue={accommodation.price} placeholder="Price" {...register("price")} />
                                            {errors.price && <ValidationError>{errors.price.message}</ValidationError>}
                                        </Form.Group>
                                    </Col>

                                    <Col className="edit--line">
                                        <Form.Group>
                                            <Form.Label>Type of accommodation</Form.Label>
                                            <Form.Control name="type" defaultValue={accommodation.type} placeholder="Type" {...register("type")} />
                                            {errors.type && <ValidationError>{errors.type.message}</ValidationError>}
                                        </Form.Group>
                                    </Col>
                                    </Col>

                                    <Col sm={12} md={6}>
                                        <Form.Group>
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control name="description" defaultValue={accommodation.description} placeholder="Description" {...register("description")} as="textarea" rows={8} />
                                            {errors.description && <ValidationError>{errors.description.message}</ValidationError>}
                                        </Form.Group>
                                    </Col>
                                </Form.Row>


                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control name="location" defaultValue={accommodation.location} placeholder="Location" {...register("location")} />
                                        {errors.location && <ValidationError>{errors.location.message}</ValidationError>}
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" name="phone" defaultValue={accommodation.phone} placeholder="Phone" {...register("phone")} />
                                        {errors.phone && <ValidationError>{errors.phone.message}</ValidationError>}
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Breakfast</Form.Label>
                                        <Form.Control name="breakfast" defaultValue={accommodation.breakfast} placeholder="Breakfast" {...register("breakfast")} />
                                        {errors.breakfast && <ValidationError>{errors.breakfast.message}</ValidationError>}
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Wifi</Form.Label>
                                        <Form.Control name="wifi" defaultValue={accommodation.wifi} placeholder="Wifi" {...register("wifi")}  />
                                        {errors.wifi && <ValidationError>{errors.wifi.message}</ValidationError>}
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Stay</Form.Label>
                                        <Form.Control name="stay" defaultValue={accommodation.stay} placeholder="Stay" {...register("stay")} />
                                        {errors.stay && <ValidationError>{errors.stay.message}</ValidationError>}
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Parking</Form.Label>
                                        <Form.Control name="parking" defaultValue={accommodation.parking} placeholder="Parking" {...register("parking")} />
                                        {errors.parking && <ValidationError>{errors.parking.message}</ValidationError>}
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Star</Form.Label>
                                        <Form.Control name="star" defaultValue={accommodation.star} placeholder="Star" {...register("star")} />
                                        {errors.star && <ValidationError>{errors.star.message}</ValidationError>}
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Cancellation</Form.Label>
                                        <Form.Control name="cancellation" defaultValue={accommodation.cancellation} placeholder="Cancellation" {...register("cancellation")} />
                                        {errors.cancellation && <ValidationError>{errors.cancellation.message}</ValidationError>}
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Fitness</Form.Label>
                                        <Form.Control name="fitness" defaultValue={accommodation.fitness} placeholder="Fitness" {...register("fitness")} />
                                        {errors.fitness && <ValidationError>{errors.fitness.message}</ValidationError>}
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Image 1</Form.Label>
                                        <Form.Control name="image" defaultValue={accommodation.image_url} placeholder="Image 1" {...register("image_url")} />
                                        {errors.image_url && <ValidationError>{errors.image_url.message}</ValidationError>}
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Image 2</Form.Label>
                                        <Form.Control name="image" defaultValue={accommodation.image_url2} placeholder="Image 2" {...register("image_url2")} />
                                        {errors.image_url2 && <ValidationError>{errors.image_url2.message}</ValidationError>}
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Image 3</Form.Label>
                                        <Form.Control name="image" defaultValue={accommodation.image_url3} placeholder="Image 3" {...register("image_url3")} />
                                        {errors.image_url3 && <ValidationError>{errors.image_url3.message}</ValidationError>}
                                    </Form.Group>
                                </Form.Row>

                                <Button variant="info" type="submit" name="update">
                                    <i className="fas fa-sync-alt"></i>
                                    Update
                                </Button>

                                {/* <Button variant="warning" type="submit" name="delete">
                                    <i className="fas fa-trash"></i>
                                    Delete
                                </Button> */}

                                <DeleteAccommodation id={accommodation.id} />

                            </fieldset>
                        </form>
					</Container>
		</div>
    )
}

export default EditHotel
