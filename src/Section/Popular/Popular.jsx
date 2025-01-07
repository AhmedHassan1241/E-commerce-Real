import { Category, SectionHeader } from "../../Components";

// import arrowImg from "../../Assets/categories/arrow.svg";
import menImg from "../../Assets/Images/men.jpg";
import womenImg from "../../Assets/Images/woman.jpg";
import kidsImg from "../../Assets/Images/kids.jpg";

import "./Popular.css";
const Popular = () => {
  return (
    <>
      <div
        className="popular"
        style={{  paddingBottom: "6rem" }}
      >
        <div className="container-fluid">
          <div className="head pb-3">
            <div className="row">
              <div className="col-12">
                <SectionHeader>POPULAR RIGHT NOW</SectionHeader>
              </div>
            </div>
          </div>
          {/* <div className="data">
            <div className="row gy-5 gx-4 gx-4">
              <div className="col-lg-4">
                <a href="#." className="text-dark">
                  <h2 className="pb-1 fw-bold">gazelle</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">vI court</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">campus</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">end of season sale</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">ultraboost</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">football</h2>
                </a>
              </div>
            </div>
          </div> */}
            <div
              className="categories row gx-3 gy-3"
              // style={{ marginTop: "6rem" }}
            >
              <Category name="MEN" img={menImg} />
              <Category name="WOMAN" img={womenImg} />
              <Category name="KIDS" img={kidsImg} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
