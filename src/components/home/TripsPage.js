import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import Button from "react-bootstrap/Button";

import AccommodationList from "./AccommodationList";

function FavoriteTripsPage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const accommodationFavourites = JSON.parse(localStorage.getItem("trips"));

    setFavourites(accommodationFavourites);
    if (accommodationFavourites) {
      setFavourites(accommodationFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("trips", JSON.stringify(items));
  };

  const removeFavouriteAccommodation = (trip) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== trip.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
      <Helmet>
        <title>Favorites Page | Holidaze!</title>
        <meta name="description" content="Favorites Page | Holidaze!" />
      </Helmet>
      <div className="favorites">
        <Container>
          <Heading content="Favorite Trips Page" />
          {favourites.length === 0 && (
            <div>No favourite accommodation yet!</div>
          )}
          <AccommodationList
            accommodations={favourites}
            favoriteTrips={removeFavouriteAccommodation}
          >
            <Button variant="primary">Remove</Button>
          </AccommodationList>
        </Container>
      </div>
    </>
  );
}

export default FavoriteTripsPage;
