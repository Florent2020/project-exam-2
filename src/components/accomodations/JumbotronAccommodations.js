import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Banner from "../../images/111.png";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";

function JumbotronAccommodations() {
    return (
        <Jumbotron style={{ backgroundImage: `url(${Banner})` }}>
            <div  className="shadow--banner"></div>
                <Container>

                    <div className="shadow--text accommodations--banner">
                        <p>Bergen</p>
                        <Heading content="Holidaze" />
                        <SubHeading content="A local icon website of Norwegian accommodations!" />
                    </div>
                </Container>
        </Jumbotron>
    )
}

export default JumbotronAccommodations;
