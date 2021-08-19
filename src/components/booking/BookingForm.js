import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import ValidationError from "../forms/ValidationError";
import { MINIMUM_FULL_NAME_CHARACTERS } from "../../constants/registration";
import { BASE_URL } from "../../constants/api";
import axios from "axios";

const schema = yup.object().shape({
  full_name: yup
    .string()
    .required("Please enter your full name!")
    .min(
      MINIMUM_FULL_NAME_CHARACTERS,
      `Your first name must be at least ${MINIMUM_FULL_NAME_CHARACTERS} characters!`
    ),
  email: yup
    .string()
    .required("Please enter an email address!")
    .email("Please enter a valid email address!"),
  checkIn: yup.string().required("Date is required!"),
  checkOut: yup.string().required("Date is required!"),
});

function BookingForm({ accName }) {
  const [submitted, setSubmitted] = useState(false);
  const [setSubmitting] = useState(false);
  const [setServerError] = useState(null);

  // const [submitting, setSubmitting] = useState(false);
  // const [serverError, setServerError] = useState(null);

  const url = BASE_URL + `/enquiries`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    data.AccomodationName = accName;

    setSubmitted(true);
    setSubmitting(true);
    setServerError(null);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      // history.push("/admin/hotels");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  // console.log(errors);

  return (
    <Container>
      {submitted && (
        <Alert variant="success">Your submit was successful!</Alert>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Control
            type="text"
            hidden
            id="AccomodationName"
            placeholder="AccomodationName"
            {...register("AccomodationName")}
            value={accName}
          />

          {/* {errors.full_name && <ValidationError>{errors.full_name.message}</ValidationError>} */}
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Full Name"
            {...register("full_name")}
          />
          {errors.full_name && (
            <ValidationError>{errors.full_name.message}</ValidationError>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <ValidationError>{errors.email.message}</ValidationError>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Control
            placeholder="Check In"
            {...register("checkIn")}
            type="date"
          />
          {errors.checkIn && (
            <ValidationError>{errors.checkIn.message}</ValidationError>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Control
            placeholder="Check Out"
            {...register("checkOut")}
            type="date"
          />
          {errors.checkOut && (
            <ValidationError>{errors.checkOut.message}</ValidationError>
          )}
        </Form.Group>

        <Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
          <Button variant="dark" type="reset" className="reset">
            Reset
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default BookingForm;
