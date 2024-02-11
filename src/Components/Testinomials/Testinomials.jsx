// import React from 'react'
// import "./testinomials.css"
// import testimonial1 from '/src/assets/images/testimonial-1.jpg';
// import testimonial2 from '/src/assets/images/testimonial-2.jpg';
// import testimonial3 from '/src/assets/images/testimonial-3.jpg';
// import testimonial4 from '/src/assets/images/testimonial-4.jpg';
// import testimonial5 from '/src/assets/images/testimonial-5.jpg';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const Testinomials = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1
//       };
//   return (
//     <>
//     <div className="testimonials mt-100">
//     <div className="container">
//       <div className="section-header" style={{ textAlign: "center" }}>
//         <h2 style={{ marginTop: "-15rem" }}>Testimonials</h2>
//         <p style={{ fontSize: "2rem" }}>See what people have to say about us</p>
//       </div>
//       <div className="owl-carousel testimonials-carousel">
//       <Slider {...settings}>
//         <div className="testimonial-item row align-items-center">
//           <div className="testimonial-img">
//             <img src={testimonial1} alt="Testimonial image" />
//           </div>
//           <div className="testimonial-text">
//             <h3>Person-1</h3>
//             <h4>Designation</h4>
//             <p>Testimonial</p>
//           </div>
//         </div>
//         <div className="testimonial-item row align-items-center">
//           <div className="testimonial-img">
//           <img src={testimonial2} alt="Testimonial image" />
//           </div>
//           <div className="testimonial-text">
//             <h3>Person-2</h3>
//             <h4>Designation</h4>
//             <p>Testimonial</p>
//           </div>
//         </div>
//         <div className="testimonial-item row align-items-center">
//           <div className="testimonial-img">
//           <img src={testimonial3} alt="Testimonial image" />
//           </div>
//           <div className="testimonial-text">
//             <h3>Person-3</h3>
//             <h4>Designation</h4>
//             <p>Testimonial</p>
//           </div>
//         </div>
//         <div className="testimonial-item row align-items-center">
//           <div className="testimonial-img">
//           <img src={testimonial4} alt="Testimonial image" />
//           </div>
//           <div className="testimonial-text">
//             <h3>Person-4</h3>
//             <h4>Designation</h4>
//             <p>Testimonial</p>
//           </div>
//         </div>
//         <div className="testimonial-item row align-items-center">
//           <div className="testimonial-img">
//           <img src={testimonial5} alt="Testimonial image" />
//           </div>
//           <div className="testimonial-text">
//             <h3>Person-5</h3>
//             <h4>Designation</h4>
//             <p>Testimonial</p>
//           </div>
//         </div>
//         </Slider>
//       </div>
//     </div>
//   </div>
//     </>
//   )
// }

// export default Testinomials

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "/src/assets/images/testimonial-1.jpg";
import testimonial2 from "/src/assets/images/testimonial-2.jpg";
import testimonial3 from "/src/assets/images/testimonial-3.jpg";
import testimonial4 from "/src/assets/images/testimonial-4.jpg";
import testimonial5 from "/src/assets/images/testimonial-5.jpg";
import "./testinomials.css";

function Testinomials(props) {
  //   function SampleNextArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={}
  //         style={{ ...style, display: "", background: "red" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  //   function SamplePrevArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className="bg-red-400 block"
  //         style={{ ...style, display: "", background: "green" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const data = [
    {
      name: `John Morgan`,
      img: `${testimonial1}`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: `${testimonial2}`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: `${testimonial3}`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Rigo Louie`,
      img: `${testimonial4}`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Mia Williams`,
      img: `${testimonial5}`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  return (
    <div className=" text-center w-[85%] mx-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[450px] text-black rounded-xl m-10 w-0 mt-[100px]"
            >
              <div className="h-[180px] w-[300px] bg-orange-400 flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="h-56 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4 h-[260px] w-[300px]">
                <p className="text-5xl font-semibold">{d.name}</p>
                <p className="text-center text-2xl border-b-4 p-3">
                  {d.review}
                </p>
                {/* <button className="bg-gray-800 text-white text-xl px-6 py-6 rounded-xl">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Testinomials;
