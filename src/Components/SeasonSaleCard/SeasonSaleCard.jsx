// import "./SeasonSaleCard.css"
// // eslint-disable-next-line react/prop-types
// const SeasonSaleCard = ({ items = [] }) => {
//   return (
//     <>
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className="carousel-items mx-auto border border-5 py-2"
//           style={{ flex: "1 0 23%", marginRight: "2.5%", marginLeft: "2.5%" }}
//         >
//           {item.img ? (
//             <div className="text-center">
//               <img src={item.img} className="w-75 h-75" alt={item.title} />
//             </div>
//           ) : (
//             <video className="w-75 h-75" id="vd" autoPlay loop muted>
//               <source id="source" src={item.video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           )}
//           <div className="title1 text-center mt-3 w-75 mx-auto">
//             <h6 className="title fw-bolder fs-6">{item.title}</h6>
//             <p className="fs-6 fw-lighter mb-2 text-center" style={{ minHeight:"70px"}}>
//               {item.description}
//             </p>
//             {/* <a href="#ShopNow" className="text-black fs-6 fw-semibold text-decoration-none">
//               <button className="btn btn-primary">SHOP NOW</button>
//             </a> */}
//           </div>
//         </div>
//       ))}
     
//     </>
//   );
// };

// export default SeasonSaleCard;
import Slider from "react-slick";
import "./SeasonSaleCard.css"
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const  SeasonSaleCard=({items})=> {
  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 900,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // initialSlide: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        },
      },
    ],
  };
  return (
    <div className="seasonSaleCard slider-container">
      <NavLink to="product" className="text-black">
      <Slider {...settings}>
        {
        // eslint-disable-next-line react/prop-types
        items.map((item) => (
          <div
            key={item.id}
            className="carousel-items mx-auto border border-success-subtle border-3 py-1 text-center bg-secondary-subtle"
          >
            {item.image ? (
              <div className="text-center">
                <img src={item.image} className="d-inline w-75 h-75" alt={item.title} />
              </div>
            ) : (
              <video className="w-75 h-75" id="vd" autoPlay loop muted>
                <source id="source" src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="title1 text-center mt-3 w-75 mx-auto"
            // style={{maxHeight: "10rem",minHeight:"10rem"}}
            >
              <h6 className="title fw-bolder fs-6">{item.title}</h6>
              <p
                className="fs-6 fw-light text-center"
                style={{height: "6rem"}}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      </NavLink>
    </div>
  );
}

export default SeasonSaleCard;
