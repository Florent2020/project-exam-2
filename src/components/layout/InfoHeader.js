import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function InfoHeader() {
  const savedAccommodation =
    JSON.parse(localStorage.getItem("accommodation")) || [];

  // const [favourites] = useState(savedAccommodation);

  // const saveToLocalStorage = (items) => {
  //   localStorage.setItem("accommodation", JSON.stringify(items));
  // };

  // const favoriteTrips = (trip) => {
  //   const newFavouriteList = [
  //     ...favourites.filter((favourite) => favourite.id !== trip.id),
  //     trip,
  //   ];
  //   favourites.forEach((item) => {
  //     if (item.id === trip.id) {
  //       // console.log("Now you can delete");
  //     }
  //   });
  //   setFavourites(newFavouriteList);
  //   saveToLocalStorage(newFavouriteList);
  // };
  return (
    <div className="info--header">
      <Container>
        <div className="info__elem">
          <span>
            <i className="fas fa-phone-alt"></i> 123 456 789
          </span>
          <span>
            <i className="fas fa-envelope"></i> info@holidaze.com
          </span>
        </div>
        <nav className="nav--info">
          <div className="favorites__link">
            {""}
            {savedAccommodation.length ? (
              <span>{savedAccommodation.length}</span>
            ) : (
              ""
            )}
            <Link to="/favoriteTrips" className="nav-link">
              <i className="far fa-heart"></i>
              Trips
            </Link>
          </div>
          <DarkMode />
        </nav>
      </Container>
    </div>
  );
}

export default InfoHeader;
