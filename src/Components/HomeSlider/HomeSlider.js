import React, { useEffect, useState } from "react";

const images = [
  "https://i.ibb.co/0GqcV0G/electon-e-Commerce-slider-img.webp",
  "https://i.ibb.co/RHzhf9v/electon-e-Commerce-slider-img-2.webp",
  "https://i.ibb.co/sJJZRww/electon-e-Commerce-slider-img-3.webp",
  "https://i.ibb.co/hKWyGWt/electon-e-Commerce-slider-img-4.webp",
];
const HomeSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className=" relative w-full h-80">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000
             ${index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="d-block mw-100 img-fit overflow-hidden h-sm-auto h-md-320px h-lg-460px overflow-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
