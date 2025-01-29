import React, { useEffect, useRef, useState } from 'react';

const MapSection = () => {
  const mapRef = useRef(null); // Reference to the map container
  const [mapError, setMapError] = useState(null); // State to handle map loading errors
  const [scriptLoaded, setScriptLoaded] = useState(false); // State to track if the script is loaded

  useEffect(() => {
    // Check if the Google Maps script is already loaded
    if (window.google && window.google.maps) {
      initMap();
      return;
    }

    // Avoid re-loading the script if it's already being loaded
    if (scriptLoaded) return;

    // Dynamically load the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_MAPS_API_KEY}`;
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
      initMap();
    };
    script.onerror = () => {
      setMapError("Failed to load Google Maps script. Please check your network connection or API key.");
    };
    document.head.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, [scriptLoaded]);

  const initMap = () => {
    try {
      // Location of Veerji Cooling Comforts Inc.
      const location = { lat: 43.760000, lng: -79.704350 }; // Coordinates for 2500 Williams Pkwy, Brampton, ON

      // Map centered at the location
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: location,
      });

      // Marker positioned at the location
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Veerji Mechanical",
      });

      // Info window content for Veerji Cooling Comforts Inc.
      const contentString = `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
          <h3 style="margin: 0; padding: 0; font-size: 16px;">Veerji Mechanical</h3>
          <p><span style="color: gold;">&#9733;</span> 4.5 (Google reviews)</p>
          <p>Establishment in Brampton, Ontario</p>
          <p><strong>Address:</strong> 2500 Williams Pkwy Unit #12, Brampton, ON L6S 5M9</p>
          <p><strong>Phone:</strong> <a href="tel:+16472106862">(647) 210-6862</a></p>
          <p><strong>Hours:</strong> Closed ⋅ Opens 9 a.m. Mon</p>
          <p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Veerji+Cooling+Comforts+Inc.,+2500+Williams+Pkwy+Unit+%2312,+Brampton,+ON+L6S+5M9" 
          style="color: #1dbbec; text-decoration: none;font-weight: bold;" 
          target="_blank">
         Get Directions
       </a> |
            <a   style="color: #1dbbec; font-weight: bold; text-decoration: none;" href="https://www.veerjimechanical.ca/" target="_blank">Website</a> | 
            <a   style="color: #1dbbec; text-decoration: none; font-weight: bold; " href="https://maps.google.com/?q=Veerji+Cooling+Comforts+Inc." target="_blank">Share</a>
          </p>
        </div>
      `;

      // Info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: contentString,
      });

      // Open the info window when the marker is clicked
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      // Optionally, open the info window by default
      infoWindow.open(map, marker);
    } catch (error) {
      setMapError("Failed to initialize Google Maps. Please try again later.");
      console.error("Google Maps initialization error:", error);
    }
  };

  return (
    <div className="bg-white mt-10 py-12"> {/* Gray background to match your theme */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
        {mapError ? (
          <div className="text-center text-red-500">{mapError}</div>
        ) : (
          <div
            ref={mapRef}
            style={{ width: '100%', height: '600px' }} // Responsive height
            className="rounded-lg shadow-lg"
          ></div>
        )}
      </div>
    </div>
  );
};

export default MapSection;