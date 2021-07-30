import JumbotronPage from "./Jumbotron";
import AccommodationPart from "./AccommodationPart";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { useState, useEffect } from "react";
import AccommodationList from "./AccommodationList";
import ErrorMessage from "../layout/ErrorMessage";
import Loader from "../layout/Loader";
import Pagination from "./Pagination";
import OurGuarantees from "./OurGuarantees";
import ThingsToDo from "./ThingsToDo";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function HomePage({ favoriteTrips }) {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [accommodationsPerPage] = useState(6);

  const url = BASE_URL + `/accommodations`;
  const [searchByCriteria, setsearchByCriteria] = useState("");

  useEffect(
    function () {
      async function getHotel() {
        try {
          const response = await axios.get(url + searchByCriteria);
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
    },
    [url, searchByCriteria]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }

  const indexOfLastAccommodation = currentPage * accommodationsPerPage;
  const indexOfFirstAccommodation =
    indexOfLastAccommodation - accommodationsPerPage;
  const currentAccommodations = accommodations.slice(
    indexOfFirstAccommodation,
    indexOfLastAccommodation
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getHotelList = async ({ searchBy }) => {
    setsearchByCriteria("/?_q=" + searchBy);
  };

  return (
    <>
      <JumbotronPage />
      <AccommodationPart />
      <Container className="home--container">
        <div className="search--home">
          <Form.Group>
            <i className="fas fa-search"></i>
            <Form.Control
              type="search"
              className="search"
              placeholder="Search accommodation ..."
              onChange={(e) => getHotelList({ searchBy: e.target.value })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </div>

        <Pagination
          accommodationsPerPage={accommodationsPerPage}
          totalAccommodations={accommodations.length}
          paginate={paginate}
          pageIndex={currentPage}
        />
        <AccommodationList
          accommodations={currentAccommodations}
          favoriteTrips={favoriteTrips}
        />
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
