import React from "react";

export default function Trainingcard({ props, heading, text }) {
  return (
    <div className="flex text-center lg:text-left gap-5  lg:h-60 flex-col lg:flex-row items-center lg:items-start    mt-4 justify-center p-5 lg:py-8 ">
      <div className="w-[15%] ">{props}</div>
      <div className="trainig-text lg:w-[65%]">
        <h4 className="text-2xl font-bold mb-3">{heading}</h4>
        <p className=" text-gray-500 break-words pt-2">{text}</p>
      </div>
    </div>
  );
}
