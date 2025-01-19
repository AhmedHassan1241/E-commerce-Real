import { useEffect, useState } from "react";
import { BsCashCoin, BsPaypal } from "react-icons/bs";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  addToCart,
  removeAllFromCart,
  removeOneFromCart,
} from "../../Components/CartSlice/CartSlice";
import { CreditCardForm, PayPalButton } from "../../Components";
import Swal from "sweetalert2";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState({ price: 0, quantity: 0 });
  // eslint-disable-next-line no-unused-vars
  const [confirmedOrders, setConfirmedOrders] = useState(
    JSON.parse(localStorage.getItem("ConfirmedOrders"))||[],
  );
  const [selectedMethod, setSelectedMethod] = useState(
    "Please Select Payment!!"
  );
  const [paymentPrice, setPaymentPrice] = useState(0);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("formData"));
  const cart = useSelector((state) => state.cart.items);
  

  useEffect(() => {
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const items = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotal({ price: totalPrice, quantity: items });
    
  }, [cart]);

  const handleSelect = (method, price) => {
    setSelectedMethod(method);
    setPaymentPrice(price);
  };

  const handleConfirm = () => {
    const orderDetails = {
      user,
      items: cart,
      total: (total.price + paymentPrice + 20).toFixed(2),
      paymentMethod: selectedMethod,
      deliveryDate: formatted1,
      deliveryAddress: "المنوفية - مدينة السادات - مجاورة 20",
    };
    setConfirmedOrders((prev)=>{
      const orderAll = [...prev, orderDetails];
      localStorage.setItem("ConfirmedOrders", JSON.stringify(orderAll));
    });
    cart.map((item) => {
      dispatch(removeAllFromCart(item.id));
    });
    // Navigate to the confirmation or success page
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
          title:"Order Done successfully"
        })
    navigate("/orderSuccess", { state: { orderDetails } });
    // Pass the selected method to the parent component or handle it here
  };
  // const currentDate = new Date();
  const getAfterXDay = new Date();

  getAfterXDay.setDate(getAfterXDay.getDate() + 4);
  const dayN = getAfterXDay.getDate().toString().padStart(2, "0");
  const dayS = getAfterXDay.toLocaleString("en-GB", { weekday: "long" });

  const month = getAfterXDay.toLocaleString("en-GB", { month: "short" });
  const year = getAfterXDay.getFullYear();
  const formatted1 = `${dayN} ${month} ${year}`;
  const formatted2 = `${dayS}, ${dayN} ${month}`;

  // onConfirm && onConfirm(selectedMethod);

  return (
    
    <div className="container my-5">
      {cart.length>0 ? (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
              <h4 className="mb-0">Select Payment Method</h4>
            </div>
            <div className="card-body bg-light">
              <form  aria-required>
                {/* Credit Card Section */}
                <div
                  className="form-check p-3 border rounded mb-3"
                  onClick={() => handleSelect("Credit Card", (total.price*2.5/100))}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="creditCard"
                    value="Credit Card"
                    checked={selectedMethod === "Credit Card"}
                    onChange={() => handleSelect("Credit Card", (total.price*2.5/100))}
                  />
                  <label
                    className={`form-check-label ${
                      selectedMethod === "Credit Card"
                        ? "text-primary fw-bold"
                        : ""
                    }`}
                    htmlFor="creditCard"
                  >
                    <i className="bi bi-credit-card fs-4 me-2">
                      <BsFillCreditCard2FrontFill />
                    </i>{" "}
                    Credit Card
                  </label>

                  {/* Display Credit Card Payment Form */}
                  {selectedMethod === "Credit Card" && (
                    <div
                      style={{ position: "relative", zIndex: 0 }}
                      className="mt-3"
                    >
                      <CreditCardForm
                        // total={(total.price + paymentPrice + 20).toFixed(2)}
                      />
                    </div>
                  )}
                </div>

                {/* PayPal Section */}
                <div
                  className="form-check p-3 border rounded mb-3"
                  onClick={() => handleSelect("PayPal", (total.price*3/100))}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paypal"
                    value="PayPal"
                    checked={selectedMethod === "PayPal"}
                    onChange={() => handleSelect("PayPal", (total.price*3/100))}
                  />
                  <label
                    className={`form-check-label ${
                      selectedMethod === "PayPal" ? "text-primary fw-bold" : ""
                    }`}
                    htmlFor="paypal"
                  >
                    <i className="bi bi-paypal fs-4 me-2">
                      <BsPaypal />
                    </i>{" "}
                    PayPal
                  </label>

                  {/* Display PayPal Button */}
                  {selectedMethod === "PayPal" && (
                    <div
                      style={{ position: "relative", zIndex: 0 }}
                      className="mt-3"
                    >
                      <PayPalButton
                        total={(total.price + paymentPrice + 20).toFixed(2)}
                      />
                    </div>
                  )}
                </div>

                {/* Cash on Delivery Section */}
                <div
                  className="form-check p-3 border rounded mb-3"
                  onClick={() => handleSelect("Cash on Delivery", 12)}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="cashOnDelivery"
                    value="Cash on Delivery"
                    checked={selectedMethod === "Cash on Delivery"}
                    onChange={() => handleSelect("Cash on Delivery", 12)}
                  />
                  <label
                    className={`form-check-label ${
                      selectedMethod === "Cash on Delivery"
                        ? "text-primary fw-bold"
                        : ""
                    }`}
                    htmlFor="cashOnDelivery"
                  >
                    <i className="bi bi-cash-coin fs-4 me-2">
                      <BsCashCoin />
                    </i>{" "}
                    Cash on Delivery
                  </label>
                  {selectedMethod === "Cash on Delivery" && (
                    <p
                      className={`text-muted ms-4 ${
                        selectedMethod === "Cash on Delivery"
                          ? "alert alert-warning"
                          : ""
                      }`}
                    >
                      Pay by cash on delivery. Non-refundable COD fees of EGP 12
                      may apply. Learn more. Pay online for contactless
                      deliveries.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4">
            <div className="card text-center">
              <h5 className="card-header bg-info text-white">
                Total Order ({total.quantity} items)
              </h5>
              <div className="card-body">
                <h6 className="card-text pb-2 d-flex justify-content-between">
                  <span className="fw-bold">Items:</span>
                  {total.price.toFixed(2)} $
                </h6>
                <h6 className="card-text pb-2 d-flex justify-content-between">
                  <span className="fw-bold">Shipping & Handling:</span> 20 $
                </h6>
                <h6 className="card-text pb-2 d-flex justify-content-between">
                  <span className="fw-bold">Payment Fee:</span> {paymentPrice} $
                </h6>
                <h6 className="card-text border my-3 fw-bold bg-body-tertiary rounded p-2">
                  Total Price: {(total.price + paymentPrice + 20).toFixed(2)} $
                </h6>
              </div>
              <hr />
              <div className="card-body">
                <h6 className="card-text pb-2 d-flex justify-content-between">
                  <span className="fw-bold">Payment Method:</span>
                  <span className="text-info">{selectedMethod}</span>
                </h6>
              </div>
              <hr />
              <div className="card-body">
                <h6 className="card-text pb-2 d-flex justify-content-between">
                  <span className="fw-bold">Delivering To:</span>
                  <span className="text-success">{user.name}</span>
                </h6>
                <h6 className="card-text pb-2 d-flex justify-content-between">
                  <span className="fw-bold">Delivery Address:</span>
                  <span className="text-muted">
                    المنوفية - مدينة السادات - مجاورة 20
                  </span>
                </h6>
              </div>
              <hr />
              <div className="card-body">
                <h6 className="card-text pb-2 text-start">
                  <span className="fw-bold">Arriving :</span>{" "}
                  <span className="text-primary fw-semibold">{formatted1}</span>
                </h6>
                <h6 className="card-text pb-2 text-start">
                  <div className="form-check p-3 border rounded mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="deliveryDate"
                      id="deliveryDate"
                      value="Delivery Date"
                      checked={true}
                      onChange={() => ""}
                    />
                    <label
                      className="form-check-label text-primary fw-bold"
                      htmlFor="deliveryDate"
                    >
                      <span className="text-primary fw-semibold">
                        {formatted2}
                      </span>
                    </label>
                    {cart.length === 0 ? (
                      <div className="text-muted ms-2 mt-2 alert alert-warning">
                        <div
                          className="text-center alert alert-warning"
                          role="alert"
                        >
                          <p className="text-muted my-5">
                            No items in cart.
                            <NavLink className="ms-2" to="/">
                              Shop Now
                            </NavLink>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="list-group">
                        {cart.map((item) => (
                          <div
                            className="text-muted ms-2 mt-2 alert alert-warning"
                            key={item.id}
                          >
                            <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                              <div>
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  loading="lazy"
                                  className="card-img-top img-fluid"
                                  style={{
                                    height: "5rem",
                                    objectFit: "contain",
                                  }}
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
                                <span className="mx-1 fw-bold">
                                  {item.quantity}
                                </span>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() =>
                                    dispatch(removeOneFromCart(item.id))
                                  }
                                  style={{ margin: "0 5px" }}
                                >
                                  -
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() =>
                                    dispatch(removeAllFromCart(item.id))
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            </li>
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                </h6>
              </div>
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-between">
            <button
              className="btn btn-success"
              onClick={handleConfirm}
              disabled={
                (!selectedMethod || selectedMethod === "Please Select Payment!!")
              }
            >
              Confirm Payment
            </button>
            <button
              className="btn btn-secondary ms-3"
              onClick={() => navigate("/cart")}
            >
              Back to Cart
            </button>
          </div>
        </div>
      </div>):( <div
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
            </div>)}
    </div>
  );
};

export default PaymentMethod;
