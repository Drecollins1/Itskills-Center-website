import React from "react";

export default function Footer() {
  return (
    <div className=" foot font-thin p-10">
      <div className=" text-white ">
        <div className="max-w-screen-xl p-3 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img className="mb-5" src="../../Assets/itskillslogo.png" alt="" />
            <p className="text-sm mt-2 font-thin">
              This is where you start your worldwide IT journey. Become <br />
              proficient in the abilities required to launch a prosperous
              career.
            </p>
            <div className="flex mt-4">
              <a href="#" className="mr-4">
                <img src="../../Assets/facebook-icon.png" alt="" />
              </a>
              <a href="#" className="mr-4">
                <img src="../../Assets/youtube-icon.png" alt="" />
              </a>
              <a href="#">
                <img src="../../Assets/whatsapp.png" alt="" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white">Schools</h3>
              <ul className="mt-4 text-sm font-thin">
                <li>
                  <a href="#" className="hover:underline">
                    Product School
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Software Development School
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Data School
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Software Testing School
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Support</h3>
              <ul className="mt-4 text-sm font-thin">
                <li>
                  <a href="#" className="hover:underline ">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Online Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Company</h3>
              <ul className="mt-4 text-sm font-thin">
                <li>
                  <a href="#" className="hover:underline">
                    Become a Mentor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Talk to Student Advisor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 md:mt-12">
          © 2024, All Rights Reserved
        </div>
      </div>
    </div>
  );
}
