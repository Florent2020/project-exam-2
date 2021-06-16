import React from 'react';
import { Container } from 'react-bootstrap';
import SubHeading from '../layout/SubHeading';

function AccommodationList() {
    return (
        <div className="accommodation--list">
            <Container>
                <div className="accommodation--list__subheading">
                    <SubHeading content="List of Hotels, B&B's, Guesthouses " />
                </div>

            </Container>
        </div>
    )
}

export default AccommodationList;
