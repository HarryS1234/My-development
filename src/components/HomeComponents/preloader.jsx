import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo webp.webp";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Preloader will disappear after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-5000000 transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Curtains */}
        <div
          className={`fixed top-0 left-0 w-1/2 h-full bg-[#1dbbec] transform transition-transform duration-1000 ${
            loading ? "translate-x-0" : "-translate-x-full"
          }`}
        ></div>
        <div
          className={`fixed top-0 right-0 w-1/2 h-full bg-[#1dbbec] transform transition-transform duration-1000 ${
            loading ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>

        {/* Logo with enhanced bounce animation */}
        <img
          src={logo} // Replace with your logo path
          alt="Logo"
          className="w-24 h-24 animate-super-bounce z-50" // Custom bounce animation
        />
      </div>

      {/* Navbar with higher z-index */}
      <nav className="fixed top-0 left-0 w-full bg-transparent z-100">
        {/* Your Navbar Content */}
      </nav>
    </>
  );
};

export default Preloader;