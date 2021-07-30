import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Star from "./Star";

function AccommodationList({ accommodations }) {
  const [trips, setTrips] = useState([]);

  const favoriteTrips = (accommodation) => {
    // this.classList.toggle("fa");
    // this.classList.toggle("far");
    console.log(accommodation);
    setTrips([...trips, accommodation]);
  };

  return (
    <>
      <div className="pages">
        {accommodations.map((accommodation) => {
          return (
            <div className="col-lg-4 col-md-6 col-12" key={accommodation.id}>
              <Card className="dark--card">
                <Card.Text className="type">{accommodation.type}</Card.Text>
                <Card.Text
                  className="trips"
                  value="addTrips"
                  onClick={() => favoriteTrips(accommodation)}
                >
                  {/* <i className="far fa-heart"></i> */}
                  <i className="fas fa-heart"></i>
                </Card.Text>
                <Card.Img variant="top" src={accommodation.image_url} />
                <Card.Title>
                  <h5>{accommodation.name}</h5>
                </Card.Title>
                <Card.Text className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {accommodation.location}
                </Card.Text>

                <Star stars={accommodation.star}></Star>

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
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AccommodationList;
