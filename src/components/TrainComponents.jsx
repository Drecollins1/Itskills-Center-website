import React from "react";
import Trainingcard from "./TrainingCard";

const TrainComponents = () => {
  return (
    <div>
      <>
        <div className="my-10">
          <h2 className=" hero-text  text-2xl lg:text-[46px] lg:leading-[62.1px] text-center">
            Our Approach to Training
          </h2>
          <p className="hero-para my-6  text-[20px] text-center">
            With a live, immersive Bootcamp, you can jump-start or accelerate
            <br /> your career in digital technology.
          </p>
        </div>
        <div className="lg:flex max-w-7xl mx-auto gap-10 ">
          <div className="lg:w-[48%]">
            <div className="bg-purple-50 rounded-lg">
              <Trainingcard
                props={<img src="../../Assets/trainingimage.png" alt="" />}
                heading={"Remote & Physical Options"}
                text={
                  "With devoted mentoring, you can learn in the convenience of your home, office, or physical learning facility."
                }
              />
            </div>
            <div className="bg-pink-50 rounded-lg ">
              <Trainingcard
                props={<img src="../../Assets/Time.png" alt="" />}
                heading={"Flexibility"}
                text={
                  "Flexible class schedule,  quality approach, and hands-on, intensive learning at your own speed and."
                }
              />
            </div>
          </div>

          <div className="lg:w-[48%]">
            <div className="bg-purple-50 lg:bg-pink-50 rounded-lg ">
              <Trainingcard
                props={<img src="../../Assets/Plan.png" alt="" />}
                heading={"Project-based training"}
                text={
                  "Approach to teaching that emphasizes practical learning and provides students with the opportunity to learn and develop."
                }
              />
            </div>
            <div className="bg-pink-50 lg:bg-purple-50 rounded-lg">
              <Trainingcard
                props={<img src="../../Assets/exclusive.png" alt="" />}
                heading={"Absolutely Exclusive"}
                text={
                  "You can learn exclusively weekdays or weekends, at your own pace. Take your private lessons whenever you like."
                }
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default TrainComponents;
