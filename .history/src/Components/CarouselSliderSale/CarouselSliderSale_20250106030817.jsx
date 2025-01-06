// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa6";
// import { FaArrowLeft } from "react-icons/fa";

// // eslint-disable-next-line react/prop-types
// const CarouselSliderSale = ({ children }) => {
//   const [activeIndex, setActiveIndex] = useState(0.25);
//   return (
//     <>
//       <div id="carouselExampleCaptions" className="carousel slide">
//         <div
//           className="carousel-inner d-flex overflow-visible"
//           style={{
//             transition: "transform 0.5s ease-in-out",
//             transform: `translateX(${activeIndex * 12}%)`,
//           }}
//         >
//           {children}
//         </div>
//         <button
//           className="carousel-control-prev d-lg-block"
//           style={{ position: "absolute", left: "0", bottom: "35%" }}
//           id="previous"
//           type="button"
//           onClick={()=>setActiveIndex(0.25)}
//         >
//           <FaArrowLeft
//             className="fa-solid fa-arrow-right-long"
//             aria-hidden="true"
//             style={{
//               fontSize: "50px",
//               backgroundColor: "#FFFFFF",
//               color: "#000",
//               padding: "8px",
//               border: "2px solid #000",
//               display: `${activeIndex >= 0 ? "none" : " "}`,
//             }}
//           ></FaArrowLeft>
//         </button>
//         <button
//           className="carousel-control-next d-lg-block"
//           style={{ position: "absolute", right: "0", bottom: "35%" }}
//           id="Next"
//           type="button"
//           onClick={()=>setActiveIndex(-1)}
//         >
//           <FaArrowRight
//             className="fa-solid fa-arrow-right-long"
//             aria-hidden="true"
//             style={{
//               fontSize: "50px",
//               backgroundColor: "#FFFFFF",
//               color: "#000",
//               padding: "8px",
//               border: "2px solid #000",
//               display: `${activeIndex < 0 ? "none" : " "}`,
//             }}
//           ></FaArrowRight>
//         </button>

//         {/* Carousel Indicators */}
//         <div
//           className="Carousel-indicators mt-5 mx-auto d-flex justify-content-between"
//           style={{
//             width: "10%",
//           }}
//         >
//           <button
//             type="button"
//             className={activeIndex <= 0 ? " w-25 h-50 bg-black" : "bg-black"}
//             onClick={() => setActiveIndex(0.25)}
//           ></button>
//           <button
//             type="button"
//             className={activeIndex >= 0 ? " w-25 h-50 bg-black" : "bg-black"}
//             onClick={() => setActiveIndex(-1)}
//           ></button>
//         </div>
//         {/* End of Carousel Indicators */}
//       </div>
//     </>
//   );
// };

// export default CarouselSliderSale;

import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CarouselSliderSale = ({ children }) => {
  // Convert children into an array
  const childArray = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

  // Move to the next slide, with infinite looping
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === childArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide, with infinite looping
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? childArray.length - 1 : prevIndex - 1
    );
  };

  // Go to a specific slide
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div
        className="carousel-inner d-flex overflow-visible"
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {childArray.map((child, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ flex: "0 0 100%", minWidth: "100%" }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        type="button"
        onClick={handlePrev}
      >
        <FaArrowLeft
          className="fa-solid fa-arrow-left"
          style={{
            fontSize: "50px",
            backgroundColor: "#fff",
            color: "#000",
            padding: "8px",
            border: "2px solid #000",
          }}
        />
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        type="button"
        onClick={handleNext}
      >
        <FaArrowRight
          className="fa-solid fa-arrow-right"
          style={{
            fontSize: "50px",
            backgroundColor: "#fff",
            color: "#000",
            padding: "8px",
            border: "2px solid #000",
          }}
        />
      </button>

      {/* Carousel Indicators */}
      <div className="carousel-indicators mt-5 d-flex justify-content-center">
        {childArray.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleIndicatorClick(index)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? "black" : "gray",
              border: "none",
              margin: "0 5px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSliderSale;
