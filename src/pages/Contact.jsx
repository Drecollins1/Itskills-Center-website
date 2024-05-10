import React, { useEffect } from "react";
import Button from "../components/Button";

const Contact = () => {
  const style = {
    width: "250px",
    marginLeft: "10px",
    backgroundColor: "rgba(68, 117, 242, 1)",
    color: "#fff",
    border: "none",
    // padding: "20px",
  };
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div className="hero mt-14 max-w-7xl mx-auto">
      <div className="flex flex-col gap-3 p-5 py-20  mt-[60px] ">
        <div className=" container contact-container">
          <h1 className="text-5xl text-center font-extrabold">Contact Us</h1>
          <p className=" leading-10 mt-8 text-2xl lg:text-[20px] text-gray-600 text-center">
            Our bootcamp will help you Apply Your new skills to real world
            projects using the latest <br /> industry tools and techniques in
            Data Science Courses.
          </p>
          <div className="flex mt-8 mb-24 justify-center">
            <Button style={style} btn={"Talk To Student Advisor"} />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-center mb-20 ">
        <div className="lg:w-[70%] w-full mx-auto mt-[-29%] lg:mt-[-10%]">
          <div className="bg-white shadow-xl p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              Fill the form below let's discuss
            </h3>
            <form action="#" method="POST" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <select className="border p-2 rounded w-full">
                <option>Which Skill are you interested in?</option>
                <option>Data Science</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Software Testing</option>
              </select>
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Request"
                className="border p-2 rounded w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 "
              >
                Submit Form
              </button>
            </div>
          </div>
        </div>
        {/* <div className="shadow-xl p-0 w-[70%] mx-auto mt-[-10%] bg-white">
          <h2 className="font-extrabold text-2xl text-center">
            Fill The Form Below Let's Discuss
          </h2>
          <form>
            <div className="form-group">
              <div>
                <label>
                  Full Name <span className="star">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                ></input>
              </div>
              <div>
                <label>
                  Phone Number <span className="star">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Phone Number"
                  required
                ></input>
              </div>
            </div>
            <div className="form-group">
              <div>
                <label>
                  Email Address<span className="star">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Email Address"
                  required
                ></input>
              </div>
              <div>
                <label>
                  Which Tech Skills Are You Interested In
                  <span className="star">*</span>
                </label>
                <br />
                <select
                  type="select"
                  name="name"
                  placeholder="Which Tech Skills Are You Interested In"
                  required
                >
                  <option className="option" value="" disabled selected>
                    Select
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label>
                Request<span className="star">*</span>
              </label>
              <br />
              <textarea
                placeholder="Enter Your Request"
                className="request"
                type="text"
                name="name"
                required
              ></textarea>
            </div>
            <div className="contact-btn">
              <Button btn={"Submit Form"} />
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
