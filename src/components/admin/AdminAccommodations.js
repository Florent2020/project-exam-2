import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import bg from "../../images/bg_form.png";

function AdminAccommodations() {
  const [accomoddations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + `/accommodations`;

  useEffect(function () {
    async function getAccommodation() {
      try {
        const response = await axios.get(url);
        console.log("response", response);
        setAccommodations(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getAccommodation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="admin" style={{ backgroundImage: `url(${bg})` }}>
      <Container className="hotels--admin">
        <div className="accommocations--body">
          <Heading content="Accommodations" />
          <Row>
            {accomoddations.map((accomoddation) => {
              return (
                <Col sm={12} md={6} lg={4} key={accomoddation.id}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={accomoddation.image_url}
                      className="admin--images"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>{accomoddation.name}</h5>
                      </Card.Title>
                      <Link
                        to={`/admin/accommodation/edit/${accomoddation.id}`}
                        className="accommodation--button"
                      >
                        <Button variant="primary">
                          <i className="fas fa-edit"></i>Edit
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AdminAccommodations;
