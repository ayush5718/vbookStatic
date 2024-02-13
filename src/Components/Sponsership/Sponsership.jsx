import React from "react";
import "./sponsership.css";
import company1 from "/src/assets/images/company1.png";
import company2 from "/src/assets/images/company2.png";
import company3 from "/src/assets/images/company3.png";
import company4 from "/src/assets/images/company4.png";
import company5 from "/src/assets/images/ureckon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sponsership = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
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
  ];
  return (
    <>
      <div className="clients mt-100">
        <div className="container b">
          <div className="section-header">
            <h2>Promotions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
          <Slider {...settings} className="bg-white">
            {data.map((item) => (
              <div key={item.id} className="owl-carousel clients-carousel ">
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
