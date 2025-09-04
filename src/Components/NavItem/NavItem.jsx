import logo1 from "../../assets/Images/logoo.svg";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import bagIcon from "../../assets/Images/bagIcon.svg";
import "./NavItem.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
const NavItem = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    Cookies.remove("token");
    Object.keys(Cookies.get()).forEach((cookieName) =>
      Cookies.remove(cookieName)
    );

    localStorage.clear();
    Swal.fire({
      icon: "success",
      title: "Logged out!",
      text: "You have been successfully logged out.",
      confirmButtonText: "OK",
      timer: 3000,
      timerProgressBar: true,
    });
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };
  // Toggle the navbar collapse
  const tokenExpiry = localStorage.getItem("tokenExpiry");
  const savedData = localStorage.getItem("formData");
  const parsedData = JSON.parse(savedData);

  const cart = useSelector((state) => state.cart.items);
  const fav = useSelector((state) => state.fav.items);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div
      className="navItem position-sticky top-0 z-3"
      style={{ zIndex: "5544999955555" }}
    >
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
                <a className="nav-link active" aria-current="page" href="#MEN">
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
            {/* Part of search */}
            {/* <form
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
            </form> */}
            <hr className=" border-3 border-dark " />
            <div
              className="icons d-flex align-items-center justify-content-between pe-2 my-sm-2 my-lg-0"
              style={{ width: "190px" }}
            >
              <NavLink
                to={tokenExpiry ? "/user" : "/login"}
                title="User"
                aria-label="User"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <div className="d-flex align-content-center">
                  {tokenExpiry &&
                    (parsedData.profile_image.length > 0 ? (
                      <img
                        src={parsedData.profile_image}
                        width={26}
                        height={27}
                        className="rounded-5"
                        title="Profile"
                        alt="image profile"
                        style={{ marginTop: "2px" }}
                      />
                    ) : (
                      <FaRegUser
                        style={{
                          fontSize: "24px",
                          cursor: "pointer",
                          marginTop: "4px",
                        }}
                        title="profile"
                      ></FaRegUser>
                    ))}

                  {!tokenExpiry ? (
                    <button className="btn btn-sm btn-outline-primary d-flex ">
                      <FaRegUser
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          margin: "2px 2px 0 0",
                        }}
                        title="profile"
                      ></FaRegUser>
                      Login
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-outline-danger ms-1 "
                      onClick={handleLogout}
                    >
                      LogOut
                    </button>
                  )}
                </div>
              </NavLink>
              <NavLink
                to="/fav"
                title="Favorite Items"
                className="fav-icon position-relative pointer-event"
                aria-label="Add to Wishlist"
                style={{ color: "#000" }}
              >
                <MdFavoriteBorder
                  style={{ fontSize: "24px" }}
                ></MdFavoriteBorder>
                <span
                  className="position-absolute translate-middle badge rounded-pill bg-danger "
                  style={{
                    top: "5px",
                    right: "-25px",
                    width: "23px",
                    height: "18px",
                    fontSize: "11px",
                    padding: "3px 15px 2px 2px",
                  }}
                >
                  +{fav.length}
                </span>
              </NavLink>
              {/* <!-- todo: --> */}

              <NavLink
                to="/cart"
                title="Cart Items"
                className="bag-icon position-relative pointer-event"
                style={{ cursor: "pointer" }}
              >
                <span
                  className="position-absolute translate-middle badge rounded-pill bg-danger "
                  style={{
                    top: "5px",
                    right: "-25px",
                    width: "23px",
                    height: "18px",
                    fontSize: "11px",
                    padding: "3px 15px 2px 2px",
                  }}
                >
                  +{totalItems}
                </span>
                <img
                  src={bagIcon}
                  style={{ height: "22px", width: "22px" }}
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavItem;
