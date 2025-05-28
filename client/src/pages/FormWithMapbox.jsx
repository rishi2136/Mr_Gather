import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import useUserManagement from "../hooks/useUserManagement";
import Loader from "../utils/Loader";

// Mapbox Access Token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const FormWithMapbox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const geocoderRef = useRef(null);
  const { handleAddUser } = useUserManagement();
  const { name: fullName, isAdmin } = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const { state: userInfo } = location;
  console.log(userInfo);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    id: userInfo?.id || "",
    name: userInfo?.name || "",
    email: userInfo?.email || "",
    phone: userInfo?.phone || "",
    hobbies: userInfo?.hobbies || "",
    brief: userInfo?.brief || "",
    address: userInfo?.address || "",
    coords: userInfo?.coords || null,
    photo: userInfo?.photo || "",
  });

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: userInfo?.coords || [77.1025, 28.7041],
      zoom: 9,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: true,
      placeholder: "Search for your address...",
    });

    geocoderRef.current = geocoder;

    map.current.addControl(geocoder);

    geocoder.on("loading", () => {
      // console.log('Geocoding loading:', e.query);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });

    geocoder.on("result", (e) => {
      const coords = e.result.center;
      const address = e.result.place_name;

      setFormData((prev) => ({
        ...prev,
        address,
        coords,
      }));
    });

    return () => map.current.remove();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // onSubmit && onSubmit(formData);
    // users.push({ id: users.length + 1, ...formData });
    handleAddUser(formData);
    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
      hobbies: "",
      brief: "",
      address: "",
      coords: null,
      photo: "",
    });
  };

  if (!isAdmin) {
    toast.error("You need to login as admin");
    return (
      <>
        <Navigate to={"/login"} />
      </>
    );
  }

  return (
    <>
      {isLoading ? (
        <Loader message="Map Loading"></Loader>
      ) : (
        <div className="min-h-screen bg-gradient-to-br bg-[#F3F4F6] flex items-center justify-center px-4 py-8 transition-all duration-500">
          <div className="max-w-3xl w-full bg-white p-8 rounded-3xl shadow-lg border  animate-slideIn">
            <h2 className="text-3xl font-bold text-teal-700 text-center mb-6">
              {fullName && `Hey ${fullName.toUpperCase()}, Please`}🌍 Enter User
              Detail
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone No", name: "phone", type: "tel" },
                { label: "Hobbies", name: "hobbies", type: "text" },
                { label: "Photo url", name: "photo", type: "text" },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block font-semibold text-gray-700">
                    {label}:
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block font-semibold text-gray-700">
                  Define Yourself:
                </label>
                <textarea
                  name="brief"
                  rows={3}
                  value={formData.brief}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                  placeholder="Describe yourself in a few words..."
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700">
                  Pick Your Location:
                </label>
                <div
                  ref={mapContainer}
                  className="w-full h-72 mt-2 border rounded"
                />
              </div>

              {/* <GeocoderInput onSelect={handleLocation} /> */}

              {formData.address && (
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Selected Address:</strong> {formData.address}
                </p>
              )}

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-lg shadow transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormWithMapbox;
