import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function InfoHeader() {
  const savedAccommodation =
    JSON.parse(localStorage.getItem("accommodation")) || [];
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
              <span id="favorite-counter">{savedAccommodation.length}</span>
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
