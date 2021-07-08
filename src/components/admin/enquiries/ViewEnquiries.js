import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { BASE_URL } from "../../../constants/api";
import Heading from "../../layout/Heading";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import bg from "../../../images/bg_form.png";
import Nav from 'react-bootstrap/Nav';
// import DeleteEnquiries from "./DeleteEnquiry";


import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/UseAxios";

// const schema = yup.object().shape({
// 	name: yup.string().required("Name is required"),
//     description: yup.string().required("Description is required"),
// });

function ViewEnquiries() {
    const [hotels, setHotels] = useState(null);
    // const [updated, setUpdated] = useState(false);
	const [fetchingHotels, setFetchingHotels] = useState(true);
	const [updatingHotels, setUpdatingHotels] = useState(false);
	const [updateError, setUpdateError] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    // const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

    const { handleSubmit } = useForm();

    const http = useAxios();

	let { id } = useParams();

	const url = BASE_URL + `/enquiries/${id}`;


	useEffect(function () {
		async function getEnquiry() {
			try {
				const response = await http.get(url);
				console.log("response", response.data);
				setHotels(response.data);
			} catch (error) {
				console.log(error);
				setFetchError(error.toString());
			} finally {
				setFetchingHotels(false);
			}
		}

		getEnquiry();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


    async function onSubmit(data) {
		setUpdatingHotels(true);
		setUpdateError(null);
		// setUpdated(false);

		console.log(data);

		try {
			const response = await http.put(url, data);
			console.log("response", response.data);
			// setUpdated(true);
		} catch (error) {
			console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingHotels(false);
		}
	}

	if (fetchingHotels) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (fetchError) return <div>{}</div>;


    return (
        <div className="admin view--enquiry" style={{ backgroundImage: `url(${bg})` }}>
					<Container className="hotels--admin view--enquiry__page">
                        <Heading content="Enquiry Page" />

                        <form onSubmit={handleSubmit(onSubmit)}>

							<Nav.Link href="/admin/enquiries"><i className="fas fa-arrow-left"></i> Back to enquiries</Nav.Link>

                            <div>
                                <h3>At Hotel: {hotels.AccomodationName}</h3>
                            </div>

							<button className="reply--message" title="reply" href={`mailto:${hotels.email}`}>
                            	<i className="fas fa-reply"></i>
								Reply
							</button>

							{/* <DeleteEnquiries id={hotels.id} /> */}

                        </form>
					</Container>
		</div>
    )
}

export default ViewEnquiries
