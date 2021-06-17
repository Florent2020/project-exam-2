import React from 'react';
import FooterImage from "../../images/footer_image.jpg";
import logo from "../../images/logo_.png";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function Footer() {
    return (
        <footer style={{ backgroundImage: `url(${FooterImage})` }}>
            <div className="footer">
                <div className="logo--footer">
                    <Card.Img variant="top" src={logo} alt="logo" className="logo" />
                </div>
                <div  className="accommodation--footer">
                    <Nav.Link href="#">Hotels</Nav.Link>
                    <Nav.Link eventKey="#">B&B's</Nav.Link>
                    <Nav.Link eventKey="#">Guesthouses</Nav.Link>
                    <Nav.Link eventKey="#">Contact</Nav.Link>
                </div>
                <div className="social--media">
                    <Nav.Link href="#">
                        <i class="fab fa-facebook-f"></i>
                    </Nav.Link>
                    <Nav.Link eventKey="#">
                        <i class="fab fa-twitter"></i>
                    </Nav.Link>
                    <Nav.Link eventKey="#">
                        <i class="fab fa-instagram"></i>
                    </Nav.Link>
                </div>
                <div className="develop_author">
                    Design & Development by <span>Florent Hajdari.</span>  All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
