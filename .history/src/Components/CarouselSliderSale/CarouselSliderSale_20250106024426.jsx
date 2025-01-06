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

const CarouselSliderSale = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0.25);
  const [itemsToShow, setItemsToShow] = useState(3); // Default for large screens

  // Adjust itemsToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1); // Mobile view
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet view
      } else {
        setItemsToShow(3); // Desktop view
      }
    };

    handleResize(); // Initial adjustment
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Compute the transform percentage dynamically
  const transformValue = (activeIndex * 100) / itemsToShow;

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div
        className="carousel-inner d-flex overflow-visible"
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(${transformValue}%)`,
        }}
      >
        {children}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev d-lg-block"
        style={{ position: "absolute", left: "0", bottom: "35%" }}
        type="button"
        onClick={() => setActiveIndex(Math.min(activeIndex + 1, 0))}
      >
        <FaArrowLeft
          style={{
            fontSize: "50px",
            backgroundColor: "#FFFFFF",
            color: "#000",
            padding: "8px",
            border: "2px solid #000",
            display: activeIndex >= 0 ? "none" : "block",
          }}
        />
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next d-lg-block"
        style={{ position: "absolute", right: "0", bottom: "35%" }}
        type="button"
        onClick={() => setActiveIndex(activeIndex - 1)}
      >
        <FaArrowRight
          style={{
            fontSize: "50px",
            backgroundColor: "#FFFFFF",
            color: "#000",
            padding: "8px",
            border: "2px solid #000",
            display: activeIndex <= -itemsToShow + 1 ? "none" : "block",
          }}
        />
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
          className={activeIndex === 0.25 ? "w-25 h-50 bg-black" : "bg-black"}
          onClick={() => setActiveIndex(0.25)}
        />
        <button
          type="button"
          className={activeIndex === -1 ? "w-25 h-50 bg-black" : "bg-black"}
          onClick={() => setActiveIndex(-1)}
        />
      </div>
    </div>
  );
};

export default CarouselSliderSale;
