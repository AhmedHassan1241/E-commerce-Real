import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MyAccount, { EditProfile, Favorite, Orders } from "./UserLeftSection";
const User = () => {
  const token = localStorage.getItem("ref");
  const savedData = localStorage.getItem("formData");
  const parsedData = JSON.parse(savedData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Not Logined In!",
        text: "You are not logged in! Redirecting to Register.",
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
      });
      navigate("/register");
    }
  }, [token, navigate]);

  const handleLogout = () => {
    sessionStorage.clear()
    localStorage.clear();

    Swal.fire({
      icon: "success",
      title: "Logged out!",
      text: "You have been successfully logged out.",
      confirmButtonText: "OK",
      timer: 2000,
      timerProgressBar: true,
    });

    navigate("/");
    window.location.reload();

  };
  const [activeSection, setActiveSection] = useState("myAccount"); // Default active section

  const renderSectionContent = () => {
    switch (activeSection) {
      case "myAccount":
        return <MyAccount />;
      case "orders":
        return <Orders />;
      case "favorite":
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
      {token ? (
        <div className="row border rounded shadow p-3">
          {/* Left Section */}
          <div className="col-md-3 col-sm-12 border-end py-3">
            <div
              className={`list-group-item list-group-item-action py-2 ${
                activeSection === "myAccount" ? "bg-primary text-light rounded-2 fw-bold" : ""
              }`}
              onClick={() => setActiveSection("myAccount")}
              style={{ cursor: "pointer" }}
            >
              My Account
            </div>
            <div
              className={`list-group-item list-group-item-action py-2 ${
                activeSection === "orders" ? "bg-primary text-light rounded-2 fw-bold" : ""
              }`}
              onClick={() => setActiveSection("orders")}
              style={{ cursor: "pointer" }}
            >
              Orders
            </div>
            <div
              className={`list-group-item list-group-item-action py-2 ${
                activeSection === "favorite" ? "bg-primary text-light rounded-2 fw-bold" : ""
              }`}
              onClick={() => setActiveSection("favorite")}
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
              onClick={() => setActiveSection("editProfile")}
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
