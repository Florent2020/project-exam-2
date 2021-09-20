import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Star from "./Star";

function AccommodationList(props) {
  return (
    <>
      <div className="pages">
        {props.accommodationsData.map((accommodation) => {
          return (
            <div className="col-lg-4 col-md-6 col-12" key={accommodation.id}>
              <Card className="dark--card">
                <Card.Text className="type">{accommodation.type}</Card.Text>
                <Card.Text className="trips">
                  <i
                    className={
                      localStorage.getItem("accommodation") === null
                        ? "far fa-heart"
                        : JSON.parse(
                            localStorage.getItem("accommodation")
                          ).filter((x) => x.id === accommodation.id).length ===
                          0
                        ? "far fa-heart "
                        : "fas fa-heart "
                    }
                    value="addTrips"
                    onClick={(e) => {
                      props.favoriteTrips(e, accommodation);
                    }}
                  ></i>
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
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AccommodationList;
