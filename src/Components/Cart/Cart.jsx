import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeAllFromCart,
  removeOneFromCart,
} from "../CartSlice/CartSlice";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { PaymenMethod } from "../../Section";

const Cart = () => {
  const location = useLocation();

  const [activeCart, setActiveCart] = useState("");
  const navigator = useNavigate();
  const tokenExpiry = localStorage.getItem("tokenExpiry");
  const [total, setTotal] = useState({ price: 0, quantity: 0 });
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const items = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotal({ price: totalPrice, quantity: items });
    localStorage.setItem("cartItems", JSON.stringify(cart));

    if (location.pathname.split("/")[2]) {
      setActiveCart(`${location.pathname.split("/")[2]}`);
    } else {
      setActiveCart("/cart");
    }
  }, [cart, location]);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleBuy = (section) => {
    setActiveCart(section)
    navigate(section);
  };
  const handlePaymentConfirm = (method) => {
    console.log("Selected Payment Method:", method);
    // Handle payment method (e.g., navigate to the next step)
  };
  const cartRenderSection = () => {
    if (activeCart) {
      return (
        <>
          <PaymenMethod onConfirm={handlePaymentConfirm} />
        </>
      );
    }
  };

  return (
    <>
      {activeCart !== "payment" ? (
        tokenExpiry ? (
          <div>
            <div
              className="bg-light-subtle"
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "20px",
              }}
            >
              <div className="w-75">
                {cart.length === 0 ? (
                  <div className="text-center alert alert-warning" role="alert">
                    <p className="text-muted my-5">
                      No items in cart.
                      <NavLink className="ms-2" to="/">
                        Shop Now
                      </NavLink>
                    </p>
                  </div>
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
                          <strong>{item.name || item.title}</strong> -{" "}
                          {item.price} $
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
            {cart.length && (
              <div className="d-flex justify-content-center align-content-center text-center mb-5">
                <div className="card w-50 text-center">
                  <h5 className="card-header">Subtotal ( {total.quantity} Items ) </h5>
                  <div className="card-body">
                  <h6 className="card-text pb-2 d-flex justify-content-between">
                      <span className="fw-bold">Number of Items : </span>
                      {total.quantity} 
                    </h6>
                    <h6 className="card-text pb-2 d-flex justify-content-between">
                      <span className="fw-bold">Price of (<span className="text-primary">{total.quantity}</span>) Items : </span>
                      {total.price.toFixed(2)} $
                    </h6>
                    
                    {/* <h6 className="card-text border my-3 fw-bold bg-body-tertiary rounded p-2">
                      Total Price : {(total.price).toFixed(2)} $
                    </h6> */}
                    <button
                      onClick={() => handleBuy("payment")}
                      className="btn btn-warning mt-4"
                    >
                      {/* Proceed To Buy ({total.quantity}) Items */}
                      Proceed To Buy Items
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="alert alert-warning text-center my-4" role="alert">
            <strong>Login First</strong> to access this feature!
            <button
              className="ms-2 btn btn-sm btn-primary"
              onClick={() => navigator("/login")}
            >
              login
            </button>
          </div>
        )
      ) : (
        <>
          <div className="card-body">{cartRenderSection()}</div>
        </>
      )}
    </>
  );
};

export default Cart;
