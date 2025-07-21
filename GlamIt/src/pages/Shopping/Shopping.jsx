import React, { useEffect, useState } from "react";

const Shopping = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError("Location permission denied.");
        }
      );
    } else {
      setError("Geolocation not supported.");
    }
  }, []);

  const handleRedirect = () => {
    if (coords) {
      const { lat, lng } = coords;
      const mapsUrl = `https://www.google.com/maps/search/shopping+near+${lat},${lng}`;
      window.open(mapsUrl, "_blank");
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Nearby Shopping</h1>
      {error && <p className="text-red-600">{error}</p>}
      {!coords && !error && <p>Detecting your location...</p>}
      {coords && (
        <button
          onClick={handleRedirect}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Find Nearby Shopping Places
        </button>
      )}
    </div>
  );
};

export default Shopping;
