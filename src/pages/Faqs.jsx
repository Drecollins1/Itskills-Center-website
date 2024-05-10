import React from "react";

const Faqs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="lg:text-6xl text-3xl leading-[62.1px] font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-500 ">
            Still Didn’t Find Answers You’re Looking For? <br /> Reach Out To
            Our Student Advisor.
          </p>
        </div>
        <div>
          <div className="bg-white shadow-md rounded-lg p-8 border mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold  dark:text-zinc-500">
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
            <p className="mt-2  font-thin ">
              Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do
              Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.
              Exercitation Veniam Consequat Sunt Nostrud Amet.
            </p>
          </div>
          <div className="bg-white border shadow-md rounded-lg p-4 mb-4 ">
            <div className="flex justify-between items-center">
              <h2 className="text-lg  font-semibold dark:text-zinc-500">
                Question?
              </h2>
              <button className="text-zinc-500  dark:text-blue-600">
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
          <div className="bg-white border shadow-md rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold dark:text-zinc-500">
                Question?
              </h2>
              <button className="text-zinc-500  dark:text-blue-600">
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
          <div className="bg-white border shadow-md rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold dark:text-zinc-500">
                Question?
              </h2>
              <button className="text-zinc-500  dark:text-blue-600">
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
};

export default Faqs;
