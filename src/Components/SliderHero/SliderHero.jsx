// import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "/src/assets/images/slider1.png";
import slider2 from "/src/assets/images/slider2.png";
import slider3 from "/src/assets/images/slider3.png";
import slider4 from "/src/assets/images/slider4.png";
// import Image1 from "/src/Components/ExampleCarouselImage/image1.jpg";
import "./slider.css";
// import slider1 from "/src/assets/images/slider1.png";
function SliderHero() {
  const data = [
    {
      slider: 1,
      img: slider1,
    },
    {
      slider: 2,
      img: slider2,
    },
    {
      slider: 3,
      img: slider3,
    },
    {
      slider: 4,
      img: slider4,
    },
  ];
  return (
    <>
      <Carousel fade>
        {data.map((item) => (
          <Carousel.Item key={item.slider}>
            <div className="slider-content md:h-[1000px] md:w-[100%] mb-8 w-[100%]">
              <img
                src={item.img}
                className="d-block"
                alt={`Slide ${item.slider}`}
              />
              {/* <Carousel.Caption className="relative top-0 left-0 "> */}
              {/* <div className="flex justify-center items-center"> */}
              {/* <button className="button md:text-7xl text-2xl md:w-[400px] w-[150px] md:hidden absolute top-[206px] left-[152px]">
                <NavLink to="/registeration">Pre Register</NavLink>
              </button> */}
              {/* </div> */}
              {/* </Carousel.Caption> */}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* <Carousel.Item>
          <div className="slider-content md:h-[1120px] h-[25vh]">
            <div className=" flex justify-center items-center">
              <h1 className="text-white md:text-7xl text-2xl w-100 text-center font-bold leading-tight	">
                <button className="button md:text-7xl text-2xl md:w-[400px] w-[150px] md:hidden">
                  <NavLink to="/registeration">Pre Register</NavLink>
                </button>
              </h1>
            </div>
          </div> */}
      {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}

      {/* </Carousel.Item> */}
      {/* <Carousel.Item>
          <div className="slider-content-2 md:h-[1120px] h-[25vh]">
            <div className=" flex justify-center items-center">
              <h1 className="text-white md:text-7xl text-2xl w-50 text-center font-bold leading-tight	">
                <button className="button md:text-7xl text-2xl md:w-[400px] w-[150px] m-4 md:hidden">
                  <NavLink to="/registeration">Pre Register</NavLink>
                </button>
              </h1>
            </div>
          </div>
        </Carousel.Item> */}

      {/* <Carousel.Item>
          <div className="slider-content-3 md:h-[1120px] h-[25vh]">
            <div className="flex justify-center items-center">
              <h1 className="text-white md:text-7xl text-2xl w-50 text-center font-bold leading-tight	">
                <button className="button md:text-7xl text-2xl md:w-[400px] w-[150px] m-4 md:hidden">
                  <NavLink to="/registeration">Pre Register</NavLink>
                </button>
              </h1>
            </div>
          </div>
         
        </Carousel.Item> */}
      {/* <Carousel.Item>
          <div className="slider-content-4 md:h-[1120px] h-[25vh]">
            <div className="flex justify-center items-center">
              <h1 className="text-white md:text-7xl text-2xl w-50 text-center font-bold leading-tight	">
                <button className="button md:text-7xl text-2xl md:w-[400px] w-[150px] m-4 md:hidden">
                  <NavLink to="/registeration">Pre Register</NavLink>
                </button>
              </h1>
            </div>
          </div>
         
        </Carousel.Item> */}
      {/* </Carousel> */}
    </>
  );
}

export default SliderHero;
