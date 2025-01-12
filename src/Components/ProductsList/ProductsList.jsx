/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../CartSlice/CartSlice";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import { addToFav, removeOneFromFav } from "../FavSlice/FavSlice";
const ProductsList = ({ products }) => {
  const [favorite, setFavorite] = useState({});

  const dispatch = useDispatch();
  const handleFav = (product) => {
    setFavorite((prev) => ({ ...prev, [product.id]: !prev[product.id] }));
  };
  const handelAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container-fluid product-list">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-4 col-xl-3">
            <div className="card h-100 shadow-lg">
              <NavLink
                className="text-decoration-none text-dark"
                to={`/details/${product.id}`}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "15rem", objectFit: "fill" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate fw-bold">
                    {product.name}
                  </h5>
                  <p className="card-text">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="card-text">
                    <strong>Brand:</strong> {product.brand}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong>{" "}
                    <span className="text-success">${product.price}</span>
                  </p>
                </div>
              </NavLink>

              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div>
                  <button
                    className={"btn btn-primary w-100 m-2"}
                    onClick={() => handelAdd(product)}
                  >
                    Add
                  </button>
                </div>
                <div
                  className="m-2"
                  onClick={() => handleFav(product)}
                  style={{ cursor: "pointer" }}
                >
                  {!favorite[product.id] ? (
                    <FaRegHeart onClick={()=>dispatch(addToFav(product))} style={{ width: "29px", height: "26px" }} />
                  ) : (
                    <FcLike onClick={()=>dispatch(removeOneFromFav(product.id))} style={{ width: "29px", height: "26px" }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
