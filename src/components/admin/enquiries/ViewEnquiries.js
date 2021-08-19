import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import bg from "../../../images/bg_form.png";
import Nav from "react-bootstrap/Nav";
import DeleteEnquiries from "./DeleteEnquiry";
import Loader from "../../layout/Loader";
import ErrorMessage from "../../layout/ErrorMessage";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/UseAxios";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

function ViewEnquiries() {
  const [accommodations, setAccommodations] = useState(null);
  const [fetchingAccommodations, setFetchingAccommodations] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [updatingAccommodations, setUpdatingAccommodations] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  // console.log(updatingAccommodations);
  // console.log(updateError);

  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

  const { handleSubmit } = useForm();

  const http = useAxios();

  let { id } = useParams();

  const url = BASE_URL + `/enquiries/${id}`;

  useEffect(function () {
    async function getEnquiry() {
      try {
        const response = await http.get(url);
        // console.log("response", response.data);
        setAccommodations(response.data);
      } catch (error) {
        console.log(error);
        setFetchError(error.toString());
      } finally {
        setFetchingAccommodations(false);
      }
    }

    getEnquiry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(data) {
    setUpdatingAccommodations(true);
    setUpdateError(null);
    // setUpdated(false);

    // console.log(data);

    try {
      const response = await http.put(url, data);
      console.log("response", response.data);
      // setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
      setUpdatingAccommodations(false);
    }
  }

  if (fetchingAccommodations) {
    return <Loader />;
  }

  if (fetchError) {
    return <ErrorMessage message={`Error: An error occured!`} />;
  }

  const format = { year: "numeric", month: "short", day: "numeric" };
  const newFormat = new Intl.DateTimeFormat("en-GB", format);
  const checkIn = new Date(accommodations.checkIn);
  const checkOut = new Date(accommodations.checkOut);
  const createdAt = new Date(accommodations.created_at);
  const newCheckIn = newFormat.format(checkIn);
  const newCheckOut = newFormat.format(checkOut);
  const newCreatedAt = newFormat.format(createdAt);

  return (
    <main
      className="admin view--enquiry"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Container className="hotels--admin view--enquiry__page">
        <Heading content="Enquiry details" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Nav.Link href="/admin/enquiries">
            <i className="fas fa-arrow-left"></i> Back to enquiries page
          </Nav.Link>

          <div className="enquiry--detail">
            <h4>
              <span>{accommodations.full_name}</span> made the reservation at
              the:
              <br />
              <span>"{accommodations.AccomodationName}"</span>
            </h4>
            <h6>
              Check In: <span>{newCheckIn}</span>
            </h6>
            <h6>
              Check Out: <span>{newCheckOut}</span>
            </h6>
            <h6>
              Sent at: <span>{newCreatedAt}</span>
            </h6>
          </div>

          <DeleteEnquiries id={accommodations.id} />
        </form>
      </Container>
    </main>
  );
}

export default ViewEnquiries;
