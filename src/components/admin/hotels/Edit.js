import React from 'react';
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
// import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import Heading from "../../layout/Heading";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import bg from "../../../images/bg_form.png";
import Alert from "react-bootstrap/Alert";


import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../forms/ValidationError";
import useAxios from "../../../hooks/UseAxios";

const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
});

function EditHotel() {
    const [hotel, setHotel] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

    const [updated, setUpdated] = useState(false);
	const [fetchingHotel, setFetchingHotel] = useState(true);
	const [updatingHotel, setUpdatingHotel] = useState(false);
	const [updateError, setUpdateError] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

    const http = useAxios();

	let { id } = useParams();

	const url = BASE_URL + `/hotels/${id}`;


	useEffect(function () {
		async function getHotel() {
			try {
				const response = await http.get(url);
				console.log("response", response.data);
				setHotel(response);
			} catch (error) {
				console.log(error);
				setFetchError(error.toString());
			} finally {
				setFetchingHotel(false);
			}
		}

		getHotel();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


    async function onSubmit(data) {
		setUpdatingHotel(true);
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
			setUpdatingHotel(false);
		}
	}

	if (fetchingHotel) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (fetchError) return <div>{}</div>;


    return (
        <div className="admin" style={{ backgroundImage: `url(${bg})` }}>
					<Container className="hotels--admin">
                        <Heading content="Edit Post" />

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* {updated && <div className="success">The post was updated</div>} */}
                            {updated && <Alert variant="success">The Hotel was updated!</Alert>}

                            {updateError && <ValidationError>{updateError}</ValidationError>}

                            <fieldset disabled={updatingHotel}>

                                <Form.Group>
                                    <Form.Control name="name" defaultValue={hotel.name} placeholder="Hotel name" {...register("name")} />
                                    {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control name="description" defaultValue={hotel.description} placeholder="Description" {...register("description")} as="textarea" rows={6} />
                                    {errors.description && <ValidationError>{errors.description.message}</ValidationError>}
                                </Form.Group>


                                <Button variant="info" type="submit">
                                    Update
                                </Button>

                            </fieldset>
                        </form>
					</Container>
		</div>
    )
}

export default EditHotel
