import Slider from "react-slick";
import "./WhatsHotCard.css";
/* eslint-disable react/prop-types */
const WhatsHotCard = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    cssEase:"cubic-bezier(0, 0, 0.27, 1.85)",
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
      <div className="WhatsHot slider-container">
        <a href="#whatsHot" className="text-dark">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                className="carousel-items mx-auto border border-success-subtle border-3 py-1 text-center bg-danger-subtle"
              // style={{height: "250px"}}
              >
                  {item.image ? (
                    <div className="text-center">
                      <img
                        src={item.image}
                        className="w-75 px-1 d-inline-block"
                        alt={item.title}
                      />
                    </div>
                  ) : (
                    <video className="w-75" id="vd" autoPlay loop muted
                                        style={{padding: "0 6.2px"}}

                    >
                      <source id="source" src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                 <div className="title1 text-center mt-3 w-100 mx-auto ">
                  <h6
                    className="text-center w-100 fw-bold text-capitalize"
                    style={{
                      // height: "6rem",
                    }}
                  >
                    {item.title}
                  </h6>
                  <p
                className="fs-6 fw-lighter text-center px-1"
                style={{height: "6rem"}}
              >
                {item.description}
              </p>
                </div>
                
              </div>
            ))}
          </Slider>
        </a>
      </div>
    </>
  );
};

export default WhatsHotCard;
