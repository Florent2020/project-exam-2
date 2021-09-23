import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import Button from "react-bootstrap/Button";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";
import AccommodationList from "./AccommodationList";

function FavoriteTripsPage() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const accommodationFavourites = JSON.parse(
        localStorage.getItem("accommodation")
      );

      setFavourites(accommodationFavourites);
      if (accommodationFavourites) {
        setFavourites(accommodationFavourites);
      }
    } catch (error) {
      console.log(error);
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("accommodation", JSON.stringify(items));
  };

  const removeFavouriteAccommodation = (trip) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== trip.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: An error occured!`} />;
  }

  return (
    <main>
      <Helmet>
        <title>Favorites Page | Holidaze!</title>
        <meta name="description" content="Favorites Page | Holidaze!" />
      </Helmet>
      <div className="favourites">
        <Container>
          <Heading content="Favourite Trips Page" />
          {favourites.length === 0 && (
            <div>No favourite accommodation yet!</div>
          )}
          <AccommodationList
            accommodationsData={favourites}
            removeFavouriteAccommodation={removeFavouriteAccommodation}
          >
            <Button variant="primary">Remove</Button>
          </AccommodationList>
        </Container>
      </div>
    </main>
  );
}

export default FavoriteTripsPage;
