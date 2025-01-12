// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const [counter, setCounter] = useState(0);
//   const { productId } = useParams();
//   const [product, setProduct] = useState([]);
//   const urlApi = "https://fakestoreapi.com/products/";
//   const getProduct = async () => {
//     try {
//       const response = await axios.get(`${urlApi}${productId}`);
//       setProduct(response.data); // Extract product data from the response
//       console.log(response.data);
//     } catch (err) {
//       console.error("Error fetching product:", err);
//     }
//   };

//   useEffect(() => {
//     getProduct();
//   }, [productId]); // Re-run this effect if productId changes

//   if (!product) return <p>Loading...</p>;
//   else
//     return (
//       <>
//         <div key={product.id} className="col-12 col-md-4 col-xl-3">
//           <a href={`#details/${product.id}`} className="text-decoration-none">
//             <div className="card h-100 shadow-lg">
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//                 style={{ height: "15rem", objectFit: "fill" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-truncate">{product.name}</h5>
//                 <p className="card-text">
//                   <strong>Category:</strong> {product.category}
//                 </p>
//                 <p className="card-text">
//                   <strong>Brand:</strong> {product.brand}
//                 </p>
//                 <p className="card-text">
//                   <strong>Price:</strong>{" "}
//                   <span className="text-success">${product.price}</span>
//                 </p>
//                 {/* <div className="w-100 text-center mt-2">
//                 <a href={`#addToCar/${product.id}`} className="btn btn-primary w-75">Add to Cart</a>
//                 </div> */}
//                 <div className="d-flex justify-content-between">
//                   {
//                     <button
//                       href="#"
//                       className={`btn btn-primary ${counter ? "" : "w-100"}`}
//                     >
//                       Add
//                     </button>
//                   }
//                   <span style={{ display: counter > 0 ? "" : "none" }}>
//                     {counter}
//                   </span>
//                   <button
//                     href="#"
//                     className="btn btn-danger "
//                     style={{ display: counter ? "" : "none" }}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </div>{" "}
//       </>
//     );
// };

// export default ProductDetails;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeOneFromCart } from "../CartSlice/CartSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null
  const [counter, setCounter] = useState(0);
  const urlApi = "https://fakestoreapi.com/products/";
// const cart = useSelector((state)=>state.cart.items);
const dispatch = useDispatch();

  // Fetch product data
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

  // Render product details
  return (
    <div className="container w-50 my-5">
      <div className="card shadow-lg mx-auto pt-5">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="card-img-top img-fluid"
          style={{ height: "15rem", objectFit: "contain" }}
        />
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
                  onClick={() => {setCounter(counter + 1);dispatch(addToCart(product))}}
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <>
                <button
                  className="btn btn-danger"
                  onClick={() => {setCounter(counter - 1);dispatch(removeOneFromCart(product.id))}}
                >
                  Remove
                </button>
                <span className="fw-bold fs-4 mx-3">{counter}</span>
                <button
                  className="btn btn-primary"
                  onClick={() => {setCounter(counter + 1);dispatch(addToCart(product))}}
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
