import React from "react";

export default function Product() {
  return (
    <div className="container software-components flex gap-5">
      <div className=" software-container">
        <img className="frontend" src="../../Assets/uiux.png" alt="" />
        <p className="text-2xl font-bold mt-3">UIUX Design</p>
        <p className="hero-para">
          Design With Figma <span className="dot">•</span> 8 weeks
        </p>
      </div>
      <div className=" software-container">
        <img className="frontend" src="../../Assets/product.png" alt="" />
        <p className="text-2xl font-bold mt-3">Product Management</p>
        <p className="hero-para">
          Learn About Products <span className="dot">•</span> 8 weeks
        </p>
      </div>
    </div>
  );
}
