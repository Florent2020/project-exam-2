import JumbotronPage from "./Jumbotron";
import AccommodationPart from "./AccommodationPart";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { useState, useEffect } from "react";
import AccommodationList from "./AccommodationList";
import ErrorMessage from "../layout/ErrorMessage";
import Loader from "../layout/Loader"
import Pagination from "./Pagination";
import OurGuarantees from "./OurGuarantees";
import ThingsToDo from "./ThingsToDo";
import Container from 'react-bootstrap/Container';
// import SearchTerm from "../search/SearchTerm";
// import Row from 'react-bootstrap/Row';

function HomePage() {

    const [accommodations, setAccommodations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [accommodationsPerPage] = useState(3);
    // const [names, setNames] = useState([]);

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

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage message={`Error: ${error}`} />;
    }

    const indexOfLastAccommodation = currentPage * accommodationsPerPage;
    const indexOfFirstAccommodation = indexOfLastAccommodation - accommodationsPerPage;
    const currentAccommodations = accommodations.slice(indexOfFirstAccommodation, indexOfLastAccommodation);

    const paginate = pageNumber => setCurrentPage(pageNumber);
   //console.log(currentPage);



    return (
            <>
                <JumbotronPage />
                <AccommodationPart />
                <Container>
                    {/* <Search accommodations={accommodations}/> */}
                    <Pagination
                            accommodationsPerPage={accommodationsPerPage}
                            totalAccommodations={accommodations.length}
                            paginate={paginate}
                            pageIndex={currentPage}
                        />
                    <AccommodationList accommodations={currentAccommodations} />
                    <Pagination
                        accommodationsPerPage={accommodationsPerPage}
                        totalAccommodations={accommodations.length}
                        paginate={paginate}
                        pageIndex={currentPage}

                    />
                </Container>
                <OurGuarantees />
                <ThingsToDo />
            </>

    );
}

export default HomePage;