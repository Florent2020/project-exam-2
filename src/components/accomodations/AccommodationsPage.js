import React from "react";
import { Helmet } from "react-helmet";
import AccommodationsList from "./AccommodationsList";
import JumbotronAccommodations from "./JumbotronAccommodations";

function AccommodationsPage() {
  return (
    <div>
      <Helmet>
        <title>
          Book Accommodations | Cancel Free on Most Accommodations | at
          Holidaze!
        </title>
        <meta
          name="description"
          content="Exclusive Deals, Central Locations! Search & Book Cheap Accommodations Online at Holidaze!"
        />
      </Helmet>
      <JumbotronAccommodations />
      <AccommodationsList />
    </div>
  );
}

export default AccommodationsPage;
