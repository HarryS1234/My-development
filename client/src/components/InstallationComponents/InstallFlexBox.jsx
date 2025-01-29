import React from "react";

const InstallFlexBox = () => {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center bg-white py-8 sm:py-12">
      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-serif text-center">
        Our Distinctive Approach to Installation
      </h2>

      {/* Container 1: Image on Left, Content on Right */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Image on Left */}
        <div className="flex-1 h-64 md:h-96 overflow-hidden">
          <img
            src="/assets/images/Project Image.webp"
            alt="Installation Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content on Right */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
            Custom Solutions to Suit Your Space and Needs
          </h4>
          <p className="text-sm sm:text-base lg:text-lg font-semibold  text-gray-700">
            Every business space is unique. Our team evaluates your specific
            layout, usage requirements, and operational demands to deliver a
            custom installation that fits perfectly within your business
            environment.
          </p>
        </div>
      </div>

      {/* Container 2: Image on Right, Content on Left */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Content on Left */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
            Leading Technology and Industry Standards
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
            We leverage advanced tools and adhere to the latest industry
            standards, ensuring your systems run at their best from day one.
            From walk-in coolers to HVAC systems, we bring you solutions that
            align with modern energy and efficiency requirements
          </p>
        </div>

        {/* Image on Right */}
        <div className="flex-1 h-64 md:h-96 overflow-hidden order-1 md:order-2">
          <img
            src="/assets/screenshot/img1.png"
            alt="Installation Image 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Container 3: Image on Left, Content on Right */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Image on Left */}
        <div className="flex-1 h-64 md:h-96 overflow-hidden">
          <img
            src="/assets/screenshot/img2.png"
            alt="Installation Image 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content on Right */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
            Expert Technicians
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
            Our skilled technicians use the latest technology and best practices
            to ensure your systems operate at peak efficiency.
          </p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-serif text-center">
        Maintenance Services That Extend System Life
      </h2>

      {/* Container 4: Image on Right, Content on Left */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Content on Left */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
            Rapid Response Emergency Maintenance
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
            When you face an unexpected breakdown, our team is ready to respond
            quickly, 24/7. Our emergency maintenance services reduce downtime
            and get your operations back up and running as soon as possible.
          </p>
        </div>

        {/* Image on Right */}
        <div className="flex-1 h-64 md:h-96 overflow-hidden order-1 md:order-2">
          <img
            src="assets/screenshot/img3.png"
            alt="Installation Image 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Container 5: Image on Left, Content on Right */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Image on Left */}
        <div className="flex-1 h-64 md:h-96 overflow-hidden">
          <img
            src="/assets/screenshot/img4.png"
            alt="Installation Image 5"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content on Right */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
            Comprehensive Diagnostics and Solutions
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
            Our technicians are skilled in identifying and resolving any issues
            early on. Our approach helps you avoid extensive repairs down the
            road and extends the lifespan of your systems.
          </p>
        </div>
      </div>

      {/* Container 6: Image on Right, Content on Left */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Content on Left */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
            Leading Technology and Industry Standards
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
            We leverage advanced tools and adhere to the latest industry
            standards, ensuring your systems run at their best from day one.
            From walk-in coolers to HVAC systems, we bring you solutions that
            align with modern energy and efficiency requirements
          </p>
        </div>

        {/* Image on Right */}
        <div className="flex-1 h-64 md:h-96 overflow-hidden order-1 md:order-2">
          <img
            src="/assets/Coolers.jpg"
            alt="Installation Image 6"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InstallFlexBox;
