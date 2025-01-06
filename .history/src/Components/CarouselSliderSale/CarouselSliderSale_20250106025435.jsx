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
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

// eslint-disable-next-line react/prop-types
const CarouselSliderSale = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0.25);
  const [isColumnLayout, setIsColumnLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsColumnLayout(window.innerWidth < 800); // Switch to column layout for small screens
    };

    handleResize(); // Initial layout adjustment
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Ensure children is an array
  const childArray = React.Children.toArray(children);

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div
        className={`carousel-inner d-flex ${
          isColumnLayout ? "flex-column" : "flex-row"
        } overflow-visible`}
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: isColumnLayout
            ? `translateY(${activeIndex * -100}%)`
            : `translateX(${activeIndex * 12}%)`,
        }}
      >
        {childArray.map((child, index) => (
          <div key={index} className="carousel-item">
            {child}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        style={{
          position: "absolute",
          left: isColumnLayout ? "50%" : "0",
          top: isColumnLayout ? "10%" : "auto",
          bottom: isColumnLayout ? "auto" : "35%",
          transform: isColumnLayout ? "translateX(-50%)" : "none",
        }}
        id="previous"
        type="button"
        onClick={() => setActiveIndex(0.25)}
      >
        <FaArrowLeft
          style={{
            fontSize: "50px",
            backgroundColor: "#FFFFFF",
            color: "#000",
            padding: "8px",
            border: "2px solid #000",
            display: `${activeIndex >= 0 ? "none" : "block"}`,
          }}
        />
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        style={{
          position: "absolute",
          right: isColumnLayout ? "50%" : "0",
          bottom: isColumnLayout ? "10%" : "35%",
          transform: isColumnLayout ? "translateX(50%)" : "none",
        }}
        id="Next"
        type="button"
        onClick={() => setActiveIndex(-1)}
      >
        <FaArrowRight
          style={{
            fontSize: "50px",
            backgroundColor: "#FFFFFF",
            color: "#000",
            padding: "8px",
            border: "2px solid #000",
            display: `${activeIndex < 0 ? "none" : "block"}`,
          }}
        />
      </button>

      {/* Carousel Indicators */}
      <div className="carousel-indicators mt-5 d-flex justify-content-center">
        {childArray.map((_, index) => (
          <button
            key={index}
            type="button"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? "black" : "gray",
              border: "none",
            }}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselSliderSale;
