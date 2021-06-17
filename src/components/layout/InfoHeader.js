import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink} from "react-router-dom";

function InfoHeader() {
    return (
        <div className="info--header">
            <Container>
                <div className="info__elem">
                    <span>
                        <i className="fas fa-phone-alt"></i> 123 456 789
                    </span>
                    <span>
                        <i className="fas fa-envelope"></i> info@holidaze.com
                    </span>
                </div>
                <nav className="nav--info">
                    <div className="favorites__link">
                        <i className="far fa-heart"></i>
                        <NavLink to="/favorites" className="nav-link">Trips</NavLink>
                    </div>
                    <div className="mode__link">
                        <i className="fas fa-sun"></i>
                        <NavLink to="/favorites" className="nav-link">Mode</NavLink>
                    </div>
                </nav>
            </Container>
        </div>
    )
}

export default InfoHeader
