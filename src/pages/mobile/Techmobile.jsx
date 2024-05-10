import React, { useState, useEffect } from "react";

const Techmobile = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      path: "../../Assets/frontend.png",
      title: "Front-End Developer",
      description: "React / NextJS • 8 weeks",
    },
    {
      path: "./../Assets/backend.png",
      title: "Back-End Developer",
      description: "Node.js / Express • 8 weeks",
    },
    {
      path: "./../Assets/fullstack.png",
      title: "Full-Stack Developer",
      description: "  React / NextJS / NodeJS • 14 weeks",
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
      <div className="text p-2">
        <h2 className="hero-text my-2 md:text-[46px] lg:leading-[62.1px] text-center text-2xl">
          Our Tech Schools
        </h2>
        <p className="hero-para text-[20px] text-center">
          With a live, immersive Bootcamp, you can jump-start or accelerate your
          career in digital technology.
        </p>

        <p className="text-4xl text-sky-600 font-bold my-8 text-center">
          Software Development School
        </p>
      </div>
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

export default Techmobile;
