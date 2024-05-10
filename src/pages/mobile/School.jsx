import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const School = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <div>
      <div className="hero flex flex-wrap justify-center gap-10 mt-12 p-5">
        <div className="flex flex-col items-center">
          <img className="mt-8" src="../../Assets/icons/Frame 10.png" alt="" />
          <h1 className="hero-text text-3xl text-center mt-[-20px] ">
            Check Out Our Bootcamp Program!
          </h1>
          <p className="hero-para mt-6  text-[20px] text-center mb-5">
            With a live, immersive Bootcamp, you can jump-start or accelerate
            <br /> your career in digital technology.
          </p>
          <div className="flex gap-3 items-center mb-3">
            <img src="../../Assets/product-icon.png" alt="" />
            <h3 className="text-3xl font-semibold  text-sky-600 mb-3">
              Product School
            </h3>
          </div>
          <Link to="/uiux">
            <div className="flex items-center  bg-white px-8 p-3  justify-center shadow-lg rounded-lg border ">
              {/* <img src="../../Assets/figma-icon.png" alt="" /> */}
              <p className="text-xl font-bold w-[200px] text-center">
                UI/UX Design
              </p>
            </div>
          </Link>
        </div>
        {/* <div className="flex flex-col items-center"> */}
        <div className="flex gap-3 items-center justify-center">
          <img src="../../Assets/vscode.png" alt="" />
          <h3 className="text-center text-2xl font-semibold  text-sky-600">
            Software Developer School
          </h3>
        </div>
        <Link to="/Frontend">
          <div className="flex items-center  bg-white px-8 p-3  justify-center shadow-lg rounded-lg border">
            {/* <img src="../../Assets/figma-icon.png" alt="" /> */}
            <p className="text-xl font-bold">Front-End Developer</p>
          </div>
        </Link>
        <div>
          <Link to="/software">
            <div className="flex items-center bg-white w-[100%] p-3 px-8 justify-center shadow-lg rounded-lg border">
              {/* <img src="../../Assets/figma-icon.png" alt="" /> */}
              <p className="text-xl font-bold">Back-End Developer</p>
            </div>
          </Link>
        </div>
        <Link to="/Fullstack">
          <div className="flex items-center  bg-white  p-3 px-8  justify-center shadow-lg rounded-lg border">
            {/* <img src="../../Assets/figma-icon.png" alt="" /> */}
            <p className="text-xl font-bold">Full-Stack Developer</p>
          </div>
        </Link>
        <Link to="/Mobile">
          <div className="flex items-center  bg-white  p-3 px-8 w-[260px]  justify-center shadow-lg rounded-lg border">
            {/* <img src="../../Assets/figma-icon.png" alt="" /> */}
            <p className="text-xl font-bold">Mobile Developer</p>
          </div>
        </Link>

        <div className="flex gap-3 items-center mb-3">
          <img src="../../Assets/product-icon.png" alt="" />
          <h3 className="text-2xl font-semibold  text-sky-600 mb-3">
            Software Testing School{" "}
          </h3>
        </div>
        <Link to="/SoftwareSchool">
          <div className="flex items-center  bg-white px-8 p-3  justify-center shadow-lg rounded-lg border ">
            {/* <img src="../../Assets/figma-icon.png" alt="" /> */}
            <p className="text-xl font-bold w-[200px] text-center">
              Software Cypress and Automation{" "}
            </p>
          </div>
        </Link>

        <div className="flex gap-3 items-center mb-3">
          <img src="../../Assets/product-icon.png" alt="" />
          <h3 className="text-3xl font-semibold  text-sky-600 mb-3">
            Data School{" "}
          </h3>
        </div>
        <Link to="/Dataschool">
          <div className="flex items-center  bg-white px-8 p-3  justify-center shadow-lg rounded-lg border ">
            {/* <img src="../../Assets/figma-icon.png" alt="" /> */}
            <p className="text-xl font-bold w-[200px] text-center">
              Data Science{" "}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default School;
