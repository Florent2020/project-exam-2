// import Heading from "../layout/Heading";
// import { NavLink } from "react-router-dom";
// // import Nav from 'react-bootstrap/Nav';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import bg from "../../images/bg_form.png";
// // import Tab from "./Tabs";

// import { useContext } from "react";
// import { useHistory } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";

// export default function AdminPage() {
//   const [auth] = useContext(AuthContext);

//   const history = useHistory();

//   if (!auth) {
//     history.push("/");
//   }

//   return (
//     <main className="admin" style={{ backgroundImage: `url(${bg})` }}>
//       <Row>
//         <Col sm={12} md={12} className="accommodations--admin">
//           <Container>
//             <Heading content="Admin page" />
//             <Row>
//               <Col sm={12} md={6}>
//                 <div className="admin--hotels linkk">
//                   <NavLink to="/admin/accommodations">
//                     Link to Accommodations
//                   </NavLink>
//                   {/* <Tab /> */}
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </Col>
//       </Row>
//     </main>
//   );
// }

import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import Heading from "../layout/Heading";
import SearchBox from "../search/SearchBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import bg from "../../images/bg_form.png";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function AdminAccommodations() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchField, setSearchField] = useState("");

  const url = BASE_URL + `/accommodations`;

  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

  useEffect(function () {
    async function getAccommodation() {
      try {
        const response = await axios.get(url);
        // console.log("response", response);
        setAccommodations(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getAccommodation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: An error occured!`} />;
  }

  const filteredAccommodation = accommodations.filter((item) =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <main>
      <Helmet>
        <title>Dashboard Page | Holidaze!</title>
        <meta name="description" content="Dashboard Page | Holidaze!" />
      </Helmet>
      <div className="admin" style={{ backgroundImage: `url(${bg})` }}>
        <Container className="hotels--admin dashboard">
          <div className="accommocations--body">
            <Heading content="Accommodations" />
            <SearchBox
              placeholder="Search accommodation ..."
              handleChange={(e) => setSearchField(e.target.value)}
            />
            <Row>
              {filteredAccommodation.map((accommodation) => {
                return (
                  <Col sm={12} md={6} lg={3} key={accommodation.id}>
                    <Card className="dark--card">
                      <Card.Img
                        variant="top"
                        src={accommodation.image_url}
                        className="admin--images"
                      />
                      <Card.Body>
                        <Card.Title>
                          <h5>{accommodation.name}</h5>
                        </Card.Title>
                        <Link
                          to={`/admin/accommodation/edit/${accommodation.id}`}
                          className="accommodation--button"
                        >
                          <Button variant="primary" className="edit">
                            <i className="fas fa-edit"></i>Edit
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default AdminAccommodations;
