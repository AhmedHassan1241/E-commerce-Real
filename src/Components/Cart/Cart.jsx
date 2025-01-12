import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeAllFromCart,
  removeOneFromCart,
} from "../CartSlice/CartSlice";
import { useEffect, useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigator = useNavigate();
    const token = localStorage.getItem("ref")
    const [total, setTotal] = useState({price:0,quantity:0});
  const cart = useSelector((state) => state.cart.items);
  useEffect(() => {
    const totalPrice = cart.reduce((sum,item) => sum + (item.price * item.quantity),0);
    const items = cart.reduce((sum,item) => sum + (item.quantity),0);
    setTotal({price:totalPrice,quantity:items})
    localStorage.setItem("cartItems", JSON.stringify(cart));

  }, [cart]);

  const dispatch = useDispatch();

  return (
    <>
    {token?
    (
      <div>
      <div
        className="bg-light-subtle"
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <div>
          {cart.length === 0 ? (
        <p className="text-center text-muted my-5">No items in cart.</p>
    ) : (
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center mb-2"
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="card-img-top img-fluid"
                      style={{ height: "5rem", objectFit: "contain" }}
                    />{" "}
                  </div>
                  <div className="me-5 text-truncate">
                    <strong>{item.name||item.title}</strong> - {item.price} $
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => dispatch(addToCart(item))}
                      style={{ marginRight: "5px" }}
                    >
                      +
                    </button>
                    <span className="mx-1 fw-bold">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => dispatch(removeOneFromCart(item.id))}
                      style={{ margin: "0 5px" }}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => dispatch(removeAllFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {cart.length?(
      <div className="d-flex justify-content-center align-content-center text-center mb-5">
        <div className="card w-25 text-center">
          <h5 className="card-header">Total Order</h5>
          <div className="card-body">
            <h6 className="card-text text-start"><span className="fw-bold">Items : </span>{total.price.toFixed(2)} $</h6>
            <h6 className="card-text text-start"><span className="fw-bold">Shipping & handling :  </span> 20 $</h6>
            <h6 className="card-text border my-3 fw-bold bg-body-tertiary rounded p-2">Total Price : {(total.price + 20).toFixed(2)} $</h6>
            <NavLink to="#" className="btn btn-warning mt-4">
              Proceed To Buy ({total.quantity}) Items
            </NavLink>
          </div>
        </div>
      </div>
      ):("")
    }
    </div>
      ):(<div className="alert alert-warning text-center my-4" role="alert">
        <strong>Login First</strong> to access this feature!
        <button className="ms-2 btn btn-sm btn-primary"
        onClick={()=>navigator('/login')}
        >login</button>
      </div>)}
    </>
  );
};

export default Cart;
