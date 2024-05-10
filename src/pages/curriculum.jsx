import React, { useState } from "react";
import Button from "../components/Button";

export default function Curriculum({
  price,
  certified,
  design,
  workshop,
  series,
}) {
  const style = {
    width: "100%",
    backgroundColor: "#fff",
    color: "Blue",
    border: "0.5px solid blue",
    marginTop: "10px",
    height: "60px",
    fontWeight: "bold",
  };

  const [isOnlinePage, setIsOnlinePage] = useState(false);
  const [isOfflinePage, setIsOfflinePage] = useState(false);

  const togglePage = () => {
    setIsOnlinePage(true);
    setIsOfflinePage(false);

  };
  const togglePage2 = () => {
    setIsOfflinePage(true);
    setIsOnlinePage(false);
  };

  return (
    <div className="my-10 lg:flex gap-20">
      <div className="border lg:w-1/2 p-5 ">
        <div className="flex">
          <button
            className={`w-64 h-20 font-semibold text-xl rounded-l-lg border ${
              isOnlinePage ? "bg-white" : "bg-blue-50"
            }`}
            onClick={() => togglePage2()}
          >
            Offline Class
          </button>
          <button
            className={`w-64 h-20 font-semibold text-xl rounded-r-lg border ${
              isOnlinePage ? "bg-blue-50" : "bg-white"
            }`}
            onClick={() => togglePage()}
          >
            Online Class
          </button>
        </div>
        {isOnlinePage && (
          <div>
            <div className="flex justify-between mt-9">
              <p className="font-semibold text-gray-700 text-xl">
                8Weeks Bootcamp
              </p>
              <p className="font-extrabold lg:text-4xl">NGN 50,000</p>
            </div>
          </div>
        )}
        {isOfflinePage &&(
          <div>
            <div className="flex justify-between mt-9">
              <p className="font-semibold text-gray-700 text-xl">
                8Weeks Bootcamp
              </p>
              <p className="font-extrabold lg:text-4xl">{price}</p>
            </div>
            <div className="flex justify-between my-5">
              <p className="font-semibold text-gray-700 text-xl">
                Accomodation
              </p>
              <p className="lg:text-4xl font-extrabold">NGN 80,000</p>
            </div>
          </div>
        )}
        <Button style={style} btn={"Enrol Now"} />
        <div className="my-10 flex flex-col gap-6">
          <div className=" flex items-center gap-4">
            <img src="../../Assets/check.png" alt="" />
            <p className="font-semibold text-gray-700 text-lg">
              Certified {certified}
            </p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="../../Assets/check.png" alt="" />
            <p className="font-semibold text-gray-700 text-lg">Live {design}</p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="../../Assets/check.png" alt="" />
            <p className="font-semibold text-gray-700 text-lg">
              Live {workshop}
            </p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="../../Assets/check.png" alt="" />
            <p className="font-semibold text-gray-700 text-lg"> {series}</p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="../../Assets/check.png" alt="" />
            <p className="font-semibold text-gray-700 text-lg">
              Launch a job-ready portfolio
            </p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="../../Assets/check.png" alt="" />
            <p className="font-semibold text-gray-700 text-lg">
              1:1 support and feedback
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="p-5 lg:p-0">
          <h1 className="text-5xl font-extrabold mb-5">Curriculum</h1>
          <p className="text-lg lg:w-[80%] leading-9 text-gray-500 font-[400]">
            Our Bootcamp is designed to teach you UX/UI step-by-step with a
            hands-on curriculum that completely emphasis learning-by-doing. Our
            Bootcamp teaches you the newest technologies, workflows, and best
            practices live, in contrast to many UX/UI schools that have been
            teaching the same template curriculum for years.
          </p>
        </div>
        <div>
          <div className="bg-white shadow-lg border mt-10 rounded-lg p-8 mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold dark:text-zinc-500">
                Question?
              </h2>
              <button className="text-zinc-500 dark:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-2 font-thin w-[80%]  ">
              Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do
              Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.
              Exercitation Veniam Consequat Sunt Nostrud Amet.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4 ">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold dark:text-zinc-500">
                Question?
              </h2>
              <button className="text-zinc-500 dark:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
