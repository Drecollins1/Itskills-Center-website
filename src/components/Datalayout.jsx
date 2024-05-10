import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../pages/data";

function DataLayout() {
  const style = {
    width: "400px",
    margin: "0 auto",
  };

  const imgStyle = {
    width: "40px",
    borderRadius: "50%",
  };
  const divStyle = {
    display: "flex",
    border: "1px solid",
  };
  const settings = {
    dots: false, // Hide dots
    arrows: true, // Show arrow buttons
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust settings for smaller screens if needed
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust settings for smaller screens if needed
        },
      },
    ],
  };
  return (
    <div style={style}>
      <div>
        <Slider {...settings} style={{ margin: "0 auto", maxWidth: "800px" }}>
          {data.map((da) => (
            <div style={divStyle}>
              <img src={da.img} alt="" style={imgStyle} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default DataLayout;
