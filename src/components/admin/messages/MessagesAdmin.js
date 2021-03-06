import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../../layout/Loader";
import ErrorMessage from "../../layout/ErrorMessage";
import bg from "../../../images/bg_form.png";

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

function MessagesAdmin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + `/messages`;

  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

  useEffect(function () {
    async function getMessage() {
      try {
        const response = await axios.get(url);
        // console.log("response", response.data);
        setMessages(response.data);
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
        <title>Messages Page | Holidaze!</title>
        <meta name="description" content="Messages Page | Holidaze!" />
      </Helmet>

      <div
        className="admin messages--admin"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Container className="hotels--admin messages--page">
          <Heading content="Messages Page" />

          {messages.length === 0 && (
            <p className="empty--message">No message yet!</p>
          )}
          <Row>
            {messages.map((message) => {
              const format = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              const newFormat = new Intl.DateTimeFormat("en-GB", format);
              const createdAt = new Date(message.created_at);
              const newCreatedAt = newFormat.format(createdAt);

              return (
                <div className="messages--width" key={message.id}>
                  <div className="messages--table">
                    <Link
                      to={`/admin/viewMessages/${message.id}`}
                      className="message--link"
                    >
                      <Col sm={10} md={10}>
                        <h5>{message.full_name}</h5>
                      </Col>
                      <Col sm={2} md={2}>
                        <p>{newCreatedAt}</p>
                      </Col>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default MessagesAdmin;
