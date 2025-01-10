import { useState } from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductsList = ({ products }) => {
    const [counter,setCounter] = useState(0)
    const handelAdd=()=>{
        setCounter( counter + 1)
      }
        const handelRemove=()=>{
            setCounter( counter - 1);
      }
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {
        // eslint-disable-next-line react/prop-types
        products.map((product) => (
          <div key={product.id} className="col-12 col-md-4 col-xl-3">
            <a href={`#details/${product.id}`} className="text-decoration-none">
            <div className="card h-100 shadow-lg">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "15rem", objectFit: "fill" }}
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.name}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> <span className="text-success">${product.price}</span>
                </p>
                {/* <div className="w-100 text-center mt-2">
                <a href={`#addToCar/${product.id}`} className="btn btn-primary w-75">Add to Cart</a>
                </div> */}
                 <div className="d-flex justify-content-between">
            {
            <button href="#" className={`btn btn-primary ${counter?'':'w-100'}`}  onClick={handelAdd}>
              Add
            </button> 
            }
            <span style={{display:counter>0? "":"none"}}>{counter}</span>
            <button href="#" className="btn btn-danger " style={{display:counter?"":"none"}} onClick={handelRemove}>
              Remove
            </button>
            </div>
            <NavLink className="btn btn-success mt-2 w-100" to={`/Details/${product.id}`}>Details</NavLink>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
