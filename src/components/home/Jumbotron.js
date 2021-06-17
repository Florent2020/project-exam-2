import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Banner from "../../images/banner_.png";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import Button from "react-bootstrap/Button";

function JumbotronPage() {
    return (
        <Jumbotron style={{ backgroundImage: `url(${Banner})` }}>
                <div  className="shadow--banner"></div>
                <Container>
                    <div className="shadow--text">
                        <Heading content="World Class Accommodation!" />
                        <p>
                            Discover Hotels, B&B's, Guesthouses that defines a new dimension of luxury!
                        </p>
                        <p>
                            <Button variant="primary">Discover</Button>
                        </p>
                    </div>
                </Container>

        </Jumbotron>
    )
}

export default JumbotronPage;
