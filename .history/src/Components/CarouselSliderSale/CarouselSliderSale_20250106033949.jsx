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
import { useState, useRef, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const CarouselSliderSale = ({ children }) => {
  const [prevDisable, setPrevDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(false);
  
  const sliderRef = useRef(null);

  // Function to check if the buttons should be disabled
  const checkButtons = (offsetWidthValue, scrollWidthValue) => {
    setPrevDisable(sliderRef.current.scrollLeft <= 0);
    setNextDisable(
      sliderRef.current.scrollLeft + offsetWidthValue >= scrollWidthValue
    );
  };

  useEffect(() => {
    // Check buttons on initial mount
    if (sliderRef.current) {
      checkButtons(sliderRef.current.offsetWidth, sliderRef.current.scrollWidth);
    }
  }, []);

  const offsetWidthValue = sliderRef.current?.offsetWidth || 0;
  const scrollWidthValue = sliderRef.current?.scrollWidth || 0;

  return (
    <div className="slider-container" ref={sliderRef}>
      {/* <div className="slider-wrapper">{children}</div> */}
      <div
        className={`btn prev ${prevDisable ? "disable" : ""}`}
        disabled={prevDisable}
        onClick={() => {
          sliderRef.current.scrollLeft -= offsetWidthValue / 2;
          checkButtons(offsetWidthValue, scrollWidthValue);
        }}
      >
        {"<"}
      </div>
      <div
        className={`btn next ${nextDisable ? "disable" : ""}`}
        disabled={nextDisable}
        onClick={() => {
          sliderRef.current.scrollLeft += offsetWidthValue / 2;
          checkButtons(offsetWidthValue, scrollWidthValue);
        }}
      >
        {">"}
      </div>
    </div>
  );
};

const SliderParent = () => {
  const data = [
    "Apple", "Ball", "Cat", "Dog", "Elephant", "Fruits", "Gorilla", "Horse",
    "Ink", "Jug", "Kite", "Lemon", "Orange", "Paddy", "Queen", "Rose", "Street",
    "Tuesday", "Umbrella", "Vanilla", "Wax", "Xerox", "Yarn", "Zebra"
  ];

  return (
    <div className="parent">
      {/* <Slider> */}
        {data.map(value => (
          <div key={value} className="child">
            {value}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSliderSale;