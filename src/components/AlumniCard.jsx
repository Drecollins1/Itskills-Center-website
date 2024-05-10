import React from "react";
export default function Alumni({ props }) {
  return (
    <div className="">
      <div className="mt-6 lg:rounded-lg card bg-white flex-col lg:flex-row lg:items-start flex p-5 lg:p-8 gap-6 lg:w-[500px] ">
        <div className="lg:w-48 mx-auto">{props}</div>
        <div>
          <p className="leading-4 text-gray-600  pb-5 text-center lg:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <h5 className="text-center lg:text-left text-gray-500 text-2xl font-semibold">Brooklyn Simmons</h5>
          <p className="text-center font-medium lg:text-left">Mobile App Developer</p>
        </div>
      </div>
    </div>
  );
}
