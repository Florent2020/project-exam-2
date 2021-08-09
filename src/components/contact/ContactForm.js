import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import ValidationError from "../forms/ValidationError";
import {
  MINIMUM_FULL_NAME_CHARACTERS,
  MINIMUM_MESSAGE_VALUE,
} from "../../constants/registration";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import ErrorMessage from "../layout/ErrorMessage";
import Loader from "../layout/Loader";

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
    .required("Please enter your email address!")
    .email("Please enter a valid email address!"),
  message: yup
    .string()
    .required("Please enter your message!")
    .min(
      MINIMUM_MESSAGE_VALUE,
      `The message must be at least ${MINIMUM_MESSAGE_VALUE} characters!`
    ),
});

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const url = BASE_URL + `/messages`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
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

  console.log(serverError);

  if (submitting) {
    return <Loader />;
  }

  if (serverError) {
    return <ErrorMessage message={`Error: An error occured!`} />;
  }

  return (
    <Container>
      {submitted && (
        <Alert variant="success">Your message was successful!</Alert>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <Form.Group>
            <Form.Control placeholder="Full Name" {...register("full_name")} />
            {errors.full_name && (
              <ValidationError>{errors.full_name.message}</ValidationError>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control placeholder="Email" {...register("email")} />
            {errors.email && (
              <ValidationError>{errors.email.message}</ValidationError>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Message"
              {...register("message")}
              as="textarea"
              rows={6}
            />
            {errors.message && (
              <ValidationError>{errors.message.message}</ValidationError>
            )}
          </Form.Group>

          <Button variant="info" type="submit">
            Send
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default ContactForm;
