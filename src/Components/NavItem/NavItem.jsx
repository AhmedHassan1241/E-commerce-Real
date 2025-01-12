// import EgFly from "../../Assets/Images/eg.svg";
// import AdidasLogo from "../../Assets/Images/adidas_logo.svg";
import logo1 from "../../assets/Images/logoo.svg"
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import bagIcon from "../../assets/Images/bagIcon.svg";
import "./NavItem.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavItem = () => {
  // Toggle the navbar collapse
  const token = localStorage.getItem("ref");
  const cart = useSelector((state)=>state.cart.items);
const totalItems = cart.reduce((sum,item)=>sum + item.quantity,0)
  return (
    <div className="navItem position-sticky top-0 z-3">
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand p-0 m-0" to="/">
            <img src={logo1} alt="" className="rounded-3" />
          </NavLink>
          <div
            className="collapse navbar-collapse ms-1 ms-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#MEN"
                >
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#WOMEN">
                  WOMEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#KIDS">
                  KIDS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#SPORTS">
                  SPORTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#LIFESTYLE">
                  LIFESTYLE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger"
                  href="#SALE"
                  style={{ color: "rgb(83, 0, 76)", fontWeight: "600" }}
                >
                  SALE
                </a>
              </li>
            </ul>
            <form
              className="d-flex ms-auto align-items-center me-0 d-xl-flex mb-3 mb-lg-0"
              role="search"
            >
              <input
                className="from-control me-2"
                placeholder="Search"
                aria-label="Search"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              />
              <IoSearch
                className="position-relative fs-4"
                style={{ right: "35px" }}
              ></IoSearch>
            </form>
            <div
             className="icons d-flex align-items-center justify-content-between pe-2 my-sm-2 my-lg-0 text-dark"
             style={{ width: "100px" }}
            >
            <NavLink to={token?"/user":"/login"}
            title="Add to Wishlist"
            aria-label="Add to Wishlist"
            style={{ color: "#000" }}>
              <FaRegUser
                style={{ fontSize: "18px", cursor: "pointer" }}
                title="profile"
                ></FaRegUser>
                </NavLink>
              <NavLink
                to="#Favorite"
                title="Add to Wishlist"
                aria-label="Add to Wishlist"
                style={{ color: "#000" }}
              >
                <MdFavoriteBorder
                  style={{ fontSize: "18px"}}
                  
                  ></MdFavoriteBorder>
              </NavLink>
              {/* <!-- todo: --> */}
              
              <NavLink
              to="/cart"
                className="bag-icon position-relative pointer-event"
                style={{ cursor: "pointer" }}
              >
                 <span className="position-absolute translate-middle badge rounded-pill bg-danger "
                 style={{top:"5px", right: "-25px",width: "23px",height: "18px",fontSize: "11px",padding: "3px 15px 2px 2px"}}
                 >
    +{totalItems}
    </span>
                <img src={bagIcon} alt="" />
              </NavLink>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavItem;
