import React from "react";
import "./sponsership.css";
import company1 from "/src/assets/images/ureckon.png";
import company2 from "/src/assets/images/cell.png";
import company3 from "/src/assets/images/iem.png";
import company4 from "/src/assets/images/acm.png";
import company5 from "/src/assets/images/uniclass.png";
import company6 from "/src/assets/images/bepositive.png";

// import company5 from "/src/assets/images/ureckon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sponsership = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      img: `${company1}`,
    },
    {
      id: 2,
      img: `${company2}`,
    },
    {
      id: 3,
      img: `${company3}`,
    },
    {
      id: 4,
      img: `${company4}`,
    },
    {
      id: 5,
      img: `${company5}`,
    },
    {
      id: 6,
      img: `${company6}`,
    },
  ];
  return (
    <>
      <div className="clients md:mb-[50px] md:mt-[50px] mt-0">
        <div className="container">
          <div className="section-header">
            <h2>Partners</h2>
            <p>Here are our partners</p>
          </div>
          <Slider {...settings} className="bg-white">
            {data.map((item) => (
              <div key={item.id} className="">
                <img src={item.img} alt="comapny-images" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Sponsership;
