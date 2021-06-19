import JumbotronPage from "./Jumbotron";
import AccommodationPart from "./AccommodationPart";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { useState, useEffect } from "react";
import AccommodationList from "./AccommodationList";
import Pagination from "./Pagination";
import Spinner from 'react-bootstrap/Spinner';
import OurGuarantees from "./OurGuarantees";
import ThingsToDo from "./ThingsToDo";



import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

function HomePage() {

    const [accommodations, setAccommodations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [accommodationsPerPage] = useState(3);

	const url1 = BASE_URL + `/hotels`;
    // const url2 = BASE_URL + `/bbs`;
    // const url3 = BASE_URL + `/guesthouses`;


	useEffect(function () {

		async function getHotel() {
			try {
				const response = await axios.get(url1);
				console.log("response", response);
				setAccommodations(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getHotel();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    if (loading) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (error) return <div>{}</div>;

    const indexOfLastAccommodation = currentPage * accommodationsPerPage;
    const indexOfFirstAccommodation = indexOfLastAccommodation - accommodationsPerPage;
    const currentAccommodations = accommodations.slice(indexOfFirstAccommodation, indexOfLastAccommodation);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
            <>
                <JumbotronPage />
                <AccommodationPart />
                <Container>
                    <Pagination
                            accommodationsPerPage={accommodationsPerPage}
                            totalAccommodations={accommodations.length}
                            paginate={paginate}
                        />
                    <AccommodationList accommodations={currentAccommodations} />
                    <Pagination
                        accommodationsPerPage={accommodationsPerPage}
                        totalAccommodations={accommodations.length}
                        paginate={paginate}
                    />
                </Container>
                <OurGuarantees />
                <ThingsToDo />
            </>

    );
}

export default HomePage;