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
import AccommodationsDetail from "./components/home/AccomodationsDetail";
// import BookingEnquiry from "./components/home/BookingEnquiry";
import BookingEnquiry from "./components/booking/BookingEnquary";
import Nav from "./components/layout/Nav";
import InfoHeader from "./components/layout/InfoHeader";
import AdminPage from "./components/admin/AdminPage";
import Contact from "./components/contact/Contact";
import LoginPage from "./components/login/LoginPage";
import OverviewAdmin from "./components/admin/OverviewAdmin";
import AddAdmin from "./components/admin/AddAdmin";
import MessagesAdmin from "./components/admin/MessagesAdmin";
import EnquiriesAdmin from "./components/admin/EnquiriesAdmin";
import AdminHotels from "./components/admin/hotels/AdminHotels";
import EditHotel from "./components/admin/hotels/Edit"
import AdminBBs from "./components/admin/BBs/AdminBBs";
import AdminGuesthouses from "./components/admin/guesthouses/AdminGuesthouses";
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
                                    <Route path="/home/hotels/:id">
                                        <AccommodationsDetail />
                                    </Route>
                                    <Route path="/booking/Booking">
                                        <BookingEnquiry />
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
                                        <AddAdmin />
                                    </Route>
                                    <Route path="/admin/messages">
                                        <MessagesAdmin />
                                    </Route>
                                    <Route path="/admin/enquiries">
                                        <EnquiriesAdmin />
                                    </Route>
                                    <Route path="/admin/hotels">
                                        <AdminHotels />
                                    </Route>
                                    <Route path="/admin/edit/:id">
                                        <EditHotel />
                                    </Route>
                                    <Route path="/admin/BBs">
                                        <AdminBBs />
                                    </Route>
                                    <Route path="/admin/guesthouses">
                                        <AdminGuesthouses />
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
