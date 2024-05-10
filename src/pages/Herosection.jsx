import React from "react";
import Button from "../components/Button";
import Space from "../atom/space";

const Herosection = () => {
  const style = {
    width: "200px",
    marginLeft: "10px",
    backgroundColor: "#fff",
    color: "rgba(68, 117, 242, 1)",
    border: "1px solid rgba(223, 223, 224, 1)",
  };

  const style2 = {
    width: "200px",
    marginLeft: "10px",
    backgroundColor: "rgba(68, 117, 242, 1)",
    color: "#fff",
    border: "none",
  };
  return (
      <div className="">
        <div className="hero ">
          <div className="flex mt-[-20px] justify-center items-center inner-hero">
            <img
              className="purpledown lg:block hidden mt-10"
              src="../../Assets/purpledown.png"
              alt=""
            />

            <img
              className="hero-image"
              src="../../Assets/icons/Frame 10.png"
              alt=""
            />
            <img
              className="purpledown lg:block hidden mt-10"
              src="../../Assets/pinkdown.png"
              alt=""
            />
          </div>
          <div className=" text-center mt-[-50px]">
            <h1 className="hero-text  lg:text-[64px] lg:leading-[84.4px] text-2xl mt-8 md:mt-4">
              Accelerate Your Digital Career <br /> With Our Tech Bootcamps.
            </h1>
            <p className="hero-para mt-6  text-[20px]">
              With a live, immersive Bootcamp, you can jump-start or accelerate
              <br /> your career in digital technology.
            </p>
            <div className="justify-center  mt-6 md:flex block">
              <Button btn={"Talk to Student Advisor"} style={style2} />
              <Space />
              <Button btn={"Get Started"} style={style} />
            </div>
          </div>
          <div className="hidden md:flex justify-center mt-[-10px] md:gap-[320px] ">
            <img src="../../Assets/purpleup.png" alt="" />
            <img src="../../Assets/pinkup.png" alt="" />
          </div>
        </div>
        <div className="hero h-32">

        </div>
        <div className="flex justify-center mt-[-100px]">
          <img className="" src="../../Assets/youtube.png" alt="" />
        </div>
      </div>
       

  );
};

export default Herosection;
