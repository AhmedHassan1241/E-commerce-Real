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


import  { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const CarouselSliderSale = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Simulate fetching data
  const fetchData = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newItems = [];
      for (let i = 0; i < 10; i++) {
        newItems.push(`Item ${(items.length + i + 1)}`);
      }
      setItems((prevItems) => [...prevItems, ...newItems]);

      if (items.length + newItems.length >= 50) {
        setHasMore(false); // Stop loading when we have 50 items
      }

      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData(); // Initial fetch on mount
  }, []);

  return (
    <div>
      <h2>Infinite Scroll Example</h2>
      <InfiniteScroll
        dataLength={items.length} // Length of the current items array
        next={fetchData} // Function to call to fetch more data
        hasMore={hasMore} // Determines if more items should be loaded
        loader={<h4>Loading...</h4>} // Loader while fetching data
        endMessage={<p>No more items to load</p>} // Message when there are no more items
      >
        {items.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default CarouselSliderSale;
