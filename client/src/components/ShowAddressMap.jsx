import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const ShowAddressMap = ({ coords, placeName }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: coords,
      zoom: 14,
    });

    new mapboxgl.Marker().setLngLat(coords).addTo(map);

    return () => map.remove();
  }, [coords]);

  return (
    <div>
      <h2>{placeName}</h2>
      <div ref={mapContainer} style={{ height: "400px" }} />
    </div>
  );
};

export default ShowAddressMap;
