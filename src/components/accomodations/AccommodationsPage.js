import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AccommodationsList from "./AccommodationsList";
import JumbotronAccommodations from "./JumbotronAccommodations";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import SubHeading from "../layout/SubHeading";
import Container from "react-bootstrap/Container";
import SearchBox from "../search/SearchBox";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";

function AccommodationsPage() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchField, setSearchField] = useState("");

  // const [favourites, setFavourites] = useState(accommodationFromLocalStorage);

  const url = BASE_URL + `/accommodations`;

  useEffect(
    function () {
      async function getAccommodations() {
        try {
          const response = await axios.get(url);
          console.log("response", response);
          setAccommodations(response.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }

      getAccommodations();
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: An error occured!`} />;
  }

  const filteredAccommodation = accommodations.filter((item) =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <main>
      <Helmet>
        <title>
          Book Accommodations | Cancel Free on Most Accommodations | at
          Holidaze!
        </title>
        <meta
          name="description"
          content="Exclusive Deals, Central Locations! Search & Book Cheap Accommodations Online at Holidaze!"
        />
      </Helmet>
      <JumbotronAccommodations />
      <Container className="accommodations--page">
        <SubHeading content="Accommodations Page" />
        <SearchBox
          placeholder="Search accommodation ..."
          handleChange={(e) => setSearchField(e.target.value)}
        />
        <AccommodationsList filteredAccommodation={filteredAccommodation} />
      </Container>
    </main>
  );
}

export default AccommodationsPage;
