import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";



const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSchools = () => {
    setSchoolsOpen(!schoolsOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const dropdownButton = document.querySelector(".dropdown-button");

      if (!dropdownButton.contains(target) && schoolsOpen) {
        setSchoolsOpen(false);
      }
    };

    if (schoolsOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [schoolsOpen]);
  const style = {
    width: "200px",
    marginLeft: "10px",
    backgroundColor: "#fff",
    color: "rgba(68, 117, 242, 1)",
    border: "1px solid rgba(223, 223, 224, 1)",
    marginRight: "10px",
  };
  const style2 = {
    width: "200px",
    marginLeft: "10px",
    backgroundColor: "rgba(68, 117, 242, 1)",
    color: "#fff",
    border: "none",
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-[100%] px-5">
      <div className="lg:max-w-7xl lg:mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img src="../../Assets/logo.png" alt="Logo" className="" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <div className="relative">
                <div
                  className="flex items-center py-4 px-2 dropdown-button"
                  onClick={toggleSchools}
                >
                  <p className=" text-gray-500 font-semibold lg:font-thin cursor-pointer hover:text-blue-400 transition duration-300">
                    Schools
                  </p>
                  <span className="ml-1">
                    <img src="../../Assets/Arrow.jpg" alt="" />
                  </span>
                  {schoolsOpen && (
                    <div className="absolute bg-white shadow-md rounded mt-[370px] ml-[-230px] py-2 w-[1255px]">
                      <div className="flex justify-between">
                        <div className="p-8">
                          <div className="">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/product-icon.png" alt="" />
                              <p className="text-[18px] text-black font-bold">
                                Product School
                              </p>
                            </div>
                          </div>
                          <div className="dropimage">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/figma-icon.png" alt="" />
                              <Link
                                className="text-black font-semibold"
                                to="/Uiux"
                              >
                                UI/UX Design
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/product-icon.png" alt="" />
                              <p className="text-[18px] text-black font-bold">
                                Software Development School
                              </p>
                            </div>
                          </div>
                          <div className="dropimage">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/vscode.png" alt="" />
                              <Link
                                className="text-black font-semibold"
                                to="/frontend"
                              >
                                Front-End Developer
                              </Link>
                            </div>
                          </div>
                          <div className="dropimage">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/vscode.png" alt="" />
                              <Link
                                className="text-black font-semibold"
                                to="/backend"
                              >
                                Back-End Developer
                              </Link>
                            </div>
                          </div>
                          <div className="dropimage">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/vscode.png" alt="" />
                              <Link
                                className="text-black font-semibold"
                                to="/fullstack"
                              >
                                Fullstack Developer
                              </Link>
                            </div>
                          </div>
                          <div className="dropimage">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/vscode.png" alt="" />
                              <Link
                                className="text-black font-semibold"
                                to="/mobile"
                              >
                                Mobile Application Development
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/product-icon.png" alt="" />
                              <p className="text-[18px] text-black font-bold">
                                Software Testing School
                              </p>
                            </div>
                          </div>
                          <div className="dropimage">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/cypress.png" alt="" />

                              <Link
                                className="text-black font-semibold"
                                to="/softwareschool"
                              >
                                Software Cypress and Automation
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/product-icon.png" alt="" />
                              <p className="text-[18px] text-black font-bold">
                                Data School
                              </p>
                            </div>
                          </div>
                          <div className="dropimage">
                            <div className="flex items-center gap-4">
                              <img src="../../Assets/figma-icon.png" alt="" />
                              <Link
                                className="text-black font-semibold"
                                to="/dataschool"
                              >
                                Data Science
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Link
                to=''
                className="py-4 px-2 text-gray-500 font-semibold lg:font-thin hover:text-blue-400 transition duration-300"
              >
                Testimonials
              </Link>

              <Link
                to=''
                className="py-4 px-2 text-gray-500 font-semibold lg:font-thin hover:text-blue-400 transition duration-300"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="py-4 px-2 text-gray-500 font-semibold lg:font-thin hover:text-blue-400 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-3">
            <Button btn={"Get Started"} />
            <Button style={style} btn={"Download Schedule"} />
          </div>
          <div className="md:hidden mr-4 flex items-center transition duration-500">
            <button
              className="outline-none mobile-menu-button "
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${menuOpen ? "block" : "hidden "}`}>
        <ul className="h-screen">
          <li className="">
            <Link
              to="/"
              className="block px-2 py-4 text-gray-500 text-2xl hover:bg-blue-400 font-semibold"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/school"
              className="flex items-center py-4 px-2 text-gray-500 text-2xl font-semibold hover:bg-blue-400  "
              onClick={closeMenu}
            >
              Schools
            </Link>
          </li>
          <li>
            <a
              href="/"
              className="block px-2 py-4 hover:bg-blue-400 text-2xl  text-gray-500 font-semibold transition duration-300"
              onClick={closeMenu}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-2xl px-2 py-4 hover:bg-blue-400  text-gray-500 font-semibold transition duration-300"
              onClick={closeMenu}
            >
              FAQs
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-2xl px-2 py-4 hover:bg-blue-400  text-gray-500 font-semibold transition duration-600"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
          <div className=" flex flex-col mt-4 items-center gap-5 ">
            <Button btn={"Get Started"} style={style2} />
            <Button style={style} btn={"Download Schedule"} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MobileMenu;
