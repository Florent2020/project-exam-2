import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Star from "../home/Star";

function AccommodationList(props) {
  const savedAccommodation =
    JSON.parse(localStorage.getItem("accommodation")) || [];

  const [favourites, setFavourites] = useState(savedAccommodation);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("accommodation", JSON.stringify(items));
  };

  const favoriteTrips = (e, trip) => {
    debugger;
    if (e.target.classList[2] === "fas") {
      e.currentTarget.classList.remove("fas");
    } else {
      e.currentTarget.classList.add("fas");
    }

    const newFavouriteList = [
      ...favourites.filter((favourite) => favourite.id !== trip.id),
      trip,
    ];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);

    favourites.forEach((item) => {
      if (item.id === trip.id) {
        const items = JSON.parse(localStorage.getItem("accommodation"));
        const filtered = [...items.filter((item) => item.id !== trip.id)];
        setFavourites(filtered);
        saveToLocalStorage(filtered);
      }
    });

    const favoriteCounter = JSON.parse(
      localStorage.getItem("accommodation")
    ).length;

    document.getElementById("favorite-counter").innerText =
      favoriteCounter === 0 ? "" : favoriteCounter;
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
                      className={
                        localStorage.getItem("accommodation") === null
                          ? "far fa-heart"
                          : JSON.parse(
                              localStorage.getItem("accommodation")
                            ).filter((x) => x.id === accommodation.id)
                              .length === 0
                          ? "far fa-heart "
                          : "fas fa-heart "
                      }
                      value="addTrips"
                      onClick={(e) => favoriteTrips(e, accommodation)}
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
