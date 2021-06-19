import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import ValidationError from "../forms/ValidationError";
import { MINIMUM_FULL_NAME_CHARACTERS, MINIMUM_MESSAGE_VALUE, DEFAULT_VALUES } from "../../constants/registration";

const schema = yup.object().shape({

    full_name: yup
        .string()
        .required("Please enter your first name!")
        .min(MINIMUM_FULL_NAME_CHARACTERS, `Your first name must be at least ${MINIMUM_FULL_NAME_CHARACTERS} characters!`),
    email: yup
        .string()
        .required("Please enter an email address!")
        .email("Please enter a valid email address!"),
    message: yup
        .string()
        .required("Please enter your message!")
        .min(MINIMUM_MESSAGE_VALUE, `The message must be at least ${MINIMUM_MESSAGE_VALUE} characters!`),

});


function ContactForm() {

    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);

        setSubmitted(true);

        reset(DEFAULT_VALUES);
    }

    // console.log(errors);

    return (
        <Container>
            {submitted && <Alert variant="success">Your submit was successful!</Alert>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control placeholder="Full Name" {...register("full_name")} />
                    {errors.full_name && <ValidationError>{errors.full_name.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Control placeholder="Email" {...register("email")} />
                    {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Control  placeholder="Message" {...register("message")}  as="textarea" rows={6} />
                    {errors.message && <ValidationError>{errors.message.message}</ValidationError>}
                </Form.Group>

                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ContactForm;