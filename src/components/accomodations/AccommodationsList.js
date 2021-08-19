import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import SubHeading from "../layout/SubHeading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import SearchBox from "../search/SearchBox";
import Star from "../home/Star";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";

// const accommodationFromLocalStorage = JSON.parse(
//   localStorage.getItem("accommodations") || "[]"
// );

function AccommodationList() {
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

  // const favoriteTrips = (trip) => {
  //   console.log(trip);
  //   const newFavouriteList = [...favourites, trip];
  //   setFavourites(newFavouriteList);
  //   // saveToLocalStorage(newFavouriteList);
  // };

  // const saveToLocalStorage = (items) => {
  //   localStorage.setItem("trips", JSON.stringify(items));
  // };

  // const favoriteTrips = (trip) => {
  //   console.log(trip);
  //   const newFavouriteList = [...favourites, trip];
  //   setFavourites(newFavouriteList);
  //   saveToLocalStorage(newFavouriteList);
  // };

  return (
    // <div className="admin">
    <Container className="accommodations--page">
      <SubHeading content="Accommodations Page" />
      <SearchBox
        placeholder="Search accommodation ..."
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <Row>
        <div className="pages">
          {filteredAccommodation.map((accommodation) => {
            return (
              <div key={accommodation.id} className="accommodation--box">
                <Card className="dark--card">
                  <div className="col-md-5 col-12">
                    <Card.Text className="type">{accommodation.type}</Card.Text>
                    <Card.Text className="trips">
                      <i
                        className="far fa-heart"
                        value="addTrips"
                        // onClick={() => favoriteTrips(accommodation)}
                      ></i>
                    </Card.Text>
                    <Card.Img variant="top" src={accommodation.image_url} />
                  </div>
                  <div className="col-md-7 col-12">
                    <Card.Title>
                      <div className="title--detail">
                        <h3>{accommodation.name}</h3>
                        <Star stars={accommodation.star} />
                      </div>
                    </Card.Title>
                    <Card.Text className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {accommodation.location}
                    </Card.Text>
                    <Card.Text className="description">
                      {accommodation.description}
                    </Card.Text>
                    <Card.Text className="stay">{accommodation.stay}</Card.Text>
                    <Card.Text className="price">
                      NOK {accommodation.price}
                    </Card.Text>
                    <Link
                      to={`/accommodation/detail/${accommodation.id}`}
                      className="accommodation--button"
                    >
                      <Button variant="primary">View More!</Button>
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
    // </div>
  );
}

export default AccommodationList;
