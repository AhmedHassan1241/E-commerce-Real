import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home/Home";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import { ScrollToTop } from "./Components";
import CartPage from "./Pages/CartPage/CartPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from './Pages/LoginPage/LoginPage';
import UserPage from "./Pages/UserPage/UserPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
          {/* <Header/> */}
        <Routes>
          <Route basename="/">
            <Route path="" element={<Home />} />
            <Route path="product" element={<ProductPage/>}/>
            <Route
            path="details/:productId"
            element={<ProductDetailsPage />}
          />
          </Route>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
