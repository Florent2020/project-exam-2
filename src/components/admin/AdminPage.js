import Heading from "../layout/Heading";
import { NavLink } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg from "../../images/bg_form.png";
// import Tab from "./Tabs";

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function AdminPage() {
  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

  return (
    <div className="admin" style={{ backgroundImage: `url(${bg})` }}>
      <Row>
        <Col sm={12} md={12} className="accommodations--admin">
          <Container>
            <Heading content="Admin page" />
            <Row>
              <Col sm={12} md={6}>
                <div className="admin--hotels linkk">
                  <NavLink to="/admin/accommodations">
                    Link to Accommodations
                  </NavLink>
                  {/* <Tab /> */}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
