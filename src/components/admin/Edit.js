import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import bg from "../../images/bg_form.png";
import Alert from "react-bootstrap/Alert";
import ErrorMessage from "../layout/ErrorMessage";
import Loader from "../layout/Loader";

import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../forms/ValidationError";
import useAxios from "../../hooks/UseAxios";
import DeleteAccommodation from "./Delete";

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
});

function EditHotel() {
  const [accommodation, setAccomodation] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingAccommodation, setFetchingAccommodation] = useState(true);
  const [updatingAccommodation, setUpdatingAccommodation] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const http = useAxios();

  let { id } = useParams();

  const url = BASE_URL + `/accommodations/${id}`;

  useEffect(function () {
    async function getAccommodation() {
      try {
        const response = await http.get(url);
        // console.log("response", response.data);
        setAccomodation(response.data);
      } catch (error) {
        console.log(error);
        setFetchError(error.toString());
      } finally {
        setFetchingAccommodation(false);
      }
    }

    getAccommodation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(data) {
    setUpdatingAccommodation(true);
    setUpdateError(null);
    setUpdated(false);

    console.log(data);

    try {
      const response = await http.put(url, data);
      console.log("response", response.data);
      setUpdated(true);
      // history.push("/admin/dashboard");
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
      setUpdatingAccommodation(false);
    }
  }

  if (fetchingAccommodation) {
    return <Loader />;
  }

  if (fetchError) {
    return <ErrorMessage message={`Error: An error occured!`} />;
  }

  return (
    <main>
      <Helmet>
        <title>Edit Page | Holidaze!</title>
        <meta name="description" content="Edit Page | Holidaze!" />
      </Helmet>
      <div
        className="admin edit--admin"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Container className="hotels--admin edit--page">
          <Heading content="Edit Page" />

          <form onSubmit={handleSubmit(onSubmit)}>
            {updated && <Alert variant="success">The Hotel was updated!</Alert>}

            {updateError && <ValidationError>{updateError}</ValidationError>}

            <fieldset disabled={updatingAccommodation}>
              <Form.Row>
                <Col>
                  <Col className="edit--line">
                    <Form.Group>
                      <Form.Label>Hotel</Form.Label>
                      <Form.Control
                        name="name"
                        defaultValue={accommodation.name}
                        placeholder="Hotel name"
                        {...register("name")}
                      />
                      {errors.name && (
                        <ValidationError>{errors.name.message}</ValidationError>
                      )}
                    </Form.Group>
                  </Col>

                  <Col className="edit--line">
                    <Form.Group>
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        defaultValue={accommodation.price}
                        placeholder="Price"
                        {...register("price")}
                      />
                      {errors.price && (
                        <ValidationError>
                          {errors.price.message}
                        </ValidationError>
                      )}
                    </Form.Group>
                  </Col>

                  <Col className="edit--line">
                    <Form.Group>
                      <Form.Label>Type of accommodation</Form.Label>
                      <Form.Control
                        name="type"
                        defaultValue={accommodation.type}
                        placeholder="Select type"
                        {...register("type")}
                        as="select"
                      >
                        <option value="">Type</option>
                        <option value="Hotel">Hotel</option>
                        <option value="B&B's">B&B's</option>
                        <option value="Guesthouses">Guesthouses</option>
                      </Form.Control>
                      {errors.type && (
                        <ValidationError>{errors.type.message}</ValidationError>
                      )}
                    </Form.Group>
                  </Col>
                </Col>

                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      name="description"
                      defaultValue={accommodation.description}
                      placeholder="Description"
                      {...register("description")}
                      as="textarea"
                      rows={8}
                    />
                    {errors.description && (
                      <ValidationError>
                        {errors.description.message}
                      </ValidationError>
                    )}
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    name="location"
                    defaultValue={accommodation.location}
                    placeholder="Location"
                    {...register("location")}
                  />
                  {errors.location && (
                    <ValidationError>{errors.location.message}</ValidationError>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    defaultValue={accommodation.phone}
                    placeholder="Phone"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <ValidationError>{errors.phone.message}</ValidationError>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Breakfast</Form.Label>
                  <Form.Control
                    name="breakfast"
                    defaultValue={accommodation.breakfast}
                    placeholder="Select breakfast"
                    {...register("breakfast")}
                    as="select"
                  >
                    <option value="">Select breakfast ...</option>
                    <option value="Breakfast Included">
                      Breakfast Included
                    </option>
                  </Form.Control>
                  {errors.type && (
                    <ValidationError>
                      {errors.breakfast.message}
                    </ValidationError>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Wifi</Form.Label>
                  <Form.Control
                    name="wifi"
                    defaultValue={accommodation.wifi}
                    placeholder="Wifi"
                    {...register("wifi")}
                    as="select"
                  >
                    <option value="">Select wifi ...</option>
                    <option value="Wifi">Wifi</option>
                  </Form.Control>
                  {errors.wifi && (
                    <ValidationError>{errors.wifi.message}</ValidationError>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Stay</Form.Label>
                  <Form.Control
                    name="stay"
                    defaultValue={accommodation.stay}
                    placeholder="Stay"
                    {...register("stay")}
                    as="select"
                  >
                    <option value="">Select stay ...</option>
                    <option value="1 night, 2 adults">1 night, 2 adults</option>
                    <option value="1 night, max 4 persons">
                      1 night, max 4 persons
                    </option>
                    <option value="1 night, max 6 persons">
                      1 night, max 6 persons
                    </option>
                  </Form.Control>
                  {errors.type && (
                    <ValidationError>{errors.stay.message}</ValidationError>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Parking</Form.Label>
                  <Form.Control
                    name="parking"
                    defaultValue={accommodation.parking}
                    placeholder="Parking"
                    {...register("parking")}
                    as="select"
                  >
                    <option value="">Select parking ...</option>
                    <option value="Paid parking off promises">
                      Paid parking off promises
                    </option>
                  </Form.Control>
                  {errors.parking && (
                    <ValidationError>{errors.parking.message}</ValidationError>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Star</Form.Label>
                  <Form.Control
                    name="star"
                    defaultValue={accommodation.star}
                    placeholder="Select star"
                    {...register("star")}
                    as="select"
                  >
                    <option value="">Select star ...</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                  {errors.type && (
                    <ValidationError>{errors.star.message}</ValidationError>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Cancellation</Form.Label>
                  <Form.Control
                    name="cancellation"
                    defaultValue={accommodation.cancellation}
                    placeholder="Cancellation"
                    {...register("cancellation")}
                    as="select"
                  >
                    <option value="">Select cancellation ...</option>
                    <option value="Free cancellation">Free cancellation</option>
                  </Form.Control>
                  {errors.cancellation && (
                    <ValidationError>
                      {errors.cancellation.message}
                    </ValidationError>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Fitness</Form.Label>
                  <Form.Control
                    name="fitness"
                    defaultValue={accommodation.fitness}
                    placeholder="Fitness"
                    {...register("fitness")}
                    as="select"
                  >
                    <option value="">Select fitness ...</option>
                    <option value="Fitness Center">Fitness Center</option>
                  </Form.Control>
                  {errors.fitness && (
                    <ValidationError>{errors.fitness.message}</ValidationError>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Image 1</Form.Label>
                  <Form.Control
                    name="image"
                    defaultValue={accommodation.image_url}
                    placeholder="Image 1"
                    {...register("image_url")}
                  />
                  {errors.image_url && (
                    <ValidationError>
                      {errors.image_url.message}
                    </ValidationError>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Image 2</Form.Label>
                  <Form.Control
                    name="image"
                    defaultValue={accommodation.image_url2}
                    placeholder="Image 2"
                    {...register("image_url2")}
                  />
                  {errors.image_url2 && (
                    <ValidationError>
                      {errors.image_url2.message}
                    </ValidationError>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Image 3</Form.Label>
                  <Form.Control
                    name="image"
                    defaultValue={accommodation.image_url3}
                    placeholder="Image 3"
                    {...register("image_url3")}
                  />
                  {errors.image_url3 && (
                    <ValidationError>
                      {errors.image_url3.message}
                    </ValidationError>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control
                    name="lat"
                    defaultValue={accommodation.lat}
                    placeholder="Latitude"
                    {...register("lat")}
                  />
                  {errors.lat && (
                    <ValidationError>{errors.lat.message}</ValidationError>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control
                    name="lng"
                    defaultValue={accommodation.lng}
                    placeholder="Longitude"
                    {...register("lng")}
                  />
                  {errors.lng && (
                    <ValidationError>{errors.lng.message}</ValidationError>
                  )}
                </Form.Group>
              </Form.Row>

              <Button variant="info" type="submit" name="update">
                <i className="fas fa-sync-alt"></i>
                Update
              </Button>

              <DeleteAccommodation id={accommodation.id} />
            </fieldset>
          </form>
        </Container>
      </div>
    </main>
  );
}

export default EditHotel;
