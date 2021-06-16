// import { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import Pagination from "./Pagination";
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Spinner from 'react-bootstrap/Spinner';
// import axios from "axios";
// import { BASE_URL } from "../../constants/api";

// export default function AccommodationList() {
// 	const [hotels, setHotels] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [hotelsPerPage, setHotelsPerPage] = useState(6);

// 	const url1 = BASE_URL + `/hotels`;
//     // const url2 = BASE_URL + `/bbs`;
//     // const url3 = BASE_URL + `/guesthouses`;


// 	useEffect(function ()  {

// 		async function getHotel() {
// 			try {
// 				const response = await axios.get(url1);
// 				console.log("response", response);
// 				setHotels(response.data);
// 			} catch (error) {
// 				console.log(error);
// 				setError(error.toString());
// 			} finally {
// 				setLoading(false);
// 			}
// 		}


// 		getHotel();
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, []);


// 	console.log(hotels);

//     const indexOfLastHotel = currentPage * hotelsPerPage;
//     const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
//     const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

// 	const paginate = pageNumber => setCurrentPage(pageNumber);

// 	if (loading) return <div>
// 		<Spinner animation="border" role="status" variant="success">
// 			<span className="sr-only">Loading...</span>
// 		</Spinner>
// 	</div>;

// 	if (error) return <div>{}</div>;

// 	return (
// 		<div className="pages">
// 			{currentHotels.map((hotel) => {

// 				return (
//                     <>
//                             <Col xs={4}>
//                                 <Card key={hotel.id} >
//                                     <Card.Img variant="top" src={`${BASE_URL}${hotel.image[0].url}`} />
//                                         <Card.Title>
//                                             <h5>{hotel.name}</h5>
//                                         </Card.Title>
//                                         <Card.Text>
//                                             <p className="location"><i className="fas fa-map-marker-alt"></i>{hotel.location}</p>
//                                             <p className="stay">{hotel.stay}</p>
//                                             <p className="price">NOK {hotel.price}</p>
//                                             <Link to="#"className="accommodation--button" ><Button variant="primary">View More!</Button></Link>
//                                         </Card.Text>

//                                 </Card>
//                             </Col>
// 						<Pagination hotelsPerPage={hotelsPerPage} totalHotels={hotels.length} paginate={paginate} />
//                     </>
// 				);
// 			})}
// 		</div>


// 	);
// }






// async function getHotel() {
// 	try {
// 		const [response1, response2] = await Promise.all([
// 			axios.get(url1),
// 			axios.get(url3)]);
// 		// const alo = await axios.get(url3);
// 		console.log("response1", response1.data);
// 		console.log("response2", response2.data);
// 		// console.log("alo", alo);
// 		const hotel = await response1.data
// 		const bb = await response2.data

// 		setHotels({hotel, bb});

// 	} catch (error) {
// 		console.log(error);
// 		setError(error.toString());
// 	} finally {

// 		setLoading(false);
// 	}
// }