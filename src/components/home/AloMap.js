import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// import MapStyles from "./MapStyles";

const mapContainerStyle = {
  width: "100%",
  height: "350px",
};

const center = {
  lat: 60.38805,
  lng: 5.33186,
};

const MapView = (props) => {
  center.lat = props.lat;
  center.lng = props.lng;
  //
  // const libraries = ["places"];

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyAZ-k_AJF0G0UOyNca2XefOjQsX6PfqWoQ",
  //   libraries,
  // });

  return (
    <>
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          // options={options}

          onClick={(e) => {
            console.log(e);
          }}
        >
          <Marker position={center} title={props.hotel} />
          {/* <InfoWindow position={center}>
            <div>
              <h6>{props.hotelName}</h6>
            </div>
          </InfoWindow> */}
        </GoogleMap>
      </div>
    </>
  );
};

export default MapView;

// import React from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";
// import MapStyles from "./MapStyles";

// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100%",
//   height: "350px",
// };
// const center = {
//   lat: 60.38805,
//   lng: 5.33186,
// };
// // const options = {
// //     styles: MapStyles
// // }

// function AloMap() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyAZ-k_AJF0G0UOyNca2XefOjQsX6PfqWoQ",
//     libraries,
//   });

//   if (loadError) return "Error loading maps";
//   if (!isLoaded) return "Loading Maps";

//   return (
//     <div>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}
//         center={center}
//         // options={options}
//         onClick={(e) => {
//           console.log(e);
//         }}
//       ></GoogleMap>
//     </div>
//   );
// }

// export default AloMap;

// // import React from 'react';
// // import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

// // function MapItem() {
// //     return (
// //         <GoogleMap
// //             defaultZoom={10}
// //             defaultCenter={{ lat: 59.565480, lng: 9.272400}}
// //         />

// //     )
// // }

// // const WrappedMap = withScriptjs(withGoogleMap(MapItem));

// // function Map() {
// //     return (
// //         <div>
// //             <WrappedMap
// //                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAZ-k_AJF0G0UOyNca2XefOjQsX6PfqWoQ`}
// //                 loadingElement={<div style={{ height: `100%` }} />}
// //                 containerElement={<div style={{ height: `400px` }} />}
// //                 mapElement={<div style={{ height: `100%` }} />}
// //             />
// //         </div>

// //     )
// // }

// // export default Map
