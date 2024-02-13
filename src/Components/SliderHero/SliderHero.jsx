import { Navbar } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "/src/Components/ExampleCarouselImage/image1.jpg";
import "./slider.css";
function SliderHero() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <div className="slider-content">
          <div className="h-[100vh] flex justify-center items-center">
            <h1 className="text-white text-7xl w-50 text-center font-bold leading-tight	">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </h1>
          </div>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className="slider-content-2">
          <div className="h-[100vh] flex justify-center items-center">
            <h1 className="text-white text-7xl w-50 text-center font-bold leading-tight	">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </h1>
          </div>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className="slider-content-3">
          <div className="h-[100vh] flex justify-center items-center">
            <h1 className="text-white text-7xl w-50 text-center font-bold leading-tight	">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
          </div>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHero;
