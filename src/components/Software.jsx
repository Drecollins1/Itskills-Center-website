import React from "react";
// import Header from "./header";

export default function Software() {
  return (
    <>
    {/* <Header /> */}
    <div className="container software-components flex gap-12 ">
      <div className=" software-container">
        <img className="frontend" src="../../Assets/frontend.png" alt="" />
        <p className="text-2xl font-bold mt-3">Front-End Developer</p>
        <p className="hero-para ">
          React  / NextJS <span className="dot">•</span> 8 weeks
        </p>
      </div>
      <div className=" software-container">
        <img className="frontend" src="../../Assets/backend.png" alt="" />
        <p className="text-2xl font-bold mt-3">Back-End Developer</p>
        <p className="hero-para ">
          Javascript, NodeJS<span className="dot">•</span> 8 weeks
        </p>
      </div>
      <div className=" software-container">
        <img className="frontend" src="../../Assets/fullstack.png" alt="" />
        <p className="text-2xl font-bold mt-3">Full-Stack Developer</p>
        <p className="hero-para ">
          React / NextJS / NodeJS <span className="dot">•</span> 14 weeks
        </p>
      </div>

    </div>
    </>
  );
}
