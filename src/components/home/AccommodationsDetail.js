import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Heading from "../layout/Heading";
// import SubHeading from "../layout/SubHeading";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Star from "./Star";
import Map from "./AloMap";

export default function AccommodationDetail() {
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + `/accommodations/${id}`;

  useEffect(
    function () {
      async function getDetail() {
        try {
          const response = await axios.get(url);
          console.log("response", response.data);
          setAccommodation(response.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getDetail();
    },

    [url]
  );

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (loading)
    return (
      <div>
        <Spinner animation="border" role="status" variant="success">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );

  if (error) return <div>{}</div>;

  return (
    <div className="detail--page">
      <div className="banner__detail--page">
        <Heading content="… where the soul finds peace!" />
        <div className="shadow"></div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-flex justify-content-top w-100"
              src={
                accommodation.image_url === ""
                  ? "https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_1280.jpg"
                  : accommodation.image_url
              }
              alt={accommodation.name}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex justify-content-top w-100"
              src={
                accommodation.image_url2 === ""
                  ? "https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_1280.jpg"
                  : accommodation.image_url2
              }
              alt={accommodation.name}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex justify-content-top w-100"
              src={
                accommodation.image_url3 === ""
                  ? "https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_1280.jpg"
                  : accommodation.image_url3
              }
              alt={accommodation.name}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container>
        <div className="details--info">
          <div className="title--detail">
            <h2>{accommodation.name}</h2>
            <Star stars={accommodation.star} />
          </div>
          <Card.Text className="location">
            <i className="fas fa-map-marker-alt"></i>
            {accommodation.location}
          </Card.Text>
          <Card.Text className="description">
            {accommodation.description}
          </Card.Text>
          <Row>
            <Col xs={12} md={6}>
              <Card.Text className="breakfast">
                <i className="fas fa-utensils"></i>
                {accommodation.breakfast}
              </Card.Text>
              <Card.Text className="wifi">
                <i className="fas fa-wifi"></i>
                {accommodation.wifi}
              </Card.Text>
              <Card.Text className="parking">
                <i className="fas fa-parking"></i>
                {accommodation.parking}
              </Card.Text>
              <Card.Text className="fitness">
                <i className="fas fa-dumbbell"></i>
                {accommodation.fitness}
              </Card.Text>
              <Card.Text className="stay">{accommodation.stay}</Card.Text>
              <Card.Text className="price">NOK {accommodation.price}</Card.Text>
              <Link
                to={`/accommodation/booking/${accommodation.id}`}
                className="accommodation--button"
              >
                <Button variant="primary">Book Now!</Button>
              </Link>
            </Col>
            <Col xs={12} md={6}>
              <Map
                lat={accommodation.lat}
                lng={accommodation.lng}
                hotelName={accommodation.name}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}