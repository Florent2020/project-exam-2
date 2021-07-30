import React from "react";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Star from "./Star";

function FavoriteTripsPage({ trips }) {
  //   const [trips, setTrips] = useState([]);

  // const favoriteTrips = (accommodation) => {
  //   // this.classList.toggle("fa");
  //   // this.classList.toggle("far");
  //   setTrips([...trips, accommodation]);
  // };

  return (
    <>
      <Container>
        <Heading content="Favorite Trips Page" />
        <div className="tripsss">
          aloooo
          {trips &&
            trips.map((accommodation) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-12"
                  key={accommodation.id}
                >
                  <Card className="dark--card">
                    <Card.Text className="type">{accommodation.type}</Card.Text>
                    <Card.Text
                      className="trips"
                      // onClick={() => favoriteTrips(accommodation.id)}
                    >
                      <i className="far fa-heart"></i>
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
      </Container>
    </>
  );
}

export default FavoriteTripsPage;
