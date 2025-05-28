// // components/UserLocationMap.jsx
// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

// const UserLocationMap = ({ coords, address }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   useEffect(() => {
//     if (!coords || !mapContainer.current) return;
//     if (map.current) return;

//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: coords,
//       zoom: 9,
//     });

//     map.current.addControl(new mapboxgl.NavigationControl());

//     new mapboxgl.Marker()
//       .setLngLat(coords)
//       .addTo(map.current);



//     return () => {
//       map.current?.remove();
//     };
//   }, [coords, address]);

//   return (
//     <div
//       ref={mapContainer}
//       className="w-full h-80 rounded-lg shadow-inner border border-gray-300"
//     />
//   );
// };

// export default UserLocationMap;


// components/UserLocationMap.jsx
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const UserLocationMap = ({ coords, address }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      console.error('Mapbox access token is missing. Check your .env file.');
      return;
    }

    if (
      !coords || 
      !Array.isArray(coords) || 
      coords.length !== 2 || 
      typeof coords[0] !== 'number' || 
      typeof coords[1] !== 'number'
    ) {
      console.warn('Invalid coordinates provided:', coords);
      return;
    }

    if (!mapContainerRef.current) return;

    // Prevent reinitialization
    if (mapRef.current) return;

    // Create the map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coords,
      zoom: 9,
    });

    // Add zoom and rotation controls
    mapRef.current.addControl(new mapboxgl.NavigationControl());

    // Add marker
    new mapboxgl.Marker().setLngLat(coords).addTo(mapRef.current);

    // Add popup with address
    new mapboxgl.Popup({ offset: 25 })
      .setLngLat(coords)
      .setHTML(`<div><strong>Location</strong><br/>${address || 'No address available'}</div>`)
      .addTo(mapRef.current);

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coords, address]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-80 rounded-lg border border-gray-300 shadow-inner"
      style={{ minHeight: '320px' }}
    />
  );
};

export default UserLocationMap;

