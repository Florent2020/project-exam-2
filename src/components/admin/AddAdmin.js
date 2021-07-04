import React from 'react';
import Heading from "../layout/Heading";
// import { NavLink } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import bg from "../../images/bg_form.png";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationForm from "../forms/ValidationError";
import useAxios from "../../hooks/UseAxios";
import { BASE_URL } from "../../constants/api";


// import Media from "./media/Media";

// const url = BASE_URL + TOKEN_PATH;
// console.log(url);


const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
	description: yup.string().required("Description is required"),
	image_url: yup.string().required("Image is required"),
	image_url2: yup.string().required("Image is required"),
});

function AddAccommodation() {

	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);
	// const [state, setState] = useState([]);


	const url = BASE_URL + `/accommodations`;

	const history = useHistory();
	const http = useAxios();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		// event.preventDefault();

		setSubmitting(true);
		setServerError(null);

		try {
			const response = await http.post(url, data);
			console.log("response", response.data);
			history.push("/admin/accommodations");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

    return (
        <div className="admin add--admin" style={{ backgroundImage: `url(${bg})` }}>
			<Container  className="hotels--admin add--page">

						<Heading  content="Add page" />

						<form onSubmit={handleSubmit(onSubmit)}>
							{serverError && <ValidationForm>{serverError}</ValidationForm>}
							<fieldset disabled={submitting}>

								<Form.Row>
                                    <Col>
                                    <Col className="add--line">
                                        <Form.Group>
                                            <Form.Label>Hotel</Form.Label>
                                            <Form.Control name="name" defaultValue={submitting.name} placeholder="Hotel name" {...register("name")} />
                                            {errors.name && <ValidationForm>{errors.name.message}</ValidationForm>}
                                        </Form.Group>
                                    </Col>

                                    <Col className="add--line">
                                        <Form.Group>
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="number" name="price" defaultValue={submitting.price} placeholder="Price" {...register("price")} />
                                            {errors.price && <ValidationForm>{errors.price.message}</ValidationForm>}
                                        </Form.Group>
                                    </Col>

                                    <Col className="add--line">
                                        <Form.Group>
                                            <Form.Label>Type of accommodation</Form.Label>
                                            {/* <Form.Control name="type" defaultValue={submitting.type} placeholder="Type" {...register("type")} /> */}
                                            <Form.Control name="type" defaultValue={submitting.type} placeholder="Select type"  {...register("type")}  as="select">
												<option value="">Type</option>
												<option value="Hotel">Hotel</option>
												<option value="B&B's">B&B's</option>
												<option value="Guesthouses">Guesthouses</option>
											</Form.Control>
											{errors.type && <ValidationForm>{errors.type.message}</ValidationForm>}
                                        </Form.Group>
                                    </Col>
                                    </Col>

                                    <Col sm={12} md={6}>
                                        <Form.Group>
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control name="description" defaultValue={submitting.description} placeholder="Description" {...register("description")} as="textarea" rows={8} />
                                            {errors.description && <ValidationForm>{errors.description.message}</ValidationForm>}
                                        </Form.Group>
                                    </Col>
                                </Form.Row>


                                <Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>Location</Form.Label>
											<Form.Control name="location" defaultValue={submitting.location} placeholder="Location" {...register("location")} />
											{errors.location && <ValidationForm>{errors.location.message}</ValidationForm>}
										</Form.Group>
									</Col>

									<Col>
										<Form.Group >
											<Form.Label>Phone</Form.Label>
											<Form.Control type="number" name="phone" defaultValue={submitting.phone} placeholder="Phone" {...register("phone")} />
											{errors.phone && <ValidationForm>{errors.phone.message}</ValidationForm>}
										</Form.Group>
									</Col>
                                </Form.Row>

                                <Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>Breakfast</Form.Label>
											<Form.Control name="breakfast" defaultValue={submitting.breakfast} placeholder="Breakfast" {...register("breakfast")}  />
											{errors.breakfast && <ValidationForm>{errors.breakfast.message}</ValidationForm>}
										</Form.Group>
									</Col>

									<Col>
										<Form.Group >
											<Form.Label>Wifi</Form.Label>
											<Form.Control name="wifi" defaultValue={submitting.wifi} placeholder="Wifi" {...register("wifi")} />
											{errors.wifi && <ValidationForm>{errors.wifi.message}</ValidationForm>}
										</Form.Group>
									</Col>
                                </Form.Row>

                                <Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>Stay</Form.Label>
											<Form.Control name="stay" defaultValue={submitting.stay} placeholder="Stay" {...register("stay")}  />
											{errors.stay && <ValidationForm>{errors.stay.message}</ValidationForm>}
										</Form.Group>
									</Col>

									<Col>
										<Form.Group>
											<Form.Label>Parking</Form.Label>
											<Form.Control name="parking" defaultValue={submitting.parking} placeholder="Parking" {...register("parking")}  />
											{errors.parking && <ValidationForm>{errors.parking.message}</ValidationForm>}
										</Form.Group>
									</Col>
                                </Form.Row>

                                <Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>Star</Form.Label>
											{/* <Form.Control name="star" defaultValue={submitting.star} placeholder="Star" {...register("star")}  /> */}
											<Form.Control name="star" defaultValue={submitting.star} placeholder="Select Star" {...register("star")}   as="select">
												<option value="">Star</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</Form.Control>
											{errors.star && <ValidationForm>{errors.star.message}</ValidationForm>}
										</Form.Group>
									</Col>

									<Col>
										<Form.Group>
											<Form.Label>Cancellation</Form.Label>
											<Form.Control name="cancellation" defaultValue={submitting.cancellation} placeholder="Cancellation" {...register("cancellation")} />
											{errors.cancellation && <ValidationForm>{errors.cancellation.message}</ValidationForm>}
										</Form.Group>
									</Col>
                                </Form.Row>

                                <Form.Row>
									<Col>
										<Form.Group >
											<Form.Label>Fitness</Form.Label>
											<Form.Control name="fitness" defaultValue={submitting.fitness} placeholder="Fitness" {...register("fitness")}  />
											{errors.fitness && <ValidationForm>{errors.fitness.message}</ValidationForm>}
										</Form.Group>
									</Col>

									<Col>
										<Form.Group>
											<Form.Label>Image 1</Form.Label>
											<Form.Control name="image" defaultValue={submitting.image_url} placeholder="Image 1" {...register("image_url")} />
											{errors.image_url && <ValidationForm>{errors.image_url.message}</ValidationForm>}
										</Form.Group>
									</Col>
                                </Form.Row>

                                <Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>Image 2</Form.Label>
											<Form.Control name="image" defaultValue={submitting.image_url2} placeholder="Image 2" {...register("image_url2")} />
											{errors.image_url2 && <ValidationForm>{errors.image_url2.message}</ValidationForm>}
										</Form.Group>
									</Col>

									<Col>
										<Form.Group>
											<Form.Label>Image 3</Form.Label>
											<Form.Control name="image" defaultValue={submitting.image_url3} placeholder="Image 3" {...register("image_url3")} />
											{errors.image_url3 && <ValidationForm>{errors.image_url3.message}</ValidationForm>}
										</Form.Group>
									</Col>
                                </Form.Row>

                                {/* <Button variant="info"  name="add">
								<i className="fas fa-plus-square"></i>
                                    {submitting ? "Submitting..." : "Submit"}
                                </Button> */}


								<button><i className="fas fa-plus-square"></i>{submitting ? "Adding..." : "Add"}</button>

							</fieldset>
						</form>
			</Container>
		</div>
    )
}

export default AddAccommodation



