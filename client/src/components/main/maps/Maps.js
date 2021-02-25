import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import icon from "../../../assets/rating (2).png";
import "../SearchResult.css";

const Maps = ({ props }) => {
  //console.log(props.coord.lon)
  const librairies = ["places"];
  const mapContainerStyle = {
    width: "500px",
    height: "500px",
  };
  const center = {
    lat: props.coord.lat,
    lng: props.coord.lon,
  };
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    librairies,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={4}
        center={center}
        options={options}
      >
        <Marker
          key={props.name}
          position={{ lat: props.coord.lat, lng: props.coord.lon }}
          icon={{
            url: icon,
            scaledSize: new window.google.maps.Size(50, 50),
            origin: new window.google.maps.Point(0, 0),
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Maps;
