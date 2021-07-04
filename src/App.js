import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink';
import Logo from "./images/logo_.png";
import Image from "react-bootstrap/Image";
import bg from "./images/bg_texture1.png";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./components/home/HomePage";
import AccommodationsDetail from "./components/home/AccommodationsDetail";
// import BookingEnquiry from "./components/home/BookingEnquiry";
import BookingEnquiry from "./components/booking/BookingEnquary";
import Nav from "./components/layout/Nav";
import InfoHeader from "./components/layout/InfoHeader";
import AdminPage from "./components/admin/AdminPage";
import AccommodationsPage from "./components/accomodations/AccommodationsPage"
import Contact from "./components/contact/Contact";
import LoginPage from "./components/login/LoginPage";
import OverviewAdmin from "./components/admin/overview/OverviewAdmin";
import AddAccommodation from "./components/admin/AddAdmin";
import MessagesAdmin from "./components/admin/messages/MessagesAdmin";
import ViewMessages from "./components/admin/messages/ViewMessages"
import EnquiriesAdmin from "./components/admin/enquiries/EnquiriesAdmin";
import ViewEnquiries from "./components/admin/enquiries/ViewEnquiries";
import AdminAccommodations from "./components/admin/AdminAccommodations";
import EditAccommodation from "./components/admin/Edit"
import Footer from "./components/layout/Footer";
import "./sass/style.scss";

function App() {
  return (
        <AuthProvider>
             <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
                <div className="wrapper">
                        <Router>
                            <div className="header">
                                    <InfoHeader />
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
                                    <Route path="/accommodation/detail/:id">
                                        <AccommodationsDetail />
                                    </Route>
                                    <Route path="/accommodation/booking/:id">
                                        <BookingEnquiry />
                                    </Route>

                                    <Route path="/accommodations">
                                        <AccommodationsPage />
                                    </Route>
                                    <Route path="/contact">
                                        <Contact />
                                    </Route>
                                    <Route path="/login">
                                        <LoginPage />
                                    </Route>
                                    <Route path="/admin/dashboard" exact>
                                        <AdminPage />
                                    </Route>
                                    <Route path="/admin/overview">
                                        <OverviewAdmin />
                                    </Route>
                                    <Route path="/admin/add">
                                        <AddAccommodation />
                                    </Route>
                                    <Route path="/admin/messages">
                                        <MessagesAdmin />
                                    </Route>
                                    <Route path="/admin/viewMessages/:id">
                                        <ViewMessages />
                                    </Route>
                                    <Route path="/admin/enquiries">
                                        <EnquiriesAdmin />
                                    </Route>
                                    <Route path="/admin/viewEnquiries/:id">
                                        <ViewEnquiries />
                                    </Route>
                                    <Route path="/admin/accommodations">
                                        <AdminAccommodations />
                                    </Route>
                                    <Route path="/admin/accommodation/edit/:id">
                                        <EditAccommodation />
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
