import React from "react";

const BrandsSection = () => {
  // Array of all brand logos (updated paths to the public folder)
  const brands = [
    "/assets/Hvac brands/Brand1.png",
    "/assets/Hvac brands/Brand2.png",
    "/assets/Hvac brands/Brand3.png",
    "/assets/Hvac brands/Brand4.png",
    "/assets/Hvac brands/Brand5.png",
    "/assets/Hvac brands/Brand6.png",
    "/assets/Hvac brands/Brand7.png",
    "/assets/Hvac brands/Brand8.png",
    "/assets/Hvac brands/Brand9.png",
    "/assets/Hvac brands/Brand10.png",
    "/assets/Hvac brands/Brand11.png",
    "/assets/Hvac brands/Brand12.png",
    "/assets/Hvac brands/Brand13.png",
    "/assets/Hvac brands/Brand14.png",
    "/assets/Hvac brands/Brand15.png",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Trusted Brands</h2>

        {/* Brand Logos Container */}
        <div className="overflow-hidden relative">
          {/* First Row (Left to Right Animation) */}
          <div className="flex space-x-8 animate-marquee whitespace-nowrap">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-16 md:h-20 object-contain"
              />
            ))}
          </div>

          {/* Second Row (Right to Left Animation) */}
          <div className="flex space-x-8 animate-marquee-reverse whitespace-nowrap mt-8">
            {[...brands].reverse().map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-16 md:h-20 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
