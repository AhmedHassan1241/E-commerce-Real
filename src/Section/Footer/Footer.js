
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";




import styles from "./Footer.module.css"
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };
  return (
    <div className={`${styles.all}`}>
        {/* <!-- BEFORE FOOTER --> */}
<div className="up-page bg-body-secondary p-2 shadow-lg d-sm-none d-flex align-items-center justify-content-center gap-2" style={{cursor:"pointer"}} onClick={scrollToTop}>
    <FaChevronUp className="mt-1" style={{color: "#3e3c3c", height: "16px"}}></FaChevronUp>
    <p style={{margin: "0", fontWeight: "300"}} >BACK TO TOP</p>
</div>
  <div className="row m-0 justify-content-center align-items-center text-center bg-dark " style={{height: "35vh", columnGap:"2rem", rowGap:"0"}}>
    <h2 className="col-lg-5 col-md-6 m-0 p-0 font-size-sm-head m--top" style={{color:"#FFFFFF"}}>BECOME A MEMBER & GET 15% OFF</h2>
    <div className={`${styles["btn-wrapper"]} mt c m-bottom`}><a href="#.">
        <span>SIGN UP FOR FREE <span className="fs-5">&#8594;</span></span>
    </a>
    </div>
   </div>
{/* <!-- BEFORE FOOTER --> */}
 {/* <!-- FOOTER --> */}
<div className="footer " style={{backgroundColor: "#000", paddingBottom: "2rem"}}>
    <div className="container-md pt-0 pt-md-5  h-100 " >
    <hr style={{backgroundColor: "#FFFFFF",height: "3px",display: "none"}} className="d-xl-block"/>
    <div className="row text-light pt-5 d-none d-md-flex" >
        <div className="col-md">
          <div className="">
            <h6 className="mb-3">PRODUCTS</h6>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Shoes</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Clothing</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Accessories</p></a>
          </div>
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
        <div className="col-md">
            <div>
                <h6 className="mb-3">SPORTS</h6>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Running</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Basketball</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Football</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Yoga</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Outdoor</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Tennis</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Training</p></a>
              </div>
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
        <div className="col-md">
        <div>
            <h6>CATEGORY</h6>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Men</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Women</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Kids</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Outlet</p></a>
        </div>
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
        <div className="col-md">
          <div>
            <h6>COMPANY INFO</h6>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">About Us</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Careers</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2"> Carbon Footprint</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Press</p></a>
          </div>
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
        <div className="col-md">
        <div>
            <h6>SUPPORT</h6>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Help</p></a>
            <a href="otherPages/shipping.html"><p style={{fontWeight:"300",fontSize: "13px"}} className="mb-2">Shipping</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Returns</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">adiClub & Newsletter</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Vouchers</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2"> Size Charts</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Contact Us</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Accessibility</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Storefinder</p></a>
        </div>
            
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
        <div className="col-md">
          <div>
            <h6>FOLLOW US</h6>
            <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
            <a href="#."><p><FaFacebookSquare className="mb-2" style={{fontSize: "1.5rem"}} ></FaFacebookSquare></p></a>
            <a href="#."><p><FaInstagram className="mb-2" style={{fontSize: "1.5rem"}}></FaInstagram></p></a>
            <a href="#."><p><FiYoutube className="fa-brands fa-square-youtube mb-2" style={{fontSize: "1.5rem"}}></FiYoutube></p></a>
          </div>
    
        </div>
    </div>
    
    {/* <!-- --SMALL SCREEN --> */}
    <div className="row text-light pt-5 d-md-none" id="Mobile" >
        <div className="col-md">
            <div className="shw-colapse d-flex align-items-center pb-3">
                <h6 className="m-0">PRODUCTS</h6>
                <button className="btn d-md-none p-0 m-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="false" aria-controls="collapseExample">
                    <FaChevronDown style={{color: "#ffffff", fontWeight: "900"}}></FaChevronDown>
                  </button>
            </div>
          <div className="collapse links" id="collapseProduct">
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Shoes</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Clothing</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Accessories</p></a>
          </div>
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}}/>
        <div className="col-md">
            <div className="shw-colapse d-flex align-items-center pb-3">
                <h6 className="m-0">SPORTS</h6>
                <button className="btn d-md-none p-0 m-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSports" aria-expanded="false" aria-controls="collapseSports">
                    <FaChevronDown style={{color: "#ffffff", fontWeight: "900"}}></FaChevronDown>
                  </button>
            </div>
            <div className="collapse show links " id="collapseSports">
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Running</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Basketball</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Football</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Yoga</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Outdoor</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Tennis</p></a>
                <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Training</p></a>
              </div>
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} />
        <div className="col-md">
            <div className="shw-colapse d-flex align-items-center pb-3">
                <h6 className="m-0">CATEGORY</h6>
                <button className="btn d-md-none p-0 m-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="false" aria-controls="collapseExample">
                    <FaChevronDown style={{color: "#ffffff", fontWeight: "900"}}></FaChevronDown>
                  </button>
                </div>
        <div className="collapse links" id="collapseCategory">
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Men</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Women</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Kids</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Outlet</p></a>
        </div>
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
        <div className="col-md">
            <div className="shw-colapse d-flex align-items-center pb-3">
                <h6 className="m-0" style={{width: "140px !important"}}>COMPANY INFO</h6>
                <button className="btn d-md-none p-0 m-0"  style={{width: "calc(100% - 140px) !important"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseComapny" aria-expanded="false" aria-controls="collapseExample">
                    <FaChevronDown style={{color: "#ffffff", fontWeight: "900"}}></FaChevronDown>
                  </button>
                </div>
          <div className="collapse links" id="collapseComapny">
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">About Us</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Careers</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2"> Carbon Footprint</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Press</p></a>
          </div>
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
        <div className="col-md">
            <div className="shw-colapse d-flex align-items-center pb-3">
                <h6 className="m-0" style={{width: "120px !important"}}>SUPPORT</h6>
                <button className="btn d-md-none p-0 m-0"  style={{width: "calc(100% - 120px) !important"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseSupport" aria-expanded="false" aria-controls="collapseExample">
                    <FaChevronDown style={{color: "#ffffff", fontWeight: "900"}}></FaChevronDown>
                  </button>
                </div>
        <div className="collapse links" id="collapseSupport">
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Help</p></a>
            <a href="otherPages/shipping.html"><p style={{fontWeight:"300",fontSize: "13px"}} className="mb-2">Shipping</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Returns</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">adiClub & Newsletter</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Vouchers</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2"> Size Charts</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Contact Us</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Accessibility</p></a>
            <a href="#."><p style={{fontWeight: "300",fontSize: "13px"}} className="mb-2">Storefinder</p></a>
        </div>
            
        </div>
        <hr style={{backgroundColor: "#FFFFFF",height: "2px", display: "block"}} className=" d-md-none"/>
        <div className="col-md">
          <div>
            <h6 className="mb-3">FOLLOW US</h6>
        <div className="icons d-flex" style={{gap: "0.8rem"}}>
            <a href="#."><p><FaFacebookSquare className="fa-brands fa-square-facebook mb-2" style={{fontSize: "1.6rem"}} ></FaFacebookSquare></p></a>
            <a href="#."><p><FaInstagram className="fa-brands fa-square-instagram mb-2" style={{fontSize: "1.6rem"}}></FaInstagram></p></a>
            <a href="#."><p><FiYoutube className="fa-brands fa-square-youtube mb-2" style={{fontSize: "1.6rem"}}></FiYoutube></p></a>
        </div>
          </div>
    
        </div>
    </div>
    {/* <!-- -SMALL-- --> */}
    <div className="mt-md-5 pt-md-5 pb-md-5">
    <div className="data-final col-md-12 col-xl-8 m-md-auto">
    <div className="row g-0 w-75 m-md-auto" style={{fontSize: "12px"}}>
        <div className="col-md-2 text-center col-xl-2 col-lg-2" style={{borderRight:" 1px solid  #666"}}><a href="#." style={{color: "#666"}}>Data Settings</a></div>
        <div className="col-md-2 text-center"  style={{borderRight:" 1px solid  #666"}}><a href="#." style={{color: "#666"}}>Cookie Settings</a></div>
        <div className="col-md-2 text-center "  style={{borderRight:" 1px solid  #666"}}><a href="#." style={{color: "#666"}}>Privacy Policy</a></div>
        <div className="col-md-3 text-center col-lg-3  "  style={{borderRight:" 1px solid  #666"}}><a href="#." style={{color: "#666"}}>Terms And Conditions</a></div>
        <div className="col-md-1 col-xl-1 px-xl-2 text-center"><a href="#." style={{color: "#666"}}>Imprint</a></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    {/* <!-- FOOTER --> */}
    </div>
  );
};

export default Footer;
