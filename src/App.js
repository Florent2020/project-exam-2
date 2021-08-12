import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./components/home/HomePage";
import AccommodationsDetail from "./components/home/AccommodationsDetail";
import BookingEnquiry from "./components/booking/BookingEnquary";
import AdminPage from "./components/admin/AdminPage";
import AccommodationsPage from "./components/accomodations/AccommodationsPage";
import Contact from "./components/contact/Contact";
import LoginPage from "./components/login/LoginPage";
import FavoriteTripsPage from "./components/home/TripsPage";
import OverviewAdmin from "./components/admin/overview/OverviewAdmin";
import AddAccommodation from "./components/admin/AddAdmin";
import MessagesAdmin from "./components/admin/messages/MessagesAdmin";
import ViewMessages from "./components/admin/messages/ViewMessages";
import EnquiriesAdmin from "./components/admin/enquiries/EnquiriesAdmin";
import ViewEnquiries from "./components/admin/enquiries/ViewEnquiries";
import AdminAccommodations from "./components/admin/AdminAccommodations";
import EditAccommodation from "./components/admin/Edit";
import Footer from "./components/layout/Footer";
import "./sass/style.scss";
import Header from "./components/layout/Header";

function App() {
  return (
    <AuthProvider>
      <div className="bg">
        <div className="wrapper">
          <Router>
            <Header />
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
              <Route path="/favoriteTrips">
                <FavoriteTripsPage />
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
