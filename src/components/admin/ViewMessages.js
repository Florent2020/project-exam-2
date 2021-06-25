// import React from 'react';
import { useState, useEffect } from "react";
// import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
// import axios from "axios";
import { BASE_URL } from "../../constants/api";
import Heading from "../layout/Heading";
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import bg from "../../images/bg_form.png";
// import Alert from "react-bootstrap/Alert";


import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import ValidationError from "../../forms/ValidationError";
import useAxios from "../../hooks/UseAxios";
import DeleteAccommodation from "./Delete";

// const schema = yup.object().shape({
// 	name: yup.string().required("Name is required"),
//     description: yup.string().required("Description is required"),
// });

function ViewMessages() {
    const [message, setMessage] = useState(null);
    const [updated, setUpdated] = useState(false);
	const [fetchingMessage, setFetchingMessage] = useState(true);
	const [updatingMessage, setUpdatingMessage] = useState(false);
	const [updateError, setUpdateError] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    // const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

    const { handleSubmit } = useForm();

    const http = useAxios();

	let { id } = useParams();

	const url = BASE_URL + `/messages/${id}`;


	useEffect(function () {
		async function getMessage() {
			try {
				const response = await http.get(url);
				console.log("response", response.data);
				setMessage(response.data);
			} catch (error) {
				console.log(error);
				setFetchError(error.toString());
			} finally {
				setFetchingMessage(false);
			}
		}

		getMessage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


    async function onSubmit(data) {
		setUpdatingMessage(true);
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
			setUpdatingMessage(false);
		}
	}

	if (fetchingMessage) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (fetchError) return <div>{}</div>;


    return (
        <div className="admin view--message" style={{ backgroundImage: `url(${bg})` }}>
					<Container className="hotels--admin view--message__page">
                        <Heading content="Edit Page" />

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div>
                                <h3>{message.full_name}</h3>
                                <p>{message.email}</p>
                                <p>{message.message}</p>
                            </div>


                                <Button variant="info" type="submit" name="update">
                                    <i className="fas fa-sync-alt"></i>
                                    Update
                                </Button>

                                {/* <Button variant="warning" type="submit" name="delete">
                                    <i className="fas fa-trash"></i>
                                    Delete
                                </Button> */}

                                <DeleteAccommodation id={message.id} />

                        </form>
					</Container>
		</div>
    )
}

export default ViewMessages
