import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink';
import Logo from "./images/Logo.png";
import Image from "react-bootstrap/Image";
import bg from "./images/bg_texture1.png";
import { AuthProvider } from "./context/AuthContext";
import "./sass/style.scss";
import HomePage from "./components/home/HomePage"
import Nav from "./components/layout/Nav";
import AdminPage from "./components/admin/AdminPage";
import Contact from "./components/contact/Contact";
import LoginPage from "./components/login/LoginPage";
import Footer from "./components/layout/Footer";

function App() {
  return (
        <AuthProvider>
             <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
                <div className="wrapper">

                        <Router>
                            <div className="header">
                                <Navbar bg="dark"  variant="dark" expand="lg">
                                    <Container>
                                        <NavLink to="/" className="nav--logo">
                                            <Navbar.Brand>
                                            <Image src={Logo} className="logo" alt="logo" />
                                            </Navbar.Brand>
                                        </NavLink>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav />
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </div>
                                <Switch>
                                    <Route path="/" exact>
                                        <HomePage />
                                    </Route>
                                    <Route path="/contact">
                                        <Contact />
                                    </Route>
                                    <Route path="/login">
                                        <LoginPage />
                                    </Route>
                                    <Route path="/admin" exact>
                                        <AdminPage />
                                    </Route>
                                </Switch>
                        </Router>
                    </div>
            </div>
          <Footer />
        </AuthProvider>
  );
}

export default App;
