import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Heading from "../../layout/Heading";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import FormGroup from "react-bootstrap/FormGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg from "../../../images/bg_form.png";
import DeleteEnquiry from "./DeleteEnquiry";
import Loader from "../../layout/Loader";
import ErrorMessage from "../../layout/ErrorMessage";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

function EnquiriesAdmin() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + `/enquiries`;

  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

  useEffect(function () {
    async function getMessage() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data);
        setEnquiries(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: An error occured!`} />;
  }

  return (
    <main>
      <Helmet>
        <title>Enquiries Page | Holidaze!</title>
        <meta name="description" content="Enquiries Page | Holidaze!" />
      </Helmet>

      <div
        className="admin enquiries--admin"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Container className="hotels--admin enquiries--page">
          <Heading content="Enquiries Page" />

          {enquiries.length === 0 && (
            <p className="empty--enquiries">No enquiry yet!</p>
          )}
          <Row>
            {enquiries.map((enquiry) => {
              const format = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              const newFormat = new Intl.DateTimeFormat("en-GB", format);
              const checkIn = new Date(enquiry.checkIn);
              const checkOut = new Date(enquiry.checkOut);
              const createdAt = new Date(enquiry.created_at);
              const newCheckIn = newFormat.format(checkIn);
              const newCheckOut = newFormat.format(checkOut);
              const newCreatedAt = newFormat.format(createdAt);

              return (
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  key={enquiry.id}
                  className="enqyery--id"
                >
                  <Col sm={12} md={5} className="enquirie--table">
                    <p className="sent">Sent: {newCreatedAt}</p>
                    <h5>From: {enquiry.full_name}</h5>
                    <p className="email">Email: {enquiry.email}</p>
                    <p>Check In: {newCheckIn}</p>
                    <p>Check Out: {newCheckOut}</p>
                    <FormGroup className="enquiries--buttons">
                      <Link
                        to={`/admin/viewEnquiries/${enquiry.id}`}
                        className="enquirie--link"
                      >
                        <i className="fas fa-info-circle"></i>
                        View details
                      </Link>
                      <DeleteEnquiry id={enquiry.id} />
                    </FormGroup>
                  </Col>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default EnquiriesAdmin;
