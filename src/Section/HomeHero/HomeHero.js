import { PrimaryButton } from "../../Components";
import styles from "./HomeHero.module.css";
const HomeHero = () => {
  return (
    <>
      {/* <!-- HOME --> */}
      <div className="container-fluid">
        <div
          className={`${styles.home} px-2 d-flex flex-column justify-content-evenly bg-success`}
        >
          <div className="title-home w-xl-25 h-xl-50">
            <h1
              className="text-light"
              style={{ fontWeight: "600", fontSize: "45px", maxWidth: "70%" }}
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
          {/* <!-- BUTTON SHOP WOMMEN --> */}
          <PrimaryButton>SHOP WOMENS</PrimaryButton>
          {/* <!-- BUTTON SHOP WOMMEN --> */}
          {/* <!-- BUTTON SHOP MENS --> */}
          <PrimaryButton>SHOP MENS </PrimaryButton>
          {/* <!-- BUTTON SHOP MENS --> */}
          {/* <!-- BUTTON SHOP KIDS --> */}
          <PrimaryButton>SHOP KIDS </PrimaryButton>
          {/* <!-- BUTTON SHOP KIDS --> */}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#fff"
            className="bi bi-chat-dots"
            viewBox="0 0 16 16"
          >
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
          </svg>
        </div>
      </div>
      {/* <!-- HOME --> */}
      {/* </a> */}
    </>
  );
};

export default HomeHero;
