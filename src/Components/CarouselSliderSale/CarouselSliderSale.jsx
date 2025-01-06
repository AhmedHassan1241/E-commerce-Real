import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const CarouselSliderSale = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0.25);
  // const [persentage,setPersentage] =useState(0);
  const [persentage,setPersentage] =useState(0);
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div
          className="carousel-inner d-flex overflow-visible"
          style={{
            transition: "transform 1s ease-in-out",
            transform: `translateX(${activeIndex * persentage}%)`,
          }}
        >
          {children}
        </div>
        <div className="w-100 text-center mt-3">
          <a
            href="#ShopNow"
            className="text-black fs-6 fw-semibold text-decoration-none"
          >
            <button className="btn btn-primary">SHOP NOW</button>
          </a>
        </div>
        <button
          className="carousel-control-prev d-lg-block"
          style={{ position: "absolute", left: "0", bottom: "35%" }}
          id="previous"
          type="button"
          onClick={() => {setActiveIndex(0.25),setPersentage(-10)}}
        >
          <FaArrowLeft
            className="fa-solid fa-arrow-right-long"
            aria-hidden="true"
            style={{
              fontSize: "50px",
              backgroundColor: "#FFFFFF",
              color: "#000",
              padding: "8px",
              border: "2px solid #000",
              display: `${activeIndex >= 0 ? "none" : " "}`,
            }}
          ></FaArrowLeft>
        </button>
        <button
          className="carousel-control-next d-lg-block"
          style={{ position: "absolute", right: "0", bottom: "35%" }}
          id="Next"
          type="button"
          onClick={() => {setActiveIndex(-1),setPersentage(84)}}
        >
          <FaArrowRight
            className="fa-solid fa-arrow-right-long"
            aria-hidden="true"
            style={{
              fontSize: "50px",
              backgroundColor: "#FFFFFF",
              color: "#000",
              padding: "8px",
              border: "2px solid #000",
              display: `${activeIndex < 0 ? "none" : " "}`,
            }}
          ></FaArrowRight>
        </button>

        {/* Carousel Indicators */}
        {/* <div
          className="Carousel-indicators mt-5 mx-auto d-flex justify-content-between"
          style={{
            width: "10%",
          }}
        >
          <button
            type="button"
            className={activeIndex <= 0 ? " w-25 h-50 bg-black" : "bg-black"}
            onClick={() => {setActiveIndex(0.25),setPersentage(-10)}}
            ></button>
          <button
            type="button"
            className={activeIndex >= 0 ? " w-25 h-50 bg-black" : "bg-black"}
            onClick={() => {setActiveIndex(-1),setPersentage(106)}}
            ></button>
        </div> */}
        {/* End of Carousel Indicators */}
      </div>
    </>
  );
};

export default CarouselSliderSale;
