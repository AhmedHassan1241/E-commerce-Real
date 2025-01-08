/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "./ArrivalCard.css"
const ArrivalCard = ({data}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl:true,
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
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
          dots: false,
        },
      },
    ],
  };
  return (
    <>
    <div className="arrivalCard slider-container">
        <a href="#newArrival" className="text-dark">
          <Slider {...settings}>
          {data.map((item, index) => (

    //  <div className="col-3 col-lg-3" key={index}>
    //                 <img src={item.image} className="d-block w-100" alt="..."></img>
    //               <article className="text-left p-2">
    //                 <a
    //                   href="#."
    //                   style={{
    //                     color: "#000",
    //                     fontWeight: "300",
    //                     fontSize: "17px",
    //                     textDecoration:"none",
    //                   }}
    //                   className="linkGo"
    //                 >
    //                   {item.name}
    //                 </a>
    //                 <p>
    //                   <ins
    //                     style={{
    //                       fontSize: "12px",
    //                       color: "rgb(202, 202, 202)",
    //                       textDecoration: "none",
    //                       fontWeight: "300",
    //                       letterSpacing: "1px",
    //                     }}
    //                   >
    //                    {item.originalPrice}
    //                   </ins>{" "}
    //                 </p>
    //               </article>
    //               </div>
    <div
    key={index}
    className="carousel-items mx-auto border border-success-subtle border-3 py-1 text-center bg-dark-subtle"
  >
    <div className="position-relative">
      {item.image ? (
        <div className="text-center">
          <img
            src={item.image}
            className="w-100 px-1"
            alt={item.title}
          />
        </div>
      ) : (
        <video className="w-75 h-75" id="vd" autoPlay loop muted>
          <source id="source" src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
    </div>
    <div className="title1 text-center mt-3 w-100 mx-auto ">
      <h6
        className="text-center w-100 fw-bold"
        style={{
          height: "4rem",
        }}
      >
        {item.name}
      </h6>
    </div>
    <p className="d-flex justify-content-around">
      <ins
        style={{
          fontSize: "12px",
          color: "rgb(212, 24, 24)",
          textDecoration: "none",
          fontWeight: "300",
          letterSpacing: "1px",
        }}
      >
        {item.originalPrice}
      </ins>{" "}
      
    </p>
  </div>
          ))}
 </Slider>
        </a>
      </div>
    </>
  )
}

export default ArrivalCard
