import React, { useState, useEffect } from "react";

const ProductMobile = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      path: "../../Assets/uiux.png",
      title: "UIUX Design",
      description: " Design With Figma • 8 weeks",
    },

    {
      path: "../../Assets/product.png",
      title: "Product Management",
      description: "Learn About Products • 8 weeks",
    },
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const currentImageData = images[currentImage];

  return (
    <div className="lg:hidden">
      <p className="text-4xl font-bold my-10 text-sky-600 text-center">
        Product Design
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

export default ProductMobile;
