import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MyAccount, { EditProfile, Favorite, Orders } from "./UserLeftSection";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const User = () => {
  const [activeSection, setActiveSection] = useState(
     ""
  ); 
  const location = useLocation();

  const tokenExpiry = localStorage.getItem("tokenExpiry");
  const savedData = localStorage.getItem("formData");
  const parsedData = JSON.parse(savedData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenExpiry) {
      Swal.fire({
        icon: "warning",
        title: "Not Logined In!",
        text: "You are not logged in! Redirecting to Login.",
        confirmButtonText: "OK",
        timer: 4000,
        timerProgressBar: true,
      });
      navigate("/login");
    }
    // to get pathName of url & setToActive
    if (location.pathname.split("/")[2]) {
      setActiveSection(`${location.pathname.split("/")[2]}`);
    }else{
      setActiveSection("myAccount")
    }
  }, [tokenExpiry, navigate, location]);

  const handleLogout = () => {
    sessionStorage.clear();
    Cookies.remove("token");
    Object.keys(Cookies.get()).forEach((cookieName) => Cookies.remove(cookieName));

    localStorage.clear();

    Swal.fire({
      icon: "success",
      title: "Logged out!",
      text: "You have been successfully logged out.",
      confirmButtonText: "OK",
      timer: 3000,
      timerProgressBar: true,
    });

    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    // localStorage.setItem("activeSection", section);
    navigate(section);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "myAccount":
        return <MyAccount />;
      case "myOrders":
        return <Orders />;
      case "myFavorite":
        return <Favorite />;
      case "editProfile":
        return <EditProfile />;
      default:
        return <div>Select a section to view</div>;
    }
  };

  return (
    <div className="container my-5 text-center">
      <h2 className="fw-bold mb-4">Welcome {parsedData.name}</h2>
      {tokenExpiry ? (
        <div className="row border rounded shadow p-3">
          {/* Left Section */}
          <div className="col-md-3 col-sm-12 border-end py-3">
            <div
              className={`list-group-item list-group-item-action py-2 ${
                activeSection === "myAccount"
                  ? "bg-primary text-light rounded-2 fw-bold"
                  : ""
              }`}
              onClick={() => handleSectionChange("myAccount")}
              style={{ cursor: "pointer" }}
            >
              My Account
            </div>
            <div
              className={`list-group-item list-group-item-action py-2 ${
                activeSection === "myOrders"
                  ? "bg-primary text-light rounded-2 fw-bold"
                  : ""
              }`}
              onClick={() => handleSectionChange("myOrders")}
              style={{ cursor: "pointer" }}
            >
              Orders
            </div>
            <div
              className={`list-group-item list-group-item-action py-2 ${
                activeSection === "myFavorite"
                  ? "bg-primary text-light rounded-2 fw-bold"
                  : ""
              }`}
              onClick={() => handleSectionChange("myFavorite")}
              style={{ cursor: "pointer" }}
            >
              Favorite
            </div>
            <div
              className={`list-group-item list-group-item-action py-2 ${
                activeSection === "editProfile"
                  ? "bg-primary text-light rounded-2 fw-bold"
                  : ""
              }`}
              onClick={() => handleSectionChange("editProfile")}
              style={{ cursor: "pointer" }}
            >
              Edit Profile
            </div>
            <div
              onClick={handleLogout}
              className="list-group-item list-group-item-action py-2  text-danger fw-bold rounded-1 mt-2"
              style={{ cursor: "pointer" }}
            >
              Logout
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-9 col-sm-12 text-center py-3">
            <div className="card shadow p-3">
              <div className="card-body">{renderSectionContent()}</div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;
