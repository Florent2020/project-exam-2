import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Star from "../home/Star";

// const accommodationFromLocalStorage = JSON.parse(
//   localStorage.getItem("accommodations") || "[]"
// );

function AccommodationList(props) {
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

  const savedAccommodation =
    JSON.parse(localStorage.getItem("accommodation")) || [];

  const [favourites, setFavourites] = useState(savedAccommodation);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("accommodation", JSON.stringify(items));
  };

  const favoriteTrips = (trip) => {
    const newFavouriteList = [
      ...favourites.filter((favourite) => favourite.id !== trip.id),
      trip,
    ];
    favourites.forEach((item) => {
      if (item.id === trip.id) {
        // console.log("Now you can delete");
      }
    });
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <Row>
      <div className="pages">
        {props.filteredAccommodation.map((accommodation) => {
          return (
            <div key={accommodation.id} className="accommodation--box">
              <Card className="dark--card">
                <div className="col-md-5 col-12">
                  <Card.Text className="type">{accommodation.type}</Card.Text>
                  <Card.Text className="trips">
                    <i
                      className="fas fa-heart"
                      value="addTrips"
                      onClick={() => favoriteTrips(accommodation)}
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
                  <Button
                    variant="dark"
                    className="remove"
                    onClick={() =>
                      props.removeFavouriteAccommodation(accommodation)
                    }
                  >
                    <i className="fas fa-trash"></i>
                    Remove
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </Row>
  );
}

export default AccommodationList;
