import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie"
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  //   const [tokenData, setTokenData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://tarmeezacademy.com/api/v1/login",
        formData
      );

      // to save token & expiration time
      const saveToken = (token) => {
        const expirationTime = new Date().getTime() +  43200000; // 12 hours from now
        Cookies.set("token",token,{expires:1,secure:true,sameSite:"Strict"}); //save token in Cookies
        localStorage.setItem("tokenExpiry", expirationTime);
      };
      const token= response.data.token;
      saveToken(token)
      localStorage.setItem("formData", JSON.stringify(response.data.user));
      Swal.fire({
        icon: "success", // Icon for success
        title: "Login successful!",
        text: "Welcome back! You have logged in successfully.",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
      navigate("/"); // Redirect to a protected route
    } catch (error) {
      console.error("Error response:", error.response?.data);
      const errorMessage =
        error.response?.data?.message ||
        "Login failed. Check your credentials.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded"
        style={{
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0px 1rem 2rem 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold text-primary text-uppercase"
          style={{
            color: "#4CAF50",
            textShadow: "2px 2px 18px rgba(0, 0, 0, 0.2)",
          }}
        >
          Login
        </h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="form-control"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="mt-3 text-center">
          <p>
            {`Don't have an account?`}{" "}
            <NavLink to={"/register"}>Register</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
