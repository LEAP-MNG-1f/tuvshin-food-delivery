"use client"; // Ensure it's client-side rendering

import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import StarIcon from "../svg/StarIcon";

const containerStyle = {
  width: "65%",
  height: "400px",
};

const center = {
  lat: 47.9221,
  lng: 106.9155,
};

const MyMap: React.FC = () => {
  const [selected, setSelected] = React.useState<google.maps.LatLng | null>(
    null
  );

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <LoadScript googleMapsApiKey="AIzaSyDekV3AERjuxSeNx8rYFNgYWkeyfu_M9QQ">
          {" "}
          {/* Replace with your actual API key */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onClick={(e: google.maps.MapMouseEvent) => setSelected(e.latLng)}
          >
            <Marker position={center} />

            {selected && (
              <InfoWindow
                position={selected}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <h2>Selected Location</h2>
                  <p>Latitude: {selected.lat()}</p>
                  <p>Longitude: {selected.lng()}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex items-center justify-stretch gap-3 ">
          <StarIcon />
          <h3 className="text-2xl font-bold">Хүргэлтийн бүс дэх хаягууд</h3>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MyMap;
