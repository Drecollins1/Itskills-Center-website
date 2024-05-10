import React, { useEffect } from "react";
import Button from "../components/Button";
import Curriculum from "./curriculum";
import MentorsAndAlumni from "./MentorsAndAlumni";
import AlumniSection from "./AlumniSection";
import Faqs from "./Faqs";

export default function Frontend() {
  const style = {
    width: "200px",
    fontSize: "20px",
    // marginLeft: "10px",
    backgroundColor: "#fff",
    color: "rgba(68, 117, 242, 1)",
    border: "0.5px solid  gray",
  };
  const style2 = {
    width: "200px",
    // marginLeft: "10px",,
    fontSize: "20px",

    color: "#fff",
    backgroundColor: "rgba(68, 117, 242, 1)",
    border: "0.5px  gray",
  };
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <>
      <div className=" mt-14 max-w-7xl mx-auto">
        <div className=" hero lg:flex items-center py-8">
          <div className="flex flex-col gap-3 p-5 lg:w-[50%] mt-[-80px] ">
            <h1 className=" hero-text mt-16  text-2xl lg:text-[46px] lg:leading-[62.1px] text-center lg:text-left">
              Back-End Development
            </h1>
            <p className="leading-10 text-[20px] text-gray-600 text-center lg:text-left">
            Back-end Development Our bootcamp will help you launch or advance
            your career as a Back-end Developer. Throughout bootcamp, you should
            build a variety of case studies and publish your job-ready Back-end
            Developer portfolio.
            </p>
            <p className="leading-8 flex gap-3 font-semibold justify-center lg:justify-start text-gray-600  pb-5 text-center lg:text-left">
              25 students <span className="dot">•</span> Fulltime
              <span className="dot">•</span> 8 Weeks
            </p>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start items-center justify-center gap-3">
              <div>
                <Button btn={"Enroll Now"} style={style2} />
              </div>
              <Button btn={"Contact-Us"} style={style} />
            </div>
          </div>
          <div className="flex justify-center">
          <img src="../../Assets/backendimage.png" alt="" />
          </div>
        </div>
        <Curriculum
        price={<h1>NGN 300,000</h1>}
        certified={"Back-End Development bootcamp"}
        design={"Back-End Development Classes"}
        workshop={"Back-End Development Workshop"}
        series={"Create Back-End Development Project"}
      />
      </div>
      <MentorsAndAlumni />
      <AlumniSection />
      <Faqs />
    </>
  );
}
