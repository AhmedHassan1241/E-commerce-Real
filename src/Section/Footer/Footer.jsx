import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaChevronUp } from "react-icons/fa";

import "./Footer.css";
import { FooterLink, FooterLinkeLast, WrapperFooterLink, WrapperFooterLinkLast } from "../../Components";
const Footer = () => {
  const token = localStorage.getItem("ref")
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };
  return (
    <div className="all">
      {/* <!-- BEFORE FOOTER --> */}
      <div
        className="up-page bg-body-secondary p-2 shadow-lg d-md-none d-flex align-items-center justify-content-center gap-2"
        style={{ cursor: "pointer" }}
        onClick={scrollToTop}
      >
        <FaChevronUp
          className="mt-1"
          style={{ color: "#3e3c3c", height: "16px" }}
        ></FaChevronUp>
        <p style={{ margin: "0", fontWeight: "300" }}>BACK TO TOP</p>
      </div>
      { !token?(
      <div
        className="row m-0 justify-content-center align-items-center text-center bg-black"
        style={{ height: "35vh", columnGap: "2rem", rowGap: "0" }}
      >
        <h2 className="col-lg-5 col-md-6 m-0 p-0 " style={{ color: "#FFFFFF" }}>
          BECOME A MEMBER & GET 15% OFF
        </h2>
        <div className="btn-wrapper mt c m-bottom">
          <a href="#.">
            <span>
              SIGN UP FOR FREE <span className="fs-5">&#8594;</span>
            </span>
          </a>
        </div>
      </div>):""}
      {/* <!-- BEFORE FOOTER --> */}
      {/* <!-- FOOTER --> */}
      <div
        className="footer bg-black pb-4"
      >
        <div className="container-md pt-0 pt-md-5 h-100 ">
          <hr
            className="m-0 bg-light"
            style={{ height: "3px" }}
          />
          <div className="row text-light pt-5 row-gap-5">
            <WrapperFooterLink header={"products"}>
              <FooterLink href="#.">Shoes</FooterLink>
              <FooterLink href="#.">Clothing</FooterLink>
              <FooterLink href="#.">Accessories</FooterLink>
            </WrapperFooterLink>
            <WrapperFooterLink header={"sports"}>
              <FooterLink href="#.">Running</FooterLink>
              <FooterLink href="#.">Basketball</FooterLink>
              <FooterLink href="#.">Football</FooterLink>
              <FooterLink href="#.">Yoga</FooterLink>
              <FooterLink href="#.">Outdoor</FooterLink>
              <FooterLink href="#.">Tennis</FooterLink>
              <FooterLink href="#.">Training</FooterLink>
            </WrapperFooterLink>
            <WrapperFooterLink header={"category"}>
              <FooterLink href="#.">Men</FooterLink>
              <FooterLink href="#.">Women</FooterLink>
              <FooterLink href="#.">Kids</FooterLink>
              <FooterLink href="#.">Outlet</FooterLink>
            </WrapperFooterLink>
            <WrapperFooterLink header={"company info"}>
              <FooterLink href="#.">About Us</FooterLink>
              <FooterLink href="#.">Careers</FooterLink>
              <FooterLink href="#.">Carbon Footprint</FooterLink>
              <FooterLink href="#.">Press</FooterLink>
            </WrapperFooterLink>
            <WrapperFooterLink header={"support"}>
              <FooterLink href="#.">Help</FooterLink>
              <FooterLink href="#.">Shipping</FooterLink>
              <FooterLink href="#.">Returns</FooterLink>
              <FooterLink href="#.">AdiClub & Newsletter</FooterLink>
              <FooterLink href="#.">Vouchers</FooterLink>
              <FooterLink href="#.">Size Charts</FooterLink>
              <FooterLink href="#.">Contact Us</FooterLink>
              <FooterLink href="#.">Accessibility</FooterLink>
              <FooterLink href="#.">Storefinder</FooterLink>
            </WrapperFooterLink>
            <WrapperFooterLink header={"follow us"}>
              <FooterLink href="#.">
                <FaFacebookSquare
                  className="mb-2 fs-3"
                ></FaFacebookSquare>
              </FooterLink>
              <FooterLink href="#.">
                <FaInstagram
                  className="mb-2 fs-3"
                ></FaInstagram>
              </FooterLink>
              <FooterLink href="#.">
                <FiYoutube
                  className="mb-2 fs-3"
                ></FiYoutube>
              </FooterLink>
            </WrapperFooterLink>
            <hr className="bg-light" style={{height: "2px" }} />
          </div>

          <WrapperFooterLinkLast>
              
                <FooterLinkeLast href="#" borderRight="border" >
                    Data Settings
                </FooterLinkeLast>
                <FooterLinkeLast href="#" borderRight="border" >
                Cookie Settings
                </FooterLinkeLast>
                <FooterLinkeLast href="#" borderRight="border" >
                Privacy Policy
                </FooterLinkeLast>
                <FooterLinkeLast href="#">
                Terms And Conditions
                </FooterLinkeLast>
          </WrapperFooterLinkLast>
        </div>
      </div>
      {/* <!-- FOOTER --> */}
    </div>
  );
};

export default Footer;
