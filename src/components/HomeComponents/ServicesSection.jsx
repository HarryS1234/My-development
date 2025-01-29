import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Commercial Refrigeration */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <img
              src="/assets/images/Project%20Image%204.webp" // Updated path for refrigeration image
              alt="Commercial Refrigeration"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#1dbbec] transition-colors duration-300">
              Commercial Refrigeration
            </h3>
            <p className="text-white group-hover:text-gray-800 transition-colors duration-300">
              Expert installation, maintenance, and repair services for commercial refrigeration systems.
            </p>
          </div>

          {/* Service 2: Commercial Supermarkets */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <img
              src="/assets/Supermarket.jpg" // Updated path for supermarket image
              alt="Commercial Supermarkets"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#1dbbec] transition-colors duration-300">
              Commercial Supermarkets
            </h3>
            <p className="text-white group-hover:text-gray-800 transition-colors duration-300">
              Comprehensive solutions for supermarket refrigeration needs, ensuring optimal performance.
            </p>
          </div>

          {/* Service 3: Air Conditioning */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <img
              src="/assets/images/Specialty%20freezer.png" // Updated path for air conditioning image
              alt="Air Conditioning"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#1dbbec] transition-colors duration-300">
              Specialty Freezers
            </h3>
            <p className="text-white group-hover:text-gray-800 transition-colors duration-300">
              Installation and maintenance of air conditioning systems for commercial spaces.
            </p>
          </div>

          {/* Service 4: Heating Systems */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <img
              src="/assets/images/HVAC.jpg" // Updated path for heating image
              alt="Heating Systems"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#1dbbec] transition-colors duration-300">
              HVAC Systems
            </h3>
            <p className="text-white group-hover:text-gray-800 transition-colors duration-300">
              Reliable heating solutions to keep your business warm during colder months.
            </p>
          </div>

          {/* Service 5: Walk-In Coolers */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <img
              src="/assets/images/Walk-In-Cooler.jpg"// Updated path for walk-in cooler image
              alt="Walk-In Coolers"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#1dbbec] transition-colors duration-300">
              Walk-In Coolers
            </h3>
            <p className="text-white group-hover:text-gray-800 transition-colors duration-300">
              Specialized services for walk-in coolers, ensuring they operate efficiently.
            </p>
          </div>

          {/* Service 6: Troubleshooting & Repairs */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <img
              src="/assets/images/Repair.webp"// Updated path for troubleshooting image
              alt="Troubleshooting & Repairs"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#1dbbec] transition-colors duration-300">
              Troubleshooting & Repairs
            </h3>
            <p className="text-white group-hover:text-gray-800 transition-colors duration-300">
              Quick and efficient troubleshooting and repair services for all your refrigeration and HVAC needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
