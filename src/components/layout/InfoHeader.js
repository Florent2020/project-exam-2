import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function InfoHeader(props) {
  const { countTrips } = props;
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
            <i className="far fa-heart">
              {""}
              {countTrips ? (
                <button className="badge">{countTrips}</button>
              ) : (
                ""
              )}
            </i>
            {""}
            <Link to="/favoriteTrips" className="nav-link">
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
