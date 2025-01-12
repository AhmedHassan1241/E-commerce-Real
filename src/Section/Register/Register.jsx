import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(); // FormData to handle file upload
    data.append("name", formData.name);
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("image", formData.image);

    try {
      const response = await axios.post(
        "https://tarmeezacademy.com/api/v1/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      Swal.fire({
          icon: "success", // Icon for success
          title: "Registration Successful!",
          text: response.data?.message || "Please log in to continue.",
          confirmButtonText: "OK",
        });
      navigate("/login");
    } catch (error) {
      console.error("Error Response:", error.response?.data);
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed! Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card px-4 py-2"
        style={{ boxShadow: "0px 1rem 2rem 20px rgba(0, 0, 0, 0.15)" }}
      >
        <h2
          className="text-center mb-4 fw-bold text-primary text-uppercase"
          style={{
            color: "#4CAF50",
            textShadow: "2px 2px 18px rgba(0, 0, 0, 0.2)",
          }}
        >
          Register
        </h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profile_image" className="form-label">
              Profile Image:
            </label>
            <input
              type="file"
              id="profile_image"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <NavLink to={"/login"}>Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
