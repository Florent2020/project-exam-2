import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import ValidationError from "../forms/ValidationError";
import { MINIMUM_FULL_NAME_CHARACTERS, DEFAULT_VALUES } from "../../constants/registration";

const schema = yup.object().shape({

    full_name: yup
        .string()
        .required("Please enter your first name!")
        .min(MINIMUM_FULL_NAME_CHARACTERS, `Your first name must be at least ${MINIMUM_FULL_NAME_CHARACTERS} characters!`),
    email: yup
        .string()
        .required("Please enter an email address!")
        .email("Please enter a valid email address!"),
    checkIn: yup
        .date(),
    checkOut: yup
        .date(),

});


function BookingForm() {

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
                    <Form.Control type="text" placeholder="Full Name" {...register("full_name")} />
                    {errors.full_name && <ValidationError>{errors.full_name.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text"  placeholder="Email" {...register("email")}/>
                    {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Control  placeholder="Check In" {...register("checkin")} type="date"  />
                    {errors.checkIn && <ValidationError>{errors.checkIn.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Control  placeholder="Check Out" {...register("checkout")} type="date" />
                    {errors.checkOut && <ValidationError>{errors.checkOut.message}</ValidationError>}
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