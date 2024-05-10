import React, { useState } from "react";
import Software from "../components/Software";
import Product from "../components/Product";
import SoftwareTesting from "../components/SoftwareTesting";
import DataScience from "../components/DataScience";

const Techschool = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const togglePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="max-w-7xl my-10 mx-auto hidden lg:block lg:px-3 ">
        <div className="text">
          <h2 className=" hero-text  md:text-[46px] lg:leading-[62.1px] text-center">
            Our Tech Schools
          </h2>
          <p className="hero-para my-6  text-[20px] text-center">
            With a live, immersive Bootcamp, you can jump-start or accelerate
            <br /> your career in digital technology.
          </p>
        </div>
        <div className="flex ">
          <div className="cursor-pointer transition-all duration-800" onClick={() => togglePage(1)}>
            <h4 className={currentPage === 1 ? "" : "inactive"}>
              <span className="text-[20px] font-bold leading-10">
                Software Development School
              </span>
            </h4>
            <div
              className={
                currentPage === 1 ? "rectangle-blue" : "rectangle-greyone"
              }
            ></div>
          </div>
          <div className="grey"></div>
          <div className="cursor-pointer" onClick={() => togglePage(2)}>
            <h4 className={currentPage === 2 ? "" : "inactive"}>
              <span className="text-[20px] font-bold leading-10">
                Product Design
              </span>
            </h4>
            <div
              className={
                currentPage === 2 ? "rectangle-bluetwo " : "rectangle-greytwo "
              }
            ></div>
          </div>
          <div className="grey"></div>
          <div className="cursor-pointer" onClick={() => togglePage(3)}>
            <h4 className={currentPage === 3 ? "" : "inactive"}>
              <span className="text-[20px] font-bold leading-10">
                Software Testing School
              </span>
            </h4>
            <div
              className={
                currentPage === 3
                  ? "rectangle-bluethree "
                  : "rectangle-greythree "
              }
            ></div>
          </div>
          <div className="grey"></div>
          <div className="cursor-pointer" onClick={() => togglePage(4)}>
            <h4 className={currentPage === 4 ? "" : "inactive"}>
              <span className="text-[20px] font-bold leading-10">
                Data School
              </span>
            </h4>
            <div
              className={
                currentPage === 4 ? "rectangle-bluefour" : "rectangle-greyfour "
              }
            ></div>
          </div>
          <div className="greylong"></div>
        </div>
        <div className=" py-6 \">
          {currentPage === 1 && (
            <div>
              <Software />
            </div>
          )}
          {currentPage === 2 && (
            <div>
              <Product />
            </div>
          )}
          {currentPage === 3 && (
            <div>
              <SoftwareTesting />
            </div>
          )}
          {currentPage === 4 && (
            <div>
              <DataScience />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Techschool;
