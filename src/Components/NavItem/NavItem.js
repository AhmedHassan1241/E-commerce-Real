import EgFly from "../../Assets/Images/eg.svg";
import AdidasLogo from "../../Assets/Images/adidas_logo.svg";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

import styles from "./NavItem.module.css";
import { useState } from "react";

const NavItem = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle the navbar collapse
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
        <div className=" container-fluid d-none d-xl-block">
          <div
            className={`${styles["up-nav"]} pb-1 pt-1 row ms-auto`}
            style={{ width: "50%" }}
          >
            <div className="col-4">
              <a href="#..">adidas official website Egypt </a>
            </div>
            <div className="col">
              <a href="#..">help</a>
            </div>
            <div className="col-2 ">
              <a href="#..">order tracker</a>
            </div>
            <div className="col">
              <a href="#..">adiclub</a>
            </div>
            <div className="col">
              <a href="#..">returns</a>
            </div>
            <div className="col">
              <a href="#..">login</a>
            </div>
            <div className="col">
              <a href="#..">
                <img
                  src={EgFly}
                  alt=""
                  style={{ width: "15px", height: "15px" }}
                />
              </a>
            </div>
          </div>
        </div>
      <nav
        className="navbar navbar-expand-lg sticky-top shadow"
        style={{ flexWrap: "wrap", backgroundColor: "white" }}
      >
        <div
          className="container-fluid d-flex align-items-center "
          id="main-nav"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isCollapsed ? "true":"false"}
            aria-label="Toggle navigation"
          >
                <span className="navbar-toggler-icon"></span>
          </button>
          <a
            className="navbar-brand m-auto"
            style={{ width: "0" }}
            href="index.htm"
          >
            <img src={AdidasLogo} alt="" />
          </a>
          <div
            className="icons  d-flex align-items-center justify-content-between d-xl-none"
            style={{ width: "100px" }}
          ></div>
          <div
            className={`collapse navbar-collapse ${isCollapsed?"show":""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="MEN.html"
                >
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="WOMEN.html">
                  WOMEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#..">
                  KIDS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#..">
                  SPORTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#..">
                  LIFESTYLE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger"
                  href="#.."
                  style={{ color: "rgb(83, 0, 76)", fontWeight: "600" }}
                >
                  SALE
                </a>
              </li>
            </ul>
            <form
              className="d-flex ms-auto align-items-center me-0 d-xl-flex d-none"
              role="search"
            >
              <input
                className={`${styles["from-control"]}me-2`}
                placeholder="Search"
                aria-label="Search"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              />
              <IoSearch
                className="position-relative fs-4"
                style={{ right: "35px" }}
              ></IoSearch>
            </form>
          </div>
          <div
            className="icons  d-flex align-items-center justify-content-between pe-2 d-none d-sm-flex"
            style={{ width: "100px" }}
          >
            <FaRegUser
              style={{ fontSize: "18px", cursor: "pointer" }}
              title="profile"
            ></FaRegUser>
            <a
              href="otherPages/wishlist.html"
              title="Add to Wishlist"
              aria-label="Add to Wishlist"
              style={{ color: "#000" }}
            >
              <MdFavoriteBorder
                style={{ fontSize: "18px", cursor: "pointer" }}
              ></MdFavoriteBorder>
            </a>
            {/* <!-- todo: --> */}
            <span
              className={`${styles["bag-icon"]}`}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <svg
                title="bag"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="black"
                className="bi bi-bag-dash"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavItem;
