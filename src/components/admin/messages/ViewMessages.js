import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import bg from "../../../images/bg_form.png";
import Nav from "react-bootstrap/Nav";
import Loader from "../../layout/Loader";
import ErrorMessage from "../../layout/ErrorMessage";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/UseAxios";
import DeleteMessages from "./DeleteMessage";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

function ViewMessages() {
  const [message, setMessage] = useState(null);
  const [fetchingMessage, setFetchingMessage] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // eslint-disable-next-line
  const [updated, setUpdated] = useState(false);
  // eslint-disable-next-line
  const [updatingMessage, setUpdatingMessage] = useState(false);
  // eslint-disable-next-line
  const [updateError, setUpdateError] = useState(null);

  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

  const { handleSubmit } = useForm();

  const http = useAxios();

  let { id } = useParams();

  const url = BASE_URL + `/messages/${id}`;

  useEffect(function () {
    async function getMessage() {
      try {
        const response = await http.get(url);
        // console.log("response", response.data);
        setMessage(response.data);
      } catch (error) {
        console.log(error);
        setFetchError(error.toString());
      } finally {
        setFetchingMessage(false);
      }
    }

    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(data) {
    setUpdatingMessage(true);
    setUpdateError(null);
    setUpdated(false);

    console.log(data);

    try {
      const response = await http.put(url, data);
      console.log("response", response.data);
      setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
      setUpdatingMessage(false);
    }
  }

  if (fetchingMessage) {
    return <Loader />;
  }

  if (fetchError) {
    return <ErrorMessage message={`Error: An error occured!`} />;
  }

  return (
    <main
      className="admin view--message"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Container className="hotels--admin view--message__page">
        <Heading content="View Messages Page" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Nav.Link href="/admin/messages">
            <i className="fas fa-arrow-left"></i> Back to messages
          </Nav.Link>

          <div>
            <h3>From: {message.full_name}</h3>
            <h6>
              <strong>Email:</strong> {message.email}
            </h6>
            <p>
              <strong>Message:</strong> {message.message}
            </p>
          </div>

          <DeleteMessages id={message.id} />
        </form>
      </Container>
    </main>
  );
}

export default ViewMessages;
