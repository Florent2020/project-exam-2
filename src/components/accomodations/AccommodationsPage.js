import React from "react";
import AccommodationsList from "./AccommodationsList";
import JumbotronAccommodations from "./JumbotronAccommodations";

function AccommodationsPage() {
  return (
    <div>
      <JumbotronAccommodations />
      <AccommodationsList />
    </div>
  );
}

export default AccommodationsPage;
