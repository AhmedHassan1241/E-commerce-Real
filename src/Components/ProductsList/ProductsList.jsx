/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {  NavLink, useNavigate } from "react-router-dom";
import { addToCart } from "../CartSlice/CartSlice";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import { addToFav, removeOneFromFav } from "../FavSlice/FavSlice";
import { RiHeartAddLine } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import Swal from "sweetalert2";

const ProductsList = ({ products }) => {
  const navigate = useNavigate()
  const [favorite, setFavorite] = useState({});
  const dispatch = useDispatch();
  const handleFav = (product) => {
    setFavorite((prev) => ({ ...prev, [product.id]: !prev[product.id] }));
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.style.top="7%"
        toast.style.fontSize = "15px";
        toast.style.padding = "4px";
        toast.style.width = "330px";
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    const isFav = !favorite[product.id];
    
    Toast.fire({
      icon:isFav? "success":"warning",
      title:isFav? "Added To Favorite successfully":"Removed From Favorite !!"
    })

  };
  const handelAdd = (product) => {
    dispatch(addToCart(product));
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.style.top="7%"
        toast.style.fontSize = "15px";
        toast.style.padding = "4px";
        toast.style.width = "330px";
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
      
    });
    Toast.fire({
      icon:"success",
      title:"Added To Cart successfully"
    })
  };
  const  handelbuy = (product)=>{
    dispatch(addToCart(product));
    navigate("/cart")

  }

  return (
    <div className="container-fluid product-list">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-4 col-xl-3">
            <div className="card h-100 shadow-lg position-relative">
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
                    Add <MdAddShoppingCart className="fs-5"/>
                  </button>
                </div>
                <button
                  className="btn btn-warning m-2 "
                  onClick={() => handelbuy(product)}
                  style={{ cursor: "pointer" }}
                >
                  Buy Now <span><BsCartCheck/></span>
                  </button>
              </div>
              <div
                  className="m-2 position-absolute bg-light rounded-1"
                  onClick={() => handleFav(product)}
                  style={{ cursor: "pointer" ,top:"40%", right: "0%" }}
                >
                  {!favorite[product.id] ? (
                    <RiHeartAddLine onClick={()=>dispatch(addToFav(product))} style={{ width: "30px", height: "30px" }} />
                  ) : (
                    <FcLike onClick={()=>dispatch(removeOneFromFav(product.id))} style={{ width: "30px", height: "30px" }} />
                  )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
