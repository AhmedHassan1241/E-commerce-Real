import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const CarouselSliderSale = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div
          className="carousel-inner d-flex "
          // style={{
          //   transition: "transform 0.5s ease-in-out",
          //   transform: `translateX(${activeIndex * 12}%)`,
          // }}
style={{
  transition: "transform 0.5s ease-in-out",
  transform: `translateX(${activeIndex * 25}%)`,
}}
        >
          {children}
        </div>
        <button
          className="carousel-control-prev d-lg-block"
          style={{ position: "absolute", left: "0", bottom: "35%" }}
          id="previous"
          type="button"
          onClick={()=>setActiveIndex(0.25)}
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
          onClick={()=>setActiveIndex(-1)}
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
        <div
          className="Carousel-indicators mt-5 mx-auto d-flex justify-content-between"
          style={{
            width: "10%",
          }}
        >
          <button
            type="button"
            className={activeIndex <= 0 ? " w-25 h-50 bg-black" : "bg-black"}
            onClick={() => setActiveIndex(0.25)}
          ></button>
          <button
            type="button"
            className={activeIndex >= 0 ? " w-25 h-50 bg-black" : "bg-black"}
            onClick={() => setActiveIndex(-1)}
          ></button>
        </div>
        {/* End of Carousel Indicators */}
      </div>
    </>
  );
};

export default CarouselSliderSale;