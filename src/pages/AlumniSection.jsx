import React from "react";
import AlumniCard from "../components/AlumniCard";

const AlumniSection = () => {
  return (
    <div className="alumni my-10 " id="testimonial">
      <div className="mt-10 max-w-7xl p-1  mx-auto">
        <h2 className=" hero-text mt-20 text-xl md:text-[40px] lg:leading-[62.1px] text-center">
          Words From Our Alumni
        </h2>
        <p className="hero-para my-3 text-[18px] text-center">
          Here is what our students have to say
        </p>
        <div className="lg:flex lg:gap-10 lg:py-10 lg:pb-20 lg:overflow-scroll alumnibg hide-scrollbar gap-5 ">
          <AlumniCard
            props={
              <img
                className="alumni-image"
                src="../../Assets/alumni1.png"
                alt=""
              />
            }
          />
          <AlumniCard
            props={
              <img
                className="alumni-image"
                src="../../Assets/Ellipse2.png"
                alt=""
              />
            }
          />
          <AlumniCard
            props={
              <img
                className="alumni-image"
                src="../../Assets/alumni2.png"
                alt=""
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AlumniSection;
