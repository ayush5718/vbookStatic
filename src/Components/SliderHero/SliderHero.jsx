import { Navbar } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import Image1 from "/src/Components/ExampleCarouselImage/image1.jpg";
import "./slider.css";
import slider1 from "/src/assets/images/slider1.png";
function SliderHero() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="slider-content md:h-[100vh] h-[25vh]">
          <div className="md:h-[100vh] h-[45vh] flex justify-center items-center">
            <h1 className="text-white md:text-7xl text-2xl w-100 text-center font-bold leading-tight	">
              <button className="button md:text-7xl text-2xl md:w-[400px] w-[150px] md:hidden">
                Pre Register
              </button>
            </h1>
          </div>
        </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-content-2 md:h-[100vh] h-[25vh]">
          <div className="md:h-[100vh] h-[45vh] flex justify-center items-center">
            <h1 className="text-white md:text-7xl text-2xl w-50 text-center font-bold leading-tight	">
              <button className="button md:text-7xl text-2xl md:w-[400px] w-[150px] m-4 md:hidden">
                Pre Register
              </button>
            </h1>
          </div>
        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-content-3 md:h-[100vh] h-[25vh]">
          <div className="md:h-[100vh] h-[45vh] flex justify-center items-center">
            <h1 className="text-white md:text-7xl text-2xl w-50 text-center font-bold leading-tight	">
              <button className="button md:text-7xl text-2xl md:w-[400px] w-[150px] m-4 md:hidden">
                Pre Register
              </button>
            </h1>
          </div>
        </div>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHero;
