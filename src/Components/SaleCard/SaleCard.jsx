import Slider from "react-slick";
import "./SaleCard.css";
/* eslint-disable react/prop-types */
const SaleCard = ({ data }) => {
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
      <div className="saleCard slider-container">
        <a href="#sales" className="text-dark">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                className="carousel-items mx-auto border border-success-subtle border-3 py-1 text-center bg-danger-subtle"
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
                  <span
                    className="position-absolute"
                    style={{
                      top: "3%",
                      left: "5%",
                      width: "auto",
                      padding: "3px",
                      borderRadius: "5px",
                      fontSize: "13px",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "GrayText",
                    }}
                  >
                    {item.discount}
                  </span>
                </div>
                <div className="title1 text-center mt-3 w-100 mx-auto ">
                  <h6
                    className="text-center w-100 fw-bold"
                    style={{
                      height: "6rem",
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
                    {item.currentPrice}
                  </ins>{" "}
                  <del
                    className="ms-2"
                    style={{
                      letterSpacing: "1.5px",
                      fontSize: "12px",
                      color: "rgb(144, 124, 124)",
                      fontWeight: "0",
                    }}
                  >
                    {item.originalPrice}
                  </del>
                </p>
              </div>
            ))}
          </Slider>
        </a>
      </div>
    </>
  );
};

export default SaleCard;
