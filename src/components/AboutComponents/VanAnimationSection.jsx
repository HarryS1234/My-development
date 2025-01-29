import React, { useRef, useEffect, useState } from "react";

const VanAnimationSection = () => {
  const vanRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (vanRef.current) {
      observer.observe(vanRef.current);
    }

    return () => {
      if (vanRef.current) {
        observer.unobserve(vanRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={vanRef}
      className="van-animation"
      style={{
        backgroundColor: "white", // Adjust background color as needed
        padding: "20px 0",
        overflow: "hidden", // Ensure the animation doesn't overflow
        minHeight: "300px", // Add a minimum height to ensure the image is visible
        position: "relative", // Ensure the image stays within the container
      }}
    >
      {isVisible && (
        <img
          src="/assets/new van (1).webp" // Updated path to the public folder
          alt="Van"
          className="van"
          loading="lazy" // Lazy load the image
          style={{
            width: "100%", // Make the image responsive
            maxWidth: "600px", // Set a max-width for larger screens
            height: "auto",
            animation: isVisible ? "vanMove 10s linear infinite" : "none",
            position: "absolute", // Position the image absolutely within the container
            left: 0, // Start from the left edge
          }}
        />
      )}
    </div>
  );
};

export default VanAnimationSection;
