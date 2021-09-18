// import React from "react";
// import { Helmet } from "react-helmet";
// import JumbotronPage from "./Jumbotron";
// import AccommodationPart from "./AccommodationPart";
// import axios from "axios";
// import { BASE_URL } from "../../constants/api";
// import { useState, useEffect } from "react";
// import AccommodationList from "./AccommodationList";
// import ErrorMessage from "../layout/ErrorMessage";
// import Loader from "../layout/Loader";
// import OurGuarantees from "./OurGuarantees";
// import ThingsToDo from "./ThingsToDo";
// import Container from "react-bootstrap/Container";

// import SearchBox from "../search/SearchBox";

// function PaPagination() {
//   const [accommodations, setAccommodations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [searchField, setSearchField] = useState("");

//   const url = BASE_URL + `/accommodations`;

//   const savedAccommodation =
//     JSON.parse(localStorage.getItem("accommodation")) || [];

//   const [favourites, setFavourites] = useState(savedAccommodation);

//   useEffect(
//     function () {
//       async function getAccommodation() {
//         try {
//           const response = await axios.get(url);
//           console.log("response", response);
//           setAccommodations(response.data);
//         } catch (error) {
//           console.log(error);
//           setError(error.toString());
//         } finally {
//           setLoading(false);
//         }
//       }

//       getAccommodation();
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     },
//     [url, favourites]
//   );

//   if (loading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <ErrorMessage message={`Error: An error occured!`} />;
//   }

//   const saveToLocalStorage = (items) => {
//     localStorage.setItem("accommodation", JSON.stringify(items));
//   };

//   const favoriteTrips = (e, trip) => {
//     if (e.target.classList[2] === "fas") {
//       e.currentTarget.classList.remove("fas");
//     } else {
//       e.currentTarget.classList.add("fas");
//     }

//     const newFavouriteList = [
//       ...favourites.filter((favourite) => favourite.id !== trip.id),
//       trip,
//     ];
//     setFavourites(newFavouriteList);
//     saveToLocalStorage(newFavouriteList);

//     favourites.forEach((item) => {
//       if (item.id === trip.id) {
//         const items = JSON.parse(localStorage.getItem("accommodation"));
//         const filtered = [...items.filter((item) => item.id !== trip.id)];
//         setFavourites(filtered);
//         saveToLocalStorage(filtered);
//       }
//     });
//   };

//   const filteredAccommodation = accommodations.filter((item) =>
//     item.name.toLowerCase().includes(searchField.toLowerCase())
//   );

//   return (
//     <main>
//       <Helmet>
//         <title>
//           Holidaze | A website for Hotel Reservations from Luxury Hotels to
//           Budget Accommodations
//         </title>
//         <meta
//           name="description"
//           content="A great page where you can find easy your accommodation!"
//         />
//       </Helmet>
//       <JumbotronPage />
//       <AccommodationPart />
//       <Container className="home--container">
//         <SearchBox
//           placeholder="Search accommodation ..."
//           handleChange={(e) => setSearchField(e.target.value)}
//         />
//         <AccommodationList
//           accommodations={filteredAccommodation}
//           favoriteTrips={favoriteTrips}
//         />
//       </Container>
//       <OurGuarantees />
//       <ThingsToDo />
//     </main>
//   );
// }

// export default PaPagination;
