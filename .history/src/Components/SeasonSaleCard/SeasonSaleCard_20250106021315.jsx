// eslint-disable-next-line react/prop-types
const SeasonSaleCard = ({ items = [] }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="carousel-items mx-auto border border-5"
          style={{ flex: "1 0 23%", marginRight: "2.5%", marginLeft: "2.5%" }}
        >
          {item.img ? (
            <div className="text-center">
              <img src={item.img} className="w-75 h-75" alt={item.title} />
            </div>
          ) : (
            <video className="w-75 h-75" id="vd" autoPlay loop muted>
              <source id="source" src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="title1 text-center mt-3 w-75 mx-auto">
            <h6 className="fw-bolder fs-6">{item.title}</h6>
            <p className="fw-lighter mb-2" style={{ minHeight:"70px" }}>
              {item.description}
            </p>
            <a href="#." className="text-black fs-6 fw-semibold dec">
              <span>SHOP NOW</span>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default SeasonSaleCard;
