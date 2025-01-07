// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa6";
// // import { FaArrowLeft } from "react-icons/fa";

// // eslint-disable-next-line react/prop-types
// const CarouselSliderSale = ({ children }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   // eslint-disable-next-line react/prop-types
//   const itemLength = children.props.items.length;
//   const windowWidth = window.innerWidth;
//   return (
//     <>
//       <div id="carouselExampleCaptions" className="carousel slide">
//         {/* <div
//           className="carousel-inner d-flex overflow-visible"
//           style={{
//             transition: "transform .5s ease-in-out",
//             transform: `translateX(${activeIndex * -23.0823}%)`,
//             width: "72.2rem",
//           }}
//         > */}
//           {children}
//         {/* </div>
//         <div className="w-100 text-center mt-3">
//           <a
//             href="#ShopNow"
//             className="text-black fs-6 fw-semibold text-decoration-none"
//           >
//             <button className="btn btn-primary">SHOP NOW</button>
//           </a>
//         </div>

//         <button
//           className="carousel-control-next "
//           style={{ position: "absolute", right: "0", bottom: "35%" }}
//           id="Next"
//           type="button"
//           onClick={() => {
//             setActiveIndex((prev) =>
//               prev > (windowWidth>800? ((itemLength / 2)):(itemLength  - 2)) ? setActiveIndex(0) : prev + 1
//             );
//           }}
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
//             }}
//           ></FaArrowRight>
//         </button> */}
//       </div>
//     </>
//   );
// };

// export default CarouselSliderSale;