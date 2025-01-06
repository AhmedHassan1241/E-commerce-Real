import { PrimaryButton } from "../../Components";
import "./HomeHero.css";
import message from "../../assets/Images/message.svg"
const HomeHero = () => {
  return (
    <>
      {/* <!-- HOME --> */}
      <div className="container-fluid mb-5">
        <div
          className="home px-2 d-flex flex-column justify-content-evenly bg-success"
        >
          <div className="title-home w-xl-25 h-xl-50">
            <h1
              className="text-light"
              style={{ fontWeight: "600", fontSize: "45px", }}
            >
              END OF SEASON SALE: UP TO 50% OFF
            </h1>
            <p
              className="text-light"
              style={{ fontSize: "18px", fontWeight: "300" }}
            >
              Say Hello to Savings: Get Up to 50% Off on selected items.
            </p>
          </div>
          <div className=" gap-5">
          <PrimaryButton link={"WOMENS"}>SHOP WOMENS</PrimaryButton>
          <PrimaryButton link={"MENS"}>SHOP MENS </PrimaryButton>
          <PrimaryButton link={"KIDS"}>SHOP KIDS </PrimaryButton>
          </div>
        </div>
        <div
          className="icons-msg position-fixed d-flex justify-content-center align-items-center"
          style={{
            cursor: "pointer",
            right: "30px",
            bottom: "60px",
            zIndex: "9999",
            backgroundColor: "#000",
            paddingTop: "0",
            width: "50px",
            height: "50px",
          }}
        >
          <img src={message} alt=""/>
        </div>
      </div>
      {/* <!-- HOME --> */}
      {/* </a> */}
    </>
  );
};

export default HomeHero;
