import React from "react";
import Header from "../components/ReuseComponents/Header.jsx";
import Navbar from "../components/ReuseComponents/Navbar.jsx";
import Ref1 from "../components/RefComponents/Ref1";

import FlexBoxSection from "../components/RefComponents/FlexboxSection.jsx";


import AssistanceSection from "../components/RefComponents/AssistanceSection";
import Footer from "../components/ReuseComponents/Footer.jsx";

const Refrigeration = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Ref1 />
      <FlexBoxSection />
      <AssistanceSection />
      <Footer />
    </div>
  );
};

export default Refrigeration;
