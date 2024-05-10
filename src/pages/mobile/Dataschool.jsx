import React, { useState, useEffect } from "react";

const DataSchool = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      path: "../../Assets/softtesting.png",
      title: "Software Testing",
      description: "Python • 8 weeks",
    },
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const currentImageData = images[currentImage];

  return (
       <div className="lg:hidden">
      <p className="text-4xl font-bold my-10 text-sky-600 text-center">
        Data Science
      </p>
      <div
        className="flex shadow-xl flex-col justify-center mx-5 p-5 border-2 rounded-2xl"
        style={{ textAlign: "center" }}
      >
        <img src={currentImageData.path} alt={`Image ${currentImage + 1}`} />
        <p className="my-4 text-2xl font-bold">{currentImageData.title}</p>
        <p className="hero-para ">{currentImageData.description}</p>
      </div>
    </div>
  );
};

export default DataSchool;
