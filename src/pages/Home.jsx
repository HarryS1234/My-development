import React from "react";
import ServicesSection from "../components/HomeComponents/ServicesSection.jsx";
import videoFile from "../assets/video1.mp4";
import CountUpSection from "../components/HomeComponents/CountUpSection.jsx";
import BrandsSection from "../components/HomeComponents/BrandsSection.jsx";
import ContactSection from "../components/ReuseComponents/ContactSection.jsx";
import ReviewSection from "../components/ReuseComponents/ReviewsSection.jsx";
import MapSection from "../components/ReuseComponents/MapsSection.jsx";
import Footer from "../components/ReuseComponents/Footer.jsx";
import Header from "../components/ReuseComponents/Header.jsx";
import Navbar from "../components/ReuseComponents/Navbar.jsx";
import Preloader from "../components/HomeComponents/preloader.jsx";

const Home = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Navbar />
      {/* Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Left Side Ovals */}
        <div className="absolute flex flex-col space-y-4 sm:space-y-8 top-4 sm:top-8 md:top-16 left-2 sm:left-4 md:left-8">
          {/* Serving Businesses Oval */}
          <div className="bg-[#1dbbec] opacity-90 w-[160px] sm:w-[200px] md:w-[280px] lg:w-[400px] h-24 sm:h-28 md:h-36 lg:h-48 rounded-[50%] flex items-center justify-center text-white font-bold p-2 sm:p-4 text-center text-xs sm:text-sm md:text-lg lg:text-xl border-2 border-white">
            Serving Businesses
            <br />
            From Last 30 Years
          </div>
        </div>

        {/* Main Centered Oval (Slightly Left) */}
        <div className="absolute bg-[#1dbbec] border-2 border-white opacity-90 top-24 sm:top-32 md:top-48 lg:top-64 left-2 sm:left-4 md:left-8 lg:left-16 w-[200px] sm:w-[240px] md:w-[320px] lg:w-[480px] xl:w-[580px] h-32 sm:h-40 md:h-56 lg:h-72 xl:h-80 rounded-[50%] flex items-center justify-center">
          <p className="text-center font-semibold text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 text-gray-50">
            <span className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl">
              VeerJi Mechanical
            </span>
            <br />
            is an Authorized Service Centre for
            <br />
            <span className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl">
              Commercial Refrigeration,
            </span>
            <br />
            Air Conditioning, and Heating in Ontario.
            <br />
            We serve Brampton, Mississauga, and the GTA,
            <br />
            providing installation, maintenance,
            <br />
            and troubleshooting services for businesses.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CountUpSection />
      <BrandsSection />
      <ContactSection />
      <ReviewSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Home;