// export default ProductDetails;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeOneFromCart } from "../CartSlice/CartSlice";
import Slider from "react-slick";
import "./ProductDetails.css"
import img2 from "../../assets/Images/sale4W.avif"
import img3 from "../../assets/Images/o8.avif"



const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null
  const [counter, setCounter] = useState(0);
  const urlApi = "https://fakestoreapi.com/products/";
  const dispatch = useDispatch();

  // callback to cashing data of function of  product data
  const getProduct = useCallback(async () => {
    try {
      const response = await axios.get(`${urlApi}${productId}`);
      setProduct(response.data);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  }, [urlApi, productId]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  // Loading state
  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center my-5">
        <div>
          <div className="ms-3 spinner-border text-primary" role="">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-center text-primary fw-bold">Loading...</p>
        </div>
      </div>
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // waitForAnimate: true,
    waitForAnimate: false,
  };
  return (
    <div className="cardDetails container  my-5">
      <div className="card shadow-lg pt-1">
        <div className="imageDetails slider-container w-50 mx-auto my-4">
          <Slider {...settings}>
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="card-img-top img-fluid"
            />
             <img
              // src={product.image}
              src={img2}
              alt={product.title}
              loading="lazy"
              className="card-img-top img-fluid"
            /> <img
            // src={product.image}
            src={img3}
            alt={product.title}
            loading="lazy"
            className="card-img-top img-fluid"
          />
          </Slider>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold text-truncate">{product.title}</h5>
          <p className="card-text">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="card-text text-truncate0">
            <strong>Description:</strong> {product.description}
          </p>
          <p className="card-text fs-5">
            <strong>Price:</strong>{" "}
            <span className="text-success fw-bold">${product.price}</span>
          </p>

          {/* Add to Cart Buttons */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            {counter === 0 ? (
              <div className="w-100 text-center">
                <button
                  className="btn btn-primary w-50"
                  onClick={() => {
                    setCounter(counter + 1);
                    dispatch(addToCart(product));
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setCounter(counter - 1);
                    dispatch(removeOneFromCart(product.id));
                  }}
                >
                  Remove
                </button>
                <span className="fw-bold fs-4 mx-3">{counter}</span>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setCounter(counter + 1);
                    dispatch(addToCart(product));
                  }}
                >
                  Add More
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
