import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const GeocoderInput = ({ onSelect }) => {
  const geocoderContainerRef = useRef(null);

  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      placeholder: "Gorakhpur, Uttar Pradesh",
      types: "place,postcode,address",
      mapboxgl,
      marker: false,
    });

    if (geocoderContainerRef.current) {
      geocoder.addTo(geocoderContainerRef.current); // Adds its own input field here

      geocoder.on("result", (e) => {
        const coords = e.result.center;
        onSelect(coords, e.result.place_name);
      });
    }

    return () => geocoder.clear();
  }, [onSelect]);

  return <div ref={geocoderContainerRef}></div>; // ONLY this <div> needed
};

export default GeocoderInput;
