// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const TokenHandler = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const isTokenExpired = () => {
//     const tokenExpiry = localStorage.getItem("tokenExpiry");
//     if (!tokenExpiry) return true;
//     return new Date().getTime() > tokenExpiry;
//   };
//   console.log(isTokenExpired());

//   const handleLogout = () => {
//     sessionStorage.clear();
//     localStorage.clear();
//     Swal.fire({
//       icon: "warning",
//       title: "Session Expired!",
//       text: "Your session has expired. Please log in again.",
//       confirmButtonText: "OK",
//       timer: 3000,
//       timerProgressBar: true,
//     });
//     navigate("/login"); // Redirect to login page
//     setTimeout(() => {
//       window.location.reload();
//     }, 3000);
//   };

//   const checkToken = () => {
//     if (isTokenExpired()) {
//       handleLogout();
//     }
//   };
//   if (token) {
//     if (isTokenExpired() === false) {
//       setTimeout(() => {
//         checkToken();
//       }, 10000);
//     }
//   }
// };

// export default TokenHandler;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TokenHandler = () => {
  const navigate = useNavigate();

  const isTokenExpired = () => {
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    if (!tokenExpiry) return true;
    return new Date().getTime() > tokenExpiry;
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    Swal.fire({
      icon: "warning",
      title: "Session Expired!",
      text: "Your session has expired. Please log in again.",
      confirmButtonText: "OK",
      timer: 3000,
      timerProgressBar: true,
    });
    navigate("/login");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  useEffect(() => {
    const checkToken = () => {
      if (isTokenExpired()) {
        handleLogout();
      }
    };
    // window.addEventListener("beforeunload", () => {
    //     sessionStorage.clear();
    //     localStorage.clear();
    //   });
      
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    if (tokenExpiry) {
        console.log(tokenExpiry);
        console.log(new Date().getTime());
        
        
      const timeUntilExpiry = tokenExpiry - new Date().getTime();
            setTimeout(() => {
          checkToken();
        }, timeUntilExpiry);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

};

export default TokenHandler;
