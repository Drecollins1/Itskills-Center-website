import React, { useEffect } from "react";
import Herosection from "./Herosection";
import Techschool from "./Techschool";
import Techmobile from "./mobile/Techmobile";
import ProductMobile from "./mobile/productmobile";
import Softwaretestingmobile from "./mobile/Softwaretestingmobile";
import DataSchool from "./mobile/Dataschool";
import TrainComponents from "../components/TrainComponents";
import MentorsAndAlumni from "./MentorsAndAlumni";
import AlumniSection from "./AlumniSection";
import Faqs from "./Faqs";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className="mt-[60px] ">
      <Herosection />
      <Techschool />
      <Techmobile />
      <ProductMobile />
      <Softwaretestingmobile />
      <DataSchool />
      <TrainComponents />
      <MentorsAndAlumni />
      <AlumniSection />
      <Faqs />
    </div>
  );
};

export default Homepage;
